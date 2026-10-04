import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FACILITIES_DATA } from '../../data/schoolData';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Building2, Check } from 'lucide-react';

export const CampusFacilitiesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'boarding' | 'sports' | 'academics' | 'arts'>('all');

  const filteredFacilities =
    filter === 'all'
      ? FACILITIES_DATA
      : FACILITIES_DATA.filter((f) => f.category === filter);

  const filterTabs = [
    { id: 'all', label: 'All Facilities' },
    { id: 'boarding', label: 'Hostel & Residential' },
    { id: 'sports', label: 'Sports Arena' },
    { id: 'academics', label: 'Science & STEM Labs' },
    { id: 'arts', label: 'Arts & Culture' },
  ];

  return (
    <section id="facilities" className="relative py-24 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <ScrollReveal direction="down">
            <Badge variant="emerald" icon={<Building2 className="w-3.5 h-3.5" />}>
              22-Acre World-Class Infrastructure
            </Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Designed for <span className="gold-gradient-text">Safety, Comfort & Discovery</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-sm sm:text-base text-slate-300">
              Explore state-of-the-art boarding houses, professional sports complexes, STEM robotics labs, and organic dining facilities.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
                data-interactive="true"
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Facility Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFacilities.map((facility) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={facility.id}
                className="group relative rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-xs text-[11px] font-bold text-amber-400 border border-amber-500/20">
                      {facility.stats}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {facility.description}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2 space-y-1.5 border-t border-slate-800/80">
                      {facility.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
