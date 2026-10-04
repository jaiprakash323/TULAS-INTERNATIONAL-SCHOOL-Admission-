import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { x, y, isHoveringInteractive, isTouchDevice } = useMousePosition();

  // Hide cursor on touch devices or before initial mouse movement
  if (isTouchDevice || (x === -100 && y === -100)) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Spring Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border border-amber-400/70 dark:border-amber-300/80 transition-opacity duration-300 ${
          isHoveringInteractive
            ? 'w-12 h-12 bg-amber-400/20 backdrop-blur-xs border-amber-400 border-2'
            : 'w-8 h-8 bg-transparent'
        }`}
        animate={{
          x: x - (isHoveringInteractive ? 24 : 16),
          y: y - (isHoveringInteractive ? 24 : 16),
          scale: isHoveringInteractive ? 1.25 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full bg-amber-400 ${
          isHoveringInteractive ? 'w-3 h-3 bg-amber-300' : 'w-2 h-2 shadow-sm shadow-amber-400'
        }`}
        animate={{
          x: x - (isHoveringInteractive ? 6 : 4),
          y: y - (isHoveringInteractive ? 6 : 4),
        }}
        transition={{
          type: 'spring',
          damping: 45,
          stiffness: 800,
        }}
      />
    </div>
  );
};
