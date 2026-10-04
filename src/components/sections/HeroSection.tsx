import React from 'react';
import {
  Sparkles,
  Play,
  ArrowRight,
  ShieldCheck,
  Users,
  Trees,
  CheckCircle2,
} from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../animation/ScrollReveal';

interface HeroSectionProps {
  onOpenApplyModal: () => void;
  onOpenTourModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApplyModal,
  onOpenTourModal,
}) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image Overlay with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
          alt="Tulas International School Campus"
          className="w-full h-full object-cover object-center opacity-25 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      {/* Decorative Animated Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="down" duration={0.4}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="gold" pulse icon={<Sparkles className="w-3.5 h-3.5" />}>
                  Admissions Open 2025-26
                </Badge>
                <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                  Top Co-Ed Boarding School
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} duration={0.5}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Empowering Minds, <br />
                <span className="gold-gradient-text">Inspiring Leaders</span> at Dehradun's Premier Boarding School.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} duration={0.5}>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Welcome to <strong className="text-amber-400 font-semibold">{SCHOOL_INFO.name}</strong> — where ancient Gurukul values meet modern international education across a 22-acre lush green campus.
              </p>
            </ScrollReveal>

            {/* Value Highlights */}
            <ScrollReveal direction="up" delay={0.25} duration={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>8:1 Student-Teacher Ratio</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% CBSE Distinction Success</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>16+ Olympic Sports & Riding</span>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" delay={0.3} duration={0.5}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  variant="gold"
                  size="lg"
                  glow
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={onOpenApplyModal}
                >
                  Apply for Admission 2025
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Play className="w-4 h-4 text-amber-400 fill-amber-400" />}
                  iconPosition="left"
                  onClick={onOpenTourModal}
                >
                  Watch Campus Tour
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Right Interactive Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.2} duration={0.6}>
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-amber-500/30 via-slate-800 to-slate-900 shadow-2xl overflow-hidden group">
                <div className="relative rounded-[22px] bg-slate-900/90 p-6 backdrop-blur-xl border border-slate-800 space-y-6">
                  {/* Badge Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Live Admission Status
                      </span>
                    </div>
                    <span className="text-xs text-amber-400 font-mono font-semibold">
                      Limited Seats
                    </span>
                  </div>

                  {/* Campus Image Frame with Play Overlay */}
                  <div className="relative rounded-xl overflow-hidden aspect-video group/img cursor-pointer" onClick={onOpenTourModal}>
                    <img
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
                      alt="TIS School Campus Preview"
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover/img:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center pl-1 shadow-lg group-hover/img:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-slate-950" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-[11px] font-semibold text-amber-300">
                      Explore 22-Acre Campus
                    </div>
                  </div>

                  {/* Quick Stat Highlights */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                        <Trees className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-white">22+ Acres</div>
                        <div className="text-[10px] text-slate-400">Eco-Green Campus</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-white">1:8 Ratio</div>
                        <div className="text-[10px] text-slate-400">Pastoral Attention</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Inquiry CTA */}
                  <button
                    onClick={onOpenApplyModal}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    data-interactive="true"
                  >
                    <span>Instant Eligibility Check</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
