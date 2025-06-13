'use client';

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaEnvelope, FaLinkedin, FaGithub, FaBars, FaKaggle } from 'react-icons/fa';

interface NavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  return (
    <nav className="h-30 lg:h-32 mt-2.5 flex justify-center items-center sticky top-0 bg-white cursor-pointer font-['Lato','Roboto','Helvetica_Neue',sans-serif] z-10">
      <div className="flex justify-between h-20 w-4/5 max-w-[2400px]">
        {/* Logo/Social Icons */}
        <Link href="/" className="text-black flex items-center text-2xl font-bold">
          <div className="max-w-[1000px] w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center w-80">
                <a 
                  href="mailto:abc@rubanzasilver.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#35241A] text-2xl hover:text-[#00a886] transition-colors"
                  aria-label="Email Me"
                >
                  <FaEnvelope />
                </a>
                <a 
                  href="https://www.linkedin.com/in/silver-rubanza/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#35241A] text-2xl hover:text-[#00a886] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://twitter.com/countfettucine/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#35241A] text-2xl hover:text-[#00a886] transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="https://github.com/rubanzasilva/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#35241A] text-2xl hover:text-[#00a886] transition-colors"
                  aria-label="Github"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.kaggle.com/rubanzasilva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#35241A] text-2xl hover:text-[#00a886] transition-colors"
                  aria-label="Kaggle"
                >
                  <FaKaggle />
                </a>
              </div>
            </div>
          </div>
        </Link>

        {/* Mobile Menu Icon */}
        <div 
          className="lg:hidden block absolute top-0 right-0 transform translate-x-[-100%] translate-y-[60%] text-3xl cursor-pointer text-[#35241A]"
          onClick={toggle}
        >
          <FaBars />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center list-none text-center font-['Lato','Roboto','Helvetica_Neue',sans-serif]">
          <li className="h-20">
            <a 
              href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_Data_Scientist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black flex items-center px-6 h-full cursor-pointer text-base hover:text-[#00a886] hover:border-b-2 hover:border-[#00a886] transition-all"
            >
              About Silver
            </a>
          </li>
          <li className="h-20">
            <a 
              href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/antelopes.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black flex items-center px-6 h-full cursor-pointer text-base hover:text-[#00a886] hover:border-b-2 hover:border-[#00a886] transition-all"
            >
              Projects of interest
            </a>
          </li>
          <li className="h-20">
            <Link 
              href="/"
              className="text-black flex items-center px-6 h-full cursor-pointer text-base hover:text-[#00a886] hover:border-b-2 hover:border-[#00a886] transition-all"
            >
              My Blog
            </Link>
          </li>
          <li className="h-20">
            <a 
              href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_Data_Scientist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black flex items-center px-6 h-full cursor-pointer text-base hover:text-[#00a886] hover:border-b-2 hover:border-[#00a886] transition-all"
            >
              My Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;