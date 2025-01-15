import React, { useState } from 'react';
import { FileText, Loader } from 'lucide-react';

const HeroSection = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const mockSummarize = async (text: string) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    const summary = sentences.slice(0, 2).join('. ') + '.';
    const mockAnalysis = {
      word_count: text.split(/\s+/).length,
      sentence_count: sentences.length,
      common_words: [['the', 5], ['is', 3], ['a', 2]],
      sentiment: 0.2,
      entities: [['John', 'PERSON'], ['New York', 'LOC']]
    };
    return { summary, analysis: mockAnalysis };
  };

  const handleSummarize = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      const { summary, analysis } = await mockSummarize(inputText);
      setSummary(summary);
      setAnalysis(analysis);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:pt-32 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block text-white">Advanced Text Summarization</span>
            <span className="block text-primary-400 mt-2">Powered by Machine Learning</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-gray-400 sm:text-xl md:mt-8 md:max-w-3xl">
            Transform lengthy documents into brief, meaningful summaries using state of the art ML algorithms.-.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8">
            <textarea
              className="w-full h-48 p-4 bg-dark-800 text-white rounded-xl border border-gray-700 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-200 focus:outline-none"
              placeholder="Paste your text here to summarize..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            
            <div className="flex justify-center mt-6">
              <button
                onClick={handleSummarize}
                disabled={loading || !inputText.trim()}
                className="flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 rounded-xl font-medium transition-all duration-200 hover-glow"
              >
                {loading ? (
                  <Loader className="animate-spin mr-2" size={20} />
                ) : (
                  <FileText className="mr-2" size={20} />
                )}
                Summarize Text
              </button>
            </div>

            {(summary || analysis) && (
              <div className="space-y-6 mt-8">
                {summary && (
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-lg font-medium text-primary-400 mb-3">Summary</h3>
                    <p className="text-gray-300">{summary}</p>
                  </div>
                )}
                
                {analysis && (
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-lg font-medium text-primary-400 mb-3">Text Analysis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                      <div>
                        <p>Word Count: {analysis.word_count}</p>
                        <p>Sentence Count: {analysis.sentence_count}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Common Words</p>
                        <ul className="space-y-1">
                          {analysis.common_words.map(([word, count]: [string, number]) => (
                            <li key={word} className="text-sm">{word} ({count})</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;