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
    <defs>
      <filter id="smoothEdge">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
      </filter>
    </defs>
    <path
      d="M 25 0 Q 25 100, -90 27 Q 30 20, 25 100 L 100 100 L 100 0 Z"
      fill="#FFFFFF"
      filter="url(#smoothEdge)"
    />
  </svg>
);

const Layout = ({ children }) => {
  return (
    <div className="relative w-screen h-screen flex overflow-hidden bg-dark-teal group font-sans">

      {/* LEFT SIDE (OCEAN SECTION) - ~60% Width */}
      <div className="relative w-[60%] h-full flex flex-col justify-center items-center overflow-hidden">

        {/* Base white background (bottom-most) */}
        <div className="absolute inset-0 bg-white z-0 pointer-events-none" />

        {/* Dark Teal Gradient Base & Noise (above white) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#062128] via-dark-teal to-light-teal opacity-100 z-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-noise z-6 pointer-events-none"></div>

        {/* Animated Curved Layers (Top) */}
        <motion.div
          initial={{ y: '30vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="absolute top-0 left-0 w-full h-[50%] z-20 pointer-events-none"
        >
          {/* Back curve */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute top-0 left-0 w-[120%] h-full text-[#0a4a52] opacity-75 -ml-[10%]">
            <path d="M0 0 L100 0 L100 8 Q 50 45, 0 8 Z" fill="currentColor" />
          </svg>
          {/* Front curve - Creates smooth arc in middle */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute top-0 left-0 w-[110%] h-full text-[#146b73] opacity-90 -ml-[5%]">
            <path d="M0 0 L100 0 L100 3 Q 50 35, 0 30 Z" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Animated Curved Layers (Bottom) */}
        <motion.div
          initial={{ y: '20vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
          className="absolute bottom-0 left-0 w-full h-[50%] z-20 pointer-events-none"
        >
          {/* Back curve */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute bottom-0 left-0 w-[120%] h-full text-[#0a3d45] opacity-80 -ml-[10%]">
            <path d="M0 100 L100 100 L100 92 Q 50 55, 0 92 Z" fill="currentColor" />
          </svg>
          {/* Front curve - Creates smooth arc in middle */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute bottom-0 left-0 w-[110%] h-full text-[#125860] opacity-90 -ml-[5%]">
            <path d="M0 100 L100 100 L100 97 Q 50 65, 0 70 Z" fill="currentColor" />
          </svg>
        </motion.div>
        
        {/* Include actual ocean image transparently to blend with gradient if desired */}
        <div className="absolute inset-0 z-10 opacity-60 mix-blend-soft-light bg-[url('/assets/myocern.png')] bg-cover bg-center pointer-events-none"></div>

        {/* LOGO & TEXT ANIMATION */}
        <div className="relative z-30 w-full h-full flex items-center justify-center">
          <Logo />
        </div>
      </div>

      {/* 
        RIGHT SIDE (LOGIN PANEL AREA) - ~40% Width 
      */}
      <motion.div
        className="absolute right-0 top-0 w-[55%] h-full flex items-center justify-center z-50"
        initial={{ x: '75vw', opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeInOut' }} // Synced with ship's 1.8s movement
      >
        <RightCurveBackground />

        {/* The dynamic children (LoginForm / ModuleSelector) injected here */}
        <div className="relative z-45 w-full flex items-center justify-center pl-[42%] pr-[3%]">
          {children}
        </div>
      </motion.div>

      {/* HERO SHIP ELEMENT — absolutely above all ocean/curves */}
      <AnimatedShip zOverride={100} />

    </div>
  );
};

export default Layout;
