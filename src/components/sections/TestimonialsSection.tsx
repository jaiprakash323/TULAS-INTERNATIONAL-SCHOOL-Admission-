import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../../data/schoolData';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="relative py-24 bg-slate-950 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<MessageSquareQuote className="w-3.5 h-3.5" />}>
              Parent & Student Experiences
            </Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Voices of the <span className="gold-gradient-text">TIS Community</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-sm sm:text-base text-slate-300">
              Hear directly from parents, alumni, and student leaders about their journey at Tula's International School.
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="relative p-8 sm:p-12 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-2xl space-y-6"
            >
              <Quote className="w-12 h-12 text-amber-500/20 absolute top-6 right-6" />

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-medium italic">
                "{activeTestimonial.quote}"
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-md"
                />
                <div>
                  <h3 className="text-base font-bold text-white">{activeTestimonial.name}</h3>
                  <div className="text-xs text-amber-400 font-medium">{activeTestimonial.role}</div>
                  <div className="text-[11px] text-slate-400">{activeTestimonial.year}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  data-interactive="true"
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400 text-white hover:text-amber-400 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
                data-interactive="true"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400 text-white hover:text-amber-400 transition-colors cursor-pointer"
                aria-label="Next testimonial"
                data-interactive="true"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
