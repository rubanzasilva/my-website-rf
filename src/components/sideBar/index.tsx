'use client';

import React from 'react';
import Link from 'next/link';
import { FaTimes, FaTwitter, FaEnvelope, FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';
import { Typography } from 'antd';

const { Title } = Typography;

interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

const textTitleStyle = {
  color: "#000000",
  fontSize: "17px",
  lineHeight: "1.10722",
  fontWeight: "400",
  letterSpacing: ".004em",
  marginTop: "6px",
  fontFamily: "Lato,Roboto",
};

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggle }) => {
  return (
    <aside 
      className={`fixed z-[999] w-full h-full bg-white grid items-center left-0 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 top-0' : 'opacity-0 -top-full'
      }`}
      onClick={toggle}
    >
      {/* Close Icon */}
      <div 
        className="absolute top-5 right-6 bg-transparent text-3xl cursor-pointer outline-none"
        onClick={toggle}
      >
        <FaTimes className="text-black" />
      </div>

      {/* Sidebar Content */}
      <div className="text-black">
        <ul className="grid grid-cols-1 grid-rows-6 text-center gap-y-20">
          
          {/* About Me */}
          <li>
            <a
              href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_Data_Scientist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 bg-white text-base cursor-pointer transition-all hover:bg-white hover:text-black"
            >
              <Title level={5} style={textTitleStyle}>About me</Title>
            </a>
          </li>

          {/* Projects */}
          <li>
            <Link
              href="/"
              className="text-green-600 bg-white text-base cursor-pointer transition-all hover:bg-white hover:text-black"
            >
              <Title level={5} style={textTitleStyle}>Projects of Interest</Title>
            </Link>
          </li>

          {/* Blog */}
          <li>
            <Link
              href="/"
              className="text-green-600 bg-white text-base cursor-pointer transition-all hover:bg-white hover:text-black"
            >
              <Title level={5} style={textTitleStyle}>My Blog</Title>
            </Link>
          </li>

          {/* Resume */}
          <li>
            <a
              href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_Data_Scientist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 bg-white text-base cursor-pointer transition-all hover:bg-white hover:text-black"
            >
              <Title level={5} style={textTitleStyle}>My Resume</Title>
            </a>
          </li>

          {/* Social Links */}
          <li className="flex justify-center">
            <div className="max-w-[1000px] w-4/5">
              <div className="flex flex-col items-center max-w-[1100px] mx-auto mt-10">
                <div className="flex justify-between items-center w-60">
                  <a 
                    href="mailto:rubanza@rubanzasilver.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#35241A] text-2xl hover:text-[#00a886] transition-colors"
                    aria-label="Email"
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
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
