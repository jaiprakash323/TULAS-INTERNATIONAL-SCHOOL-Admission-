import React from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Sparkles, Calendar, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';

interface CTASectionProps {
  onOpenApplyModal: () => void;
  onOpenTourModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenApplyModal,
  onOpenTourModal,
}) => {
  return (
    <section id="admissions" className="relative py-24 bg-slate-900 border-t border-slate-800 text-white overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 shadow-2xl overflow-hidden text-center space-y-8">
          <ScrollReveal direction="down">
            <div className="flex justify-center">
              <Badge variant="gold" pulse icon={<Sparkles className="w-3.5 h-3.5" />}>
                Session 2025-26 Registration Open
              </Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
              Give Your Child the Advantage of a <br />
              <span className="gold-gradient-text">World-Class Boarding Education</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Admissions are strictly limited to maintain our 8:1 pastoral care ratio. Secure your child's position today for Grades IV through IX & XI.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                variant="gold"
                size="lg"
                glow
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={onOpenApplyModal}
              >
                Start Online Application
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5 text-amber-400" />}
                onClick={onOpenTourModal}
              >
                Book Virtual Campus Tour
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Admissions Helpline: {SCHOOL_INFO.phone}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
