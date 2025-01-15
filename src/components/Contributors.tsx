import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const contributors = [
  {
    name: "Sanjay Nalamasa",
    role: "Lead Developer",
    image: "https://source.unsplash.com/random/200x200?face&1",
    quote: "Passionate about creating innovative ML solutions that make a difference."
  },
  {
    name: "Sowmya",
    role: "ML Engineer",
    image: "https://source.unsplash.com/random/200x200?face&2",
    quote: "Dedicated to improving text summarization accuracy and performance."
    //Dedicated to improving text summarization accuracy and performance.
  },
  {
    name: "Harika",
    role: "AI Researcher",
    image: "https://source.unsplash.com/random/200x200?face&3",
    quote: "Exploring new frontiers in machine learning and natural language processing."
    //Creating beautiful and intuitive user experiences for complex applications.
  },
  {
    name: "Sai Sadwik",
    role: "Backend Developer",
    image: "https://source.unsplash.com/random/200x200?face&4",
    quote: "Building robust and scalable backend systems for ML applications."
    //Building robust and scalable backend systems for ML applications.
  },
  {
    name: "Sriram",
    role: "frontend Developer",
    image: "https://source.unsplash.com/random/200x200?face&5",
    quote: "Creating beautiful and intuitive user experiences for complex applications."
    //Exploring new frontiers in machine learning and natural language processing.
  }
];

const Contributors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contributors.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + contributors.length) % contributors.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % contributors.length);
  };

  return (
    <div className="bg-dark-800 py-16" id="contributors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Contributors</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative w-32 h-32 flex-shrink-0">
                <img
                  src={contributors[currentIndex].image}
                  alt={contributors[currentIndex].name}
                  className="w-full h-full rounded-full object-cover border-2 border-primary-400"
                />
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-300 text-lg italic mb-4">"{contributors[currentIndex].quote}"</p>
                <h3 className="text-xl font-semibold text-primary-400">{contributors[currentIndex].name}</h3>
                <p className="text-gray-400">{contributors[currentIndex].role}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full glass-effect hover:text-primary-400 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full glass-effect hover:text-primary-400 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {contributors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary-400 w-4' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;