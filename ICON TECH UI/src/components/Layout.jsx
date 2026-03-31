import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import AnimatedShip from './AnimatedShip';

const RightCurveBackground = () => (
  // The curve that bridges the left and right sections
  <svg
    className="absolute left-0 top-0 w-full h-full z-10 pointer-events-none"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 10 0 Q 50 50, 25 100 L 100 100 L 100 0 Z"
      fill="#FFFFFF"
    />
  </svg>
);

const Layout = ({ children }) => {
  return (
    <div className="relative w-screen h-screen flex overflow-hidden bg-dark-teal group font-sans">

      {/* 
        LEFT SIDE (OCEAN SECTION) - ~60% Width 
      */}
      <div className="relative w-[60%] h-full flex flex-col justify-center items-center z-10 overflow-hidden">

        {/* Dark Teal Gradient Base & Noise */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#062128] via-dark-teal to-light-teal opacity-150 z-2"></div>
        <div className="absolute inset-0 bg-noise z-[1]"></div>

        {/* Animated Curved Layers (Top) */} o
        <motion.div 
          initial={{ y: '30vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="absolute top-0 left-0 w-full h-[50%] z-[2] pointer-events-none"
        >
          {/* Back curve */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute top-0 left-0 w-[120%] h-full text-[#10565d] opacity-80 -ml-[10%]">
            <path d="M0 0 L100 0 L100 10 Q40 80, 0 10 Z" fill="currentColor" />
          </svg>
          {/* Front curve */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute top-0 left-0 w-[110%] h-[80%] text-[#146b73] opacity-90 -ml-[5%] mt-[-5%]">
            <path d="M0 0 L100 0 L100 5 Q50 90, 0 40 Z" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Animated Curved Layers (Bottom) */}
        <motion.div 
          initial={{ y: '20vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
          className="absolute bottom-0 left-0 w-full h-[50%] z-[2] pointer-events-none"
        >
          {/* Back curve */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute bottom-0 left-0 w-[120%] h-[80%] text-[#0c4046] opacity-90 -ml-[10%]">
            <path d="M0 100 L100 100 L100 150 Q60 10, 0 60 Z" fill="currentColor" />
          </svg>
          {/* Front curve */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute bottom-0 left-0 w-[110%] h-[70%] text-[#125860] opacity-90 -ml-[5%]">
            <path d="M0 100 L100 100 L100 130 Q40 10, 0 80 Z" fill="currentColor" />
          </svg>
        </motion.div>
        
        {/* Include actual ocean image transparently to blend with gradient if desired */}
        <div className="absolute inset-0 z-[1] opacity-50 mix-blend-soft-light bg-[url('/assets/myocern.png')] bg-cover bg-center"></div>

        {/* LOGO & TEXT ANIMATION */}
        <div className="relative z-20 w-full h-full flex items-center justify-center">
          <Logo />
        </div>
      </div>

      {/* 
        RIGHT SIDE (LOGIN PANEL AREA) - ~40% Width 
      */}
      <motion.div
        className="absolute right-0 top-0 w-[55%] h-full flex items-center justify-center z-30"
        initial={{ x: '75vw', opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeInOut' }} // Synced with ship's 1.8s movement
      >
        <RightCurveBackground />

        {/* The dynamic children (LoginForm / ModuleSelector) injected here */}
        <div className="relative z-20 w-full flex items-center justify-center pl-[42%] pr-[3%]">
          {children}
        </div>
      </motion.div>

      {/* 
        HERO SHIP ELEMENT
        Operates above the background but slides between left and right visually 
      */}
      <AnimatedShip />

    </div>
  );
};

export default Layout;
