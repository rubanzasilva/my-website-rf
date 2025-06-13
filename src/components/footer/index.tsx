'use client';

import React from 'react';
import Link from 'next/link';
import { FloatButton } from 'antd';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <div className="py-12 px-6 flex flex-col justify-center items-center max-w-full mx-auto">
        {/* Links Container */}
        <div className="flex justify-center w-full pt-8 lg:pt-0">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center mx-4 text-center text-white box-border w-full lg:w-40 p-6">
              <a 
                href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_Data_Scientist.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1890ff] no-underline mb-2 text-base font-['Roboto','Helvetica_Neue',sans-serif] hover:text-[#00a886] transition-colors"
              >
                Resume
              </a>
            </div>

            <div className="flex flex-col items-center mx-4 text-center text-white box-border w-full lg:w-40 p-6">
              <a 
                href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/antelopes.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1890ff] no-underline mb-2 text-base font-['Roboto','Helvetica_Neue',sans-serif] hover:text-[#00a886] transition-colors"
              >
                Projects Of Interest
              </a>
            </div>

            <div className="flex flex-col items-center mx-4 text-center text-white box-border w-full lg:w-40 p-6">
              <a 
                href="mailto:abc@rubanzasilver.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-[#1890ff] no-underline mb-2 text-base font-['Roboto','Helvetica_Neue',sans-serif] hover:text-[#00a886] transition-colors"
              >
                Email Me
              </a>
            </div>

            <div className="flex flex-col items-center mx-4 text-center text-white box-border w-full lg:w-40 p-6">
              <a 
                href="https://twitter.com/countfettucine/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#1890ff] no-underline mb-2 text-base font-['Roboto','Helvetica_Neue',sans-serif] hover:text-[#00a886] transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <section className="max-w-[1000px] w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1100px] mx-auto mt-10">
            <Link 
              href="/"
              className="text-white cursor-pointer no-underline text-xs flex items-center font-bold"
            >
              <p>Silver Rubanza</p>
            </Link>
            
            <small className="text-white font-semibold text-xs">
              Built by Me - Silva with ReactJs © {new Date().getFullYear()}
            </small>
          </div>
        </section>

        <FloatButton.BackTop />
      </div>
    </footer>
  );
};

export default Footer;