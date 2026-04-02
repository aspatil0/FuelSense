import React from 'react';
import { motion } from 'framer-motion';
import { SmallLogo } from './Logo';

const LoginForm = ({ onLogin }) => {

  // Remove staggered popup so the form feels solidly attached to the dragged panel
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
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <SmallLogo />
      </motion.div>

      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-medium text-text-dark">Welcome to</h2>
        <h2 className="text-3xl md:text-4xl font-semibold text-text-dark leading-tight">Icon technologies Portal</h2>
        <p className="text-text-gray text-sm mt-3">AI-Driven. Shipping Redefined</p>
      </motion.div>

      <div className="bg-white rounded-3xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <form onSubmit={(e) => { e.preventDefault(); onLogin && onLogin(); }} className="space-y-5">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-text-dark mb-1.5">Username</label>
            <input
              type="text"
              defaultValue="teliucarre2019@gmail.com"
              placeholder="teliucarre2019@gmail.com"
              className="w-full px-4 py-3 bg-bg-gray border border-gray-200 rounded-xl text-sm outline-none transition-all duration-300 focus:border-light-teal focus:ring-2 focus:ring-light-teal/20 focus:bg-white"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-text-dark mb-1.5">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-bg-gray border border-gray-200 rounded-xl text-sm outline-none transition-all duration-300 focus:border-light-teal focus:ring-2 focus:ring-light-teal/20 focus:bg-white"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-between text-sm py-2">
            <label className="flex items-center gap-2 text-text-gray cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-light-teal focus:ring-light-teal accent-light-teal cursor-pointer"
              />
              <span className="select-none">Remember me</span>
            </label>
            <a href="#" className="font-medium text-text-dark hover:text-light-teal transition-colors">
              Forget password?
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 bg-gradient-to-tr from-dark-teal to-light-teal text-white rounded-xl font-medium shadow-md transition-colors mt-2"
            >
              Get Stated
            </motion.button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginForm;
