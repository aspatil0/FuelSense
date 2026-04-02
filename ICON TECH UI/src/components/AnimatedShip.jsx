import React from 'react';
import { motion } from 'framer-motion';

const AnimatedShip = ({ zOverride = 30 }) => {
  // Ship entry animation from the right
  const shipVariants = {
    hidden: {
      x: '50vw', // Start way off to the right
      y: 0,
      scale: 0.95
    },
    visible: {
      x: '-28vw', // Move to center-left
      scale: 1,
      transition: {
        duration: 1.8,
        ease: 'easeInOut',
      }
    }
  };

  // Continuous floating animation
  const floatVariants = {
    floating: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }
    }
  };

  // Trailing water effect animation
  const trailVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: { delay: 0.8, duration: 1.5 }
    },
    floating: {
      opacity: [0.4, 0.7, 0.4],
      scale: [0.95, 1.05, 0.95],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
      }
    }
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 w-[400px] sm:w-[400px] md:w-[600px] lg:w-[900px] -translate-x-[30%] -translate-y-1/2 pointer-events-none"
      style={{ zIndex: zOverride }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={shipVariants}
        onAnimationComplete={(definition) => {
          // If we needed to chain it, but we can also just run it inside a child
        }}
        className="relative"
      >
        <motion.div
          animate="floating"
          variants={floatVariants}
          className="relative"
        >
          {/* Subtle water trail / wake under ship */}
          <motion.div
            className="absolute bottom-5 left-10 right-20 h-8 bg-cyan-400/20 blur-xl rounded-[100%]"
            initial="hidden"
            animate={["visible", "floating"]}
            variants={trailVariants}
          />

          <img
            src="/assets/myship.png"
            alt="Cargo Ship"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedShip;
