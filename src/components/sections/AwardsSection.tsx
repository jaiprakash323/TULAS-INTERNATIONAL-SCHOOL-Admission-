import React from 'react';
import { AWARDS_DATA } from '../../data/schoolData';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Award, Trophy, Leaf, Cpu } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-8 h-8 text-amber-400" />;
      case 'Award':
        return <Award className="w-8 h-8 text-blue-400" />;
      case 'Leaf':
        return <Leaf className="w-8 h-8 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-8 h-8 text-purple-400" />;
      default:
        return <Trophy className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<Trophy className="w-3.5 h-3.5" />}>
              National Recognition & Honors
            </Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Award-Winning <span className="gold-gradient-text">Educational Excellence</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-sm sm:text-base text-slate-300">
              Ranked among India's top residential co-ed boarding institutions by premier educational bodies.
            </p>
          </ScrollReveal>
        </div>

        {/* Awards Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS_DATA.map((award, idx) => (
            <StaggerItem key={idx}>
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-lg h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {getIcon(award.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {award.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-400 mb-2">
                    {award.organization}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
