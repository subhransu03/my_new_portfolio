"use client";

import { useEffect } from 'react';

export const Header = () => {
  useEffect(() => {
    const handleScroll = (e: any) => {
      e.preventDefault();
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({ behavior: "smooth" });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="lg:3px flex justify-center items-center sticky top-3 z-50">
    <nav className="gap-3 p-3 border border-white/15 bg-white/10 rounded-full backdrop-blur text-lg w-auto">
        <a href="#hero" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#about" className="nav-item">Skills</a>
        <a href="#certificates" className="nav-item">Certificates</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-green-500">Contact</a>
      </nav>
    </div>
  );
};

export default Header;