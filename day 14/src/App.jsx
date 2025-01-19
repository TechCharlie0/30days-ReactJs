import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    const hoverElements = document.querySelectorAll('a, button, .cursor-hover');

    hoverElements.forEach((el) => {
      el.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-hover');
      });
      el.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-hover');
      });
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
      <div className="cursor"></div>
    </div>
  );
};

export default App;
