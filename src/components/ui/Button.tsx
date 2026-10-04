import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  glow = false,
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 text-white shadow-lg hover:shadow-indigo-500/25 border border-indigo-500/30 dark:border-indigo-400/40 hover:border-amber-400',
    gold:
      'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold shadow-lg hover:shadow-amber-500/30 hover:brightness-105 border border-amber-300',
    secondary:
      'bg-slate-800/80 hover:bg-slate-700 text-slate-100 border border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700/80',
    outline:
      'border-2 border-amber-500/80 text-amber-500 dark:text-amber-400 hover:bg-amber-500/10 hover:border-amber-400',
    ghost:
      'text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 dark:text-slate-300 dark:hover:text-amber-300',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
  };

  const glowStyles = glow ? 'gold-glow' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${glowStyles} ${className}`}
      onClick={onClick}
      data-interactive="true"
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-block transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </motion.button>
  );
};
