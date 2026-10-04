import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SCHEDULE_DATA } from '../../data/schoolData';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Clock, Sun, Coffee, BookOpen, Utensils, Award, PenTool, Moon } from 'lucide-react';

export const BoardingLifeSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'morning' | 'academic' | 'sports' | 'evening'>('all');

  const filteredSchedule =
    activeCategory === 'all'
      ? SCHEDULE_DATA
      : SCHEDULE_DATA.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-400" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-emerald-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-purple-400" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-indigo-400" />;
      case 'Moon':
        return <Moon className="w-5 h-5 text-slate-300" />;
      default:
        return <Clock className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="boarding" className="relative py-24 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<Clock className="w-3.5 h-3.5" />}>
              100% Boarding Experience
            </Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Day in the Life of a <span className="gold-gradient-text">TIS Boarder</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-sm sm:text-base text-slate-300">
              Structured daily routines fostering academic focus, physical vitality, artistic expression, and lifelong friendships.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Full Routine' },
            { id: 'morning', label: 'Morning Fitness' },
            { id: 'academic', label: 'Academic Hours' },
            { id: 'sports', label: 'Sports & Clubs' },
            { id: 'evening', label: 'Evening Prep & Dining' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
              data-interactive="true"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400/50 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-6">
            {filteredSchedule.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 sm:px-6">
                    <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-md group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                          {getIcon(item.icon)}
                        </div>
                        <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-950 border-2 border-amber-400 shadow-md hidden sm:flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
