import React from 'react';
//all imported here.

const Partners = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white mb-12">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {['Open AI', 'Google-Gemini', 'Perplexity ', 'AI infrastructure', ].map((company, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="h-12 text-gray-400 font-bold text-xl">{company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;