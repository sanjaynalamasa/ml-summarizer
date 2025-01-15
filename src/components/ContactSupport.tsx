import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactSupport = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="https://wa.me/918919753387"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default ContactSupport;