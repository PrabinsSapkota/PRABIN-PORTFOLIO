import React from "react";
import kismtImg from "../../assets/kismat4.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Hero() {
  
    useGSAP(() => {
        gsap.to("#heading", { opacity: 1, delay: 0.2 });
        gsap.to("#mid", { opacity: 1, delay: 0.4 });
        gsap.from("#last", {
            x: "-100vw",  
            opacity: 0,
            delay:0.75,   
            duration: 0.75, 
            ease: "power2.out",  
            stagger: 0.2, 
          });
        gsap.from("#img", {
            y: "100vh", 
            opacity: 0,   
            duration: 1,
            delay:1,  
            ease: "power2.out",  
            stagger: 0.2  
          });
}, []);
     
  return (
    <section className="w-full bg-secondary relative overflow-hidden">
      <div className="flex justify-center gap-10 max-sm:flex-col items-center mt-10 h-auto max-sm:h-auto">
        <div className="w-full max-sm:w-[90%] lg:w-[30%] my-5 justify-center border-inherit">
          <h1  id="heading" className="text-4xl text-pink-500 flex items-center mt-5 max-sm:text-3xl opacity-0">
            HI! I'M PRABIN SAPKOTA.
          </h1>
          <p id="mid" className="text-3xl text-pink-500 mt-5 max-sm:text-2xl opacity-0">Full Stack Software Engineer</p>
          <p id="last" className="text-2xl text-pink-300 text-justify my-5 max-sm:text-xl opacity-1">
            High level experience in web design and development, consistently delivering top-quality work. Passionate about creating intuitive and engaging user experiences that delight users and drive business success.
          </p>
        </div>
        <div className="flex justify-center  max-sm:w-full max-sm:h-auto">
          <img src={kismtImg} id="img" className="rounded-full w-full mb-11 max-sm:mt-[-50px] max-sm:w-[90%] h-auto lg:w-[450px] lg:h-[450px] max-sm:rounded-xl opacity-1" alt="Prabin Sapkota" />
         
         
        </div>
      </div>
    </section>
  );
}
