'use client';

import React from 'react';
import { Typography } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

interface HeroSectionProps {
  TitleText: string;
  headline: string;
  text: string;
  text1: string;
  text2: string;
  text3: string;
  img: string;
  alt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  TitleText,
  headline,
  text,
  text1,
  text2,
  text3,
  img,
  alt
}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] w-4/5 bg-[#00a886] list-none mx-14 my-14 h-auto">
      {/* Text Content */}
      <div className="bg-white text-center">
        <div className="mx-auto leading-[75px] flex flex-col text-justify content-center p-8">
          <Title 
            level={3} 
            style={{
              fontSize: "1.75em",
              color: "#35241A",
              lineHeight: "1.10722",
              fontWeight: "400",
              letterSpacing: "-.005em",
              marginTop: "6px",
              marginBottom: "15px",
              fontFamily: "Lato"
            }}
          >
            {TitleText}
          </Title>
          
          <Text 
            style={{
              color: "#35241A",
              fontSize: "16px",
              lineHeight: "1.381",
              fontWeight: "200",
              letterSpacing: ".016em",
              marginTop: "6px",
              marginBottom: "15px",
              fontFamily: "Roboto"
            }}
          >
            {headline}
          </Text>
          
          <Text 
            style={{
              color: "#35241A",
              fontSize: "16px",
              lineHeight: "1.381",
              fontWeight: "200",
              letterSpacing: ".016em",
              marginBottom: "15px",
              fontFamily: "Roboto"
            }}
          >
            {text}
          </Text>
          
          <Text 
            style={{
              color: "#35241A",
              fontSize: "16px",
              lineHeight: "1.381",
              fontWeight: "200",
              letterSpacing: ".016em",
              marginBottom: "15px",
              fontFamily: "Roboto"
            }}
          >
            {text3}
          </Text>
          
          <Text 
            style={{
              color: "#35241A",
              fontSize: "16px",
              lineHeight: "1.381",
              fontWeight: "200",
              letterSpacing: ".016em",
              marginBottom: "15px",
              fontFamily: "Roboto"
            }}
          >
            {text1}
          </Text>
          
          <Text 
            style={{
              color: "#35241A",
              fontSize: "16px",
              lineHeight: "1.381",
              fontWeight: "200",
              letterSpacing: ".016em",
              marginBottom: "15px",
              fontFamily: "Roboto"
            }}
          >
            {text2}
          </Text>
        </div>
      </div>

      {/* Image */}
      <div className="bg-white text-center">
        <div className="mx-auto flex flex-row flex-wrap justify-around items-center text-center lg:block hidden">
          <div className="relative w-1/2 h-1/2 mx-auto">
            <img 
              src={img} 
              alt={alt}
              className="w-full h-auto object-scale-down"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;