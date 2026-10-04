import React from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Sparkles, Shield, Compass, HeartHandshake, BookOpen, Play } from 'lucide-react';

interface AboutSectionProps {
  onOpenTourModal: () => void;
  onOpenApplyModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTourModal, onOpenApplyModal }) => {
  const pillars = [
    {
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      title: 'Modern Gurukul Philosophy',
      description: 'Rooted in ancient Indian ethos of character development, discipline, respect, and self-reliance paired with global academic standards.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: 'Academic Excellence (CBSE)',
      description: 'Rigorous CBSE curriculum enhanced with inquiry-based STEM projects, foreign languages, and top university competitive coaching.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />,
      title: '100% Residential Pastoral Care',
      description: 'Dedicated house masters, house mothers, and 24/7 medical infirmary providing a home away from home for every student.',
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Eco-Friendly Safe Haven',
      description: 'Nestled in a pollution-free 22-acre green sanctuary at the Shivalik foothills of Dehradun with round-the-clock security.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 dark:bg-slate-950 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image Showcase Grid */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
                  alt="Tulas Students in Modern Lab"
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {/* Overlaid Floating Experience Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card border border-amber-500/20 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Established 2012
                    </div>
                    <div className="text-lg font-bold text-white">12+ Years of Educational Honor</div>
                  </div>
                  <button
                    onClick={onOpenTourModal}
                    className="p-3 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-lg cursor-pointer shrink-0"
                    aria-label="Play tour video"
                    data-interactive="true"
                  >
                    <Play className="w-5 h-5 fill-slate-950" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Background Backdrop Card */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border-2 border-amber-500/20 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="down">
              <Badge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Why Tula's International School?
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                The Perfect Harmonization of <br />
                <span className="gold-gradient-text">Heritage & Innovation</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tula's International School in Dehradun is designed to nurture independent thinkers, courageous athletes, and empathetic leaders. Our co-educational residential framework ensures that every child receives individualized attention with an average teacher-to-student ratio of 1:8.
              </p>
            </ScrollReveal>

            {/* 4 Pillars Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-slate-950 w-fit mb-3 border border-slate-800">
                      {pillar.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{pillar.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button variant="gold" size="md" glow onClick={onOpenApplyModal}>
                  Request Admission Prospectus
                </Button>
                <Button variant="secondary" size="md" onClick={onOpenTourModal}>
                  Schedule Virtual Campus Visit
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
