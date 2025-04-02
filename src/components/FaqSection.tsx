import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the text summarization work?",
    answer: "Our ML model uses advanced natural language processing to analyze text and extract key information, creating brief summaries while maintaining context and meaning bro."
  },
  {
    question: "What types of documents can I summarize?",
    answer: "You can summarize various text formats including articles, research papers, news, and documents but give in input text format only man. Our system supports multiple languages and formats."
  },
  {
    question: "Is there a word limit for summarization?",
    answer: "No!! There is No limit for summarization Your Patience makes You Summarise.-.)..."
  },
  {
    question: "How accurate are the summaries?",
    answer: "Our ML model achieves over 95% accuracy in maintaining key information, validated through extensive testing and user feedback."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 rounded-lg">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;