import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    gsap.fromTo(
      '.heading2',
      {
        opacity: 0,
        x: '-100%', // Start from left
      },
      {
        opacity: 1,
        x: '0%', // Move to its original position
        duration: 0.5,
        delay: 0.5, // Adjusted delay
        stagger: 0.1, // Stagger each item by 0.1 seconds
        scrollTrigger: {
          trigger: '.heading2',
          start: '', // Start animation when element's top is at 80% of viewport height
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  }, []);

  return (
    <footer className='bg-black text-white py-6 max-sm:px-8 px-24 '>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="heading2 text-pink-300 text-center sm:text-left">
          <p className="text-2xl max-sm:text-lg">
            &copy; 2024
          </p>
          <p className="heading2 text-2xl max-sm:text-lg lg:inline">
            Prabin Sapkota. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-right">
          <a href="#" className="heading2 text-pink-300 max-sm:text-lg text-2xl hover:text-pink-400 transition duration-300">
            Terms of Use
          </a>
          <a href="#" className="heading2 text-pink-300 max-sm:text-lg text-2xl hover:text-pink-400 transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="heading2 text-pink-300 max-sm:text-lg text-2xl hover:text-pink-400 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
