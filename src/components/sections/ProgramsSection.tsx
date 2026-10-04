import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROGRAMS_DATA } from '../../data/schoolData';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { BookOpen, CheckCircle, Award, GraduationCap } from 'lucide-react';

interface ProgramsSectionProps {
  onOpenApplyModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenApplyModal }) => {
  const [activeTab, setActiveTab] = useState<string>(PROGRAMS_DATA[0].id);

  const activeProgram = PROGRAMS_DATA.find((p) => p.id === activeTab) || PROGRAMS_DATA[0];

  return (
    <section id="academics" className="relative py-24 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<GraduationCap className="w-3.5 h-3.5" />}>
              Academic Wings & Pathways
            </Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Curriculum Built for <span className="gold-gradient-text">Global Leadership</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-sm sm:text-base text-slate-300">
              From foundational primary discovery to competitive exam integration in senior secondary grades, Tula's provides seamless academic growth.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800 space-x-2">
            {PROGRAMS_DATA.map((program) => {
              const isActive = activeTab === program.id;
              return (
                <button
                  key={program.id}
                  onClick={() => setActiveTab(program.id)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                  data-interactive="true"
                >
                  <BookOpen className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-500'}`} />
                  <span>{program.title.split(' ')[0]} {program.title.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Program Card Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-amber-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Left Content Side */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
                  {activeProgram.grades}
                </span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {activeProgram.curriculum}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeProgram.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeProgram.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Key Academic Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProgram.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button variant="gold" size="md" glow onClick={onOpenApplyModal}>
                  Apply for {activeProgram.grades}
                </Button>
              </div>
            </div>

            {/* Right Image Side */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-4/3 shadow-xl group">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs text-amber-300 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{activeProgram.highlight}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
