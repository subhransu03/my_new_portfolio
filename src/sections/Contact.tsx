"use client";

import { ArrowUpRight } from 'lucide-react';

export const ContactSection = () => {
  const email = "subh03ransu@gmail.com";

  const handleEmailClick = () => {
    // Gmail's compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-6 md:px-10 rounded-3xl text-center">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl">
            Let's create something amazing
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-2">
            Ready to bring you an amazing experience about web apps
          </p>
          <button
            onClick={handleEmailClick}
            className="text-white border border-gray-900 bg-gray-900 inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl text-sm md:text-base lg:text-lg hover:bg-gray-800 transition-colors"
          >
            <span>Contact me</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;