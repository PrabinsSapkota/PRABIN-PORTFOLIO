import React from "react";
import { PiFileCssBold } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsFront = [
  { icon: <TiHtml5 className="text-red-600" />, percentage: "70%" },
  { icon: <PiFileCssBold className="text-blue-600" />, percentage: "60%" },
  { icon: <IoLogoJavascript style={{ color: 'yellow' }} />, percentage: "50%" },
  { icon: <FaReact className="text-blue-500" />, percentage: "45%" },
  { icon: <SiRedux className="text-purple-500" />, percentage: "20%" },
  { icon: <RiNextjsLine className="text-zinc" />, percentage: "10%" },
];

const skillsBack = [
  { icon: <FaNodeJs className="text-green-600" />, percentage: "30%" },
  { icon: <SiExpress className="text-gray-600" />, percentage: "35%" },
  { icon: <SiMongodb className="text-green-500" />, percentage: "50%" },
  { icon: <TbFileTypeSql className="text-blue-600" />, percentage: "60%" }
];

const skillsTool = [
  { icon: <FaGit className="text-orange-500" />, percentage: "70%" },
  { icon: <FaGithub className="text-zinc" />, percentage: "70%" },
  { icon: <FaBootstrap className="text-purple-600" />, percentage: "35%" }
]

function Skills() {
    useGSAP(() => {
        gsap.from('.anims', {
          opacity: 0,
          delay: 0.1,
          y: '100%',
          stagger: 0.1, // Stagger each item by 0.2 seconds
          scrollTrigger: {
            trigger: '.anims',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          }
        });
      }, []);
  return (
    <div className="w-full h-auto mt-20 max-sm:mt-24 pb-24">
      <div className="text-center">
        <h1 className="text-4xl text-pink-300 max-sm:text-3xl">SKILLS</h1>
        <hr className="heading1 m-auto mt-4 w-1/6 max-sm:w-5/6" />
      </div>
      <div className="flex space-x-8 px-16 max-sm:px-8 flex-col max-sm:items-center max-sm:gap-8 mt-10 text-slate-500">
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl text-slate-300 max-sm:text-2xl text-center">Frontend</h2>
          <div className="flex flex-wrap justify-center max-sm:justify-around max-sm:gap-4 gap-12">
            {skillsFront.map(({ icon, percentage }, index) => (
              <div key={index} className="flex flex-col my-10 max-sm:my-4 items-center">
                <div className=" anims opacity-1 text-7xl max-sm:text-5xl hover:text-white">{icon}</div>
                <p className=" anims text-xl text-white max-sm:text-lg mt-2">{percentage}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl max-sm:text-2xl text-slate-300 text-center">Backend</h2>
          <div className="flex flex-wrap justify-center max-sm:justify-around max-sm:gap-8 gap-12">
            {skillsBack.map(({ icon, percentage }, index) => (
              <div key={index} className="flex flex-col my-10 items-center">
                <div className=" anims text-7xl max-sm:text-5xl hover:text-white">{icon}</div>
                <p className=" anims text-xl text-white max-sm:text-lg mt-2">{percentage}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl max-sm:text-2xl text-center text-slate-300">Tools And Frameworks</h2>
          <div className="flex flex-wrap justify-center max-sm:justify-around max-sm:gap-6 gap-12">
            {skillsTool.map(({ icon, percentage }, index) => (
              <div key={index} className="flex flex-col my-10 items-center">
                <div className=" anims text-7xl max-sm:text-5xl hover:text-white">{icon}</div>
                <p className=" anims text-xl text-white max-sm:text-lg mt-2">{percentage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
