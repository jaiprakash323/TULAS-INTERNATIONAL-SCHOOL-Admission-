import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative inline-flex items-center justify-between w-14 h-8 px-1 rounded-full cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 border ${
        isDark
          ? 'bg-slate-900 border-amber-500/30 text-amber-400'
          : 'bg-amber-100 border-amber-300 text-amber-600 shadow-inner'
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      data-interactive="true"
    >
      <Sun className={`w-3.5 h-3.5 z-10 transition-opacity ${isDark ? 'opacity-40' : 'opacity-100'}`} />
      <Moon className={`w-3.5 h-3.5 z-10 transition-opacity ${isDark ? 'opacity-100' : 'opacity-40'}`} />

      {/* Floating Toggle Knob */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
          rotate: isDark ? 360 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
    </motion.button>
  );
};
