import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SmallLogo } from './Logo';

const iconSrc = '/assets/loo.png';

const modules = [
  { id: 'fleet', nameTop: 'FLEET', nameBottom: 'SENSE', icon: '/assets/loo.png', disabled: false },
  { id: 'fuel', nameTop: 'FUEL', nameBottom: 'SENSE', icon: '/assets/loo.png', disabled: false },
  { id: 'assets', nameTop: 'ASSETS', nameBottom: 'SENSE', icon: '/assets/loo.png', disabled: false },
  { id: 'fleet-disabled', nameTop: 'FLEET', nameBottom: 'SENSE', icon: '/assets/loo.png', disabled: true },
];

const ModuleSelector = ({ onContinue }) => {
  const [selectedId, setSelectedId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 1, x: 0 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: { duration: 0 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="relative z-30 w-full max-w-xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <motion.div variants={itemVariants}>
          <SmallLogo />
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark leading-tight">Get Started</h2>
          <p className="text-text-gray text-sm mt-3">Tell us where you want to start with</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 gap-4 mb-6">
          {modules.map((mod) => (
            <motion.button
              key={mod.id}
              variants={itemVariants}
              whileHover={!mod.disabled ? { scale: 1.02 } : {}}
              whileTap={!mod.disabled ? { scale: 0.99 } : {}}
              onClick={() => !mod.disabled && setSelectedId(mod.id)}
              className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 bg-white text-left
                ${mod.disabled ? 'opacity-40 cursor-not-allowed grayscale' : ''}
                ${selectedId === mod.id ? 'border-2 border-light-teal shadow-xl z-10' : 'border border-gray-100 shadow-sm' }
              `}
            >
              <div className="w-20 h-12 bg-white rounded-md flex items-center justify-center">
                <img src={mod.icon} alt="icon" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xs tracking-[0.3em] font-bold ${selectedId === mod.id ? 'text-light-teal' : 'text-text-dark'}`}>
                  {mod.nameTop}
                </span>
                <span className={`text-lg md:text-xl font-bold ${selectedId === mod.id ? 'text-light-teal' : 'text-text-dark'}`}>
                  {mod.nameBottom}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button
            onClick={onContinue}
            disabled={!selectedId}
            whileHover={selectedId ? { scale: 1.02 } : {}}
            whileTap={selectedId ? { scale: 0.98 } : {}}
            className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 mt-2
              ${selectedId ? 'bg-gradient-to-tr from-dark-teal to-light-teal text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'}
            `}
          >
            Continue
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ModuleSelector;
