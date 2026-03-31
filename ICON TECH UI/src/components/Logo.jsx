import React from 'react';
import { motion } from 'framer-motion';

const IconGraphic = () => (
  <svg viewBox="0 -40 430 260" fill="none" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" className="w-[200px] md:w-[280px]">
    {/* Letter I */}
    <line x1="40" y1="20" x2="40" y2="130" stroke="white" />

    {/* Letter C */}
    <path d="M 152 30 A 45 45 0 0 0 152 120" stroke="white" />

    {/* Letter N */}
    <path d="M 320 130 L 320 65 A 35 35 0 0 1 390 65 L 390 130" stroke="white" />

    {/* Anchor (O) */}
    {/* Teal Ring */}
    <circle cx="240" cy="25" r="14" stroke="#30a7a4" />

    {/* Teal Upper Arc */}
    <path d="M 190 80 L 190 70 A 50 50 0 0 1 290 70 L 290 80" stroke="#30a7a4" strokeLinecap="butt" />

    {/* Orange Shaft */}
    <line x1="240" y1="50" x2="240" y2="120" stroke="#f98a28" strokeLinecap="butt" />
    <polygon points="230,118 250,118 240,140" fill="#f98a28" stroke="none" />

    {/* Orange Hooks */}
    <path d="M 190 80 Q 190 120 240 120 Q 290 120 290 80" stroke="#f98a28" strokeLinecap="butt" />

    {/* Left Arrow Head */}
    <polygon points="190,70 190,90 166,80" fill="#f98a28" stroke="none" />

    {/* Right Arrow Head */}
    <polygon points="290,70 290,90 314,80" fill="#f98a28" stroke="none" />

    {/* Sparkles */}
    {/* Teal Star */}
    <path d="M 258 -13 Q 258 -5 266 -5 Q 258 -5 258 3 Q 258 -5 250 -5 Q 258 -5 258 -13 Z" fill="#30a7a4" stroke="none" />
    {/* Orange Star */}
    <path d="M 280 -5 Q 280 10 295 10 Q 280 10 280 25 Q 280 10 265 10 Q 280 10 280 -5 Z" fill="#f98a28" stroke="none" />

    {/* Subtext: TECHNOLOGY */}
    <text x="215" y="210" fill="white" fontSize="24" fontFamily="'Montserrat', sans-serif" fontWeight="500" letterSpacing="18" textAnchor="middle" stroke="none">TECHNOLOGY</text>
  </svg>
);

const Logo = () => {
  const topTextVariants = {
    initial: { y: 0, opacity: 1 },
    split: {
      y: -240, // moves UP to make clear room for ship
      transition: {
        delay: 0.1, // starts as ship reaches center
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const bottomTextVariants = {
    initial: { y: 0, opacity: 1 },
    split: {
      y: 70, // moves DOWN to make clear room for ship
      transition: {
        delay: 0.1,
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full pointer-events-none z-30">
      <div className="absolute flex flex-col items-center">
        {/* TOP TEXT: Moves UP */}
        <motion.div
          variants={topTextVariants}
          initial="initial"
          animate="split"
          className="flex items-center"
        >
          <IconGraphic />
        </motion.div>

        {/* BOTTOM TEXT: Moves DOWN */}
        <motion.p
          variants={bottomTextVariants}
          initial="initial"
          animate="split"
          className="text-cyan-100/70 text-sm md:text-base tracking-[0.3em] uppercase absolute top-full mt-2 whitespace-nowrap"
        >
          AI-driven. Shipping redefined
        </motion.p>
      </div>
    </div>
  );
};

export const SmallLogo = () => {
  return (
    <div className="flex flex-col items-center mb-6">
        <img src="/assets/loo.png" alt="Icon technologies" className="w-20 h-15 " />
    </div>
  );
};

export default Logo;
