import React from 'react';
import { MessageCircle } from 'lucide-react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FaqSection from './components/FaqSection';
import SocialProof from './components/SocialProof';
import Partners from './components/Partners';
import Contributors from './components/Contributors';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <NavBar />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <div id="social-proof">
          <SocialProof />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="contributors">
          <Contributors />
        </div>
        <div id="faq">
          <FaqSection />
        </div>
      </main>
      <footer className="glass-effect py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-400">ML Summarizer</h3>
              <p className="text-gray-400">Advanced text summarization powered by machine learning..</p>
              &nbsp; 
              &nbsp;  

              <div>
                    <a 
                     href="https://sanjaynalamasa-07.netlify.app/" 
                     //target="_blank" not use so comment i used for reference.
                    rel="noopener noreferrer"
                    className="text-white bg-primary-500 px-4 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-primary-600 hover:scale-105 hover:shadow-xl"
                          >
                    Our Services
                    </a>
                    </div>

            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-400">Contact</h3>
              <a 
                href="https://wa.me/918919753387" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <p className="text-gray-400 mt-2">Email: cdu2025@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
                <li><a href="#social-proof" className="text-gray-400 hover:text-primary-400 transition-colors">Features</a></li>
                <li><a href="#partners" className="text-gray-400 hover:text-primary-400 transition-colors">Partners</a></li>
                <li><a href="#contributors" className="text-gray-400 hover:text-primary-400 transition-colors">Contributors</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ML Text Summarization. All rights reserved.</p>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <p>Developed with ❤️ by Cdu Project Contributers...</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;