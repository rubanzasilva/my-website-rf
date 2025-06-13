'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navBar';
import HeroSection from '@/components/heroSection';
import SideBar from '@/components/sideBar';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
/*import { SectionAinfo } from '@/components/heroSection/data';*/
import { SectionAinfo } from '@/components/heroSection/data';
import { projectsObjA } from '@/components/projects/data';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="homeWrapper">
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...SectionAinfo} />
      <Projects {...projectsObjA} />
      <Footer />
    </div>
  );
}