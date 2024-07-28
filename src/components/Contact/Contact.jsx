import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    useGSAP(() => {
        gsap.fromTo('.heading1', 
          {
            opacity: 0,
            y: '-80%', // Start from above the viewport
          }, 
          {
            opacity: 1,
            y: '60%', // Move to its original position
            duration: 1,
            delay: 0.1,
            scrollTrigger: {
              trigger: '.heading1',
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        );
      }, []);


  useGSAP(() => {
    gsap.from('.anim', {
      opacity: 0,
      delay: 0.1,
      y: '100%',
      stagger: 0.1, // Stagger each item by 0.2 seconds
      scrollTrigger: {
        trigger: '.anim',
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      }
    });
  }, []);

  return (
    <section id='Contact' className='relative top-[30px] max-sm:top-[75px]'>
        <div>
      <h1  className=" heading1 m-auto flex justify-center items-center max-sm:text-2xl text-4xl opacity-0 text-pink-300">
        CONTACT ME @
      
      </h1>
      <hr className='heading1 m-auto mt-10 w-1/5 max-sm:w-5/6'/>
      </div>
      
      <div className="list-none gap-20 max-sm:gap-5 my-16 max-sm:my-8 flex justify-center cursor-pointer  text-xl max-sm:flex-row max-sm:flex-wrap">
      <li className="flex anim p-5 max-sm:m-auto">
         
         <a href="https://www.instagram.com/10_kismat/"> <FaInstagram className="text-2xl w-[65px] h-[65px] text-pink-600  hover:scale-150 transition-transform duration-300" /></a>
       </li>
        <li className="flex anim p-5 max-sm:m-auto ">
          
          <a href="https://www.linkedin.com/in/prabin-sapkota-22993a309/"><FaLinkedin className=" hover:scale-150 transition-transform duration-300 text-2xl w-[65px] h-[65px] text-blue-700" /></a>
        </li>
        <li className="flex anim p-5 max-sm:m-auto">
          
          <a href="https://www.facebook.com/prabin.sapkota.75436" target='blank'><FaFacebookSquare className="text-2xl w-[65px] h-[65px] text-blue-700  hover:scale-150 transition-transform duration-300" /></a>
        </li>
       
        <li className="flex anim max-sm:m-auto p-5">
          
          <a href="https://github.com/PrabinsSapkota"><FaGithub className="text-2xl w-[65px] h-[65px] text-slate-500  hover:scale-150 transition-transform duration-300" /></a>
        </li>
        <li className="flex anim p-5 max-sm:m-auto hover:text-white">
          
          <a target='_blank' href="mailto:kis.sap759@gmail.com"><TfiEmail className="text-2xl w-[65px] h-[65px] text-red-500  hover:scale-150 transition-transform duration-300" /></a>
        </li>
      </div>
    </section>
  );
}

export default Contact;
