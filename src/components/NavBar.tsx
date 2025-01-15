import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-400">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="text-primary-400 text-xl font-bold">ML Summarizer</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {[
                { name: 'Home', href: 'hero' },
                { name: 'Features', href: 'social-proof' },
                { name: 'Partners', href: 'partners' },
                { name: 'Contributors', href: 'contributors' },
                { name: 'FAQ', href: 'faq' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full glass-effect border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: 'Home', href: 'hero' },
              { name: 'Features', href: 'social-proof' },
              { name: 'Partners', href: 'partners' },
              { name: 'Contributors', href: 'contributors' },
              { name: 'FAQ', href: 'faq' }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="text-gray-300 hover:text-primary-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;