import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { LiaRProject } from "react-icons/lia";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import prabinCV from "/PrabinCV.pdf";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-5 sm:px-10  px-5 flex justify-between items-center">
      <nav className="flex w-full justify-between items-center">
        <p className="text-4xl text-pink-300 text-center font-bold">PS.</p>
        
        {/* menu for larger screens */}
        <div className="list-none flex justify-center cursor-pointer text-pink-200 max-sm:hidden">
          <li className="flex px-5 hover:text-pink-400">
            <FaHome className="text-2xl" />
            <Link to='/'>Home</Link>
          </li>
          <li className="flex px-5 hover:text-pink-400">
            <LiaRProject className="text-2xl" />
            <Link to='/projects'>Projects</Link>
          </li>
          <li className="flex px-5 hover:text-pink-400">
            <FcAbout className="text-2xl" />
            <Link to='/skills'>Skills</Link>
          </li>
          <li className="flex px-5 hover:text-pink-400">
            <IoIosContact className="text-2xl" />
            <Link to='/contact'>Contact</Link>
          </li>
        </div>

        {isMenuOpen && (
          <div className="list-none flex flex-row gap-4 justify-center cursor-pointer text-pink-200 absolute top-20 left-0 right-0 bg-secondary p-5 z-50 lg:hidden">
            <li className="flex py-2 hover:text-pink-400">
              <FaHome className="text-2xl" />
              <Link to='/' className="pl-2">Home</Link>
            </li>
            <li className="flex py-2 hover:text-pink-400">
              <LiaRProject className="text-2xl" />
              <Link to='/projects' className="pl-2">Projects</Link>
            </li>
            <li className="flex py-2 hover:text-pink-400">
              <FcAbout className="text-2xl" />
              <Link to='/skills' className="pl-2">Skills</Link>
            </li>
            <li className="flex py-2 hover:text-pink-400">
              <IoIosContact className="text-2xl" />
              <Link to='/contact' className="pl-2">Contact</Link>
            </li>
          </div>
        )}

        <div className="flex space-x-4 px-5 items-center">
          <div>
          <button className="flex items-center border-2 border-pink-300 rounded-full text-pink-200 p-1 text">
              <a href={prabinCV} download="PrabinCV.pdf"> 
                Resume <FaFileDownload className="inline" />
              </a> 
            </button>
          </div>
          <TfiMenu className="lg:hidden text-pink-200" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}
