from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
import spacy
from textblob import TextBlob
import nltk
from nltk.tokenize import sent_tokenize
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from collections import Counter

app = Flask(__name__)
CORS(app)

# Download required NLTK data
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('averaged_perceptron_tagger')

# Initialize the summarization pipeline
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

def analyze_text(text):
    # Basic text statistics
    sentences = sent_tokenize(text)
    words = word_tokenize(text)
    word_count = len(words)
    sentence_count = len(sentences)
    
    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    words_no_stop = [word.lower() for word in words if word.lower() not in stop_words]
    
    # Get most common words
    word_freq = Counter(words_no_stop).most_common(5)
    
    # Sentiment analysis
    blob = TextBlob(text)
    sentiment = blob.sentiment.polarity
    
    # Named Entity Recognitions
    doc = nlp(text)
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    
    return {
        "word_count": word_count,
        "sentence_count": sentence_count,
        "common_words": word_freq,
        "sentiment": sentiment,
        "entities": entities[:5]  # Return top 5 entities
    }

@app.route('/summarize', methods=['POST'])
def summarize_text():
    data = request.json
    text = data.get('text', '')
    
    if not text:
        return jsonify({"error": "No text provided"}), 400
    
    try:
        # Generate summary
        summary = summarizer(text, max_length=130, min_length=30, do_sample=False)[0]['summary_text']
        
        # Analyze text
        analysis = analyze_text(text)
        
        return jsonify({
            "summary": summary,
            "analysis": analysis
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)