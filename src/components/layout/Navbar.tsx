import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_INFO } from '../../data/schoolData';
import { ThemeToggle } from '../animation/ThemeToggle';
import { Button } from '../ui/Button';
import { useScrollProgress } from '../../hooks/useScrollProgress';

interface NavbarProps {
  onOpenApplyModal: () => void;
  onOpenTourModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal, onOpenTourModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScrollProgress();
  const isScrolled = scrollY > 20;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg py-2.5 backdrop-blur-md'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            data-interactive="true"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-amber-400 text-lg tracking-wider">
                TIS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-amber-400 transition-colors">
                TULA'S
              </span>
              <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest -mt-1">
                International School
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors rounded-lg group"
                data-interactive="true"
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded-full animate-pulse">
                    {item.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />

            <button
              onClick={onOpenTourModal}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-400 px-3 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-amber-400 transition-all cursor-pointer"
              data-interactive="true"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Virtual Tour</span>
            </button>

            <Button
              variant="gold"
              size="sm"
              glow
              icon={<Sparkles className="w-3.5 h-3.5" />}
              onClick={onOpenApplyModal}
            >
              Admissions 2025
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 dark:text-slate-200 bg-slate-200/50 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle menu"
              data-interactive="true"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-slate-800 overflow-hidden bg-slate-900/95 dark:bg-slate-950/95"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/50 transition-colors flex items-center justify-between"
                  data-interactive="true"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-bold bg-amber-500 text-slate-950 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <Button
                  variant="gold"
                  size="md"
                  className="w-full"
                  glow
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApplyModal();
                  }}
                >
                  Apply for Admission 2025-26
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTourModal();
                  }}
                >
                  Book Virtual Campus Tour
                </Button>

                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="flex items-center justify-center gap-2 text-xs font-medium text-slate-300 py-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Helpline: {SCHOOL_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
