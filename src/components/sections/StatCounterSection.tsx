import React from 'react';
import { STATS_DATA } from '../../data/schoolData';
import { CountUpNumber } from '../animation/CountUpNumber';
import { StaggerContainer, StaggerItem } from '../animation/ScrollReveal';
import { Trees, Users, Trophy, GraduationCap } from 'lucide-react';

export const StatCounterSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-7 h-7 text-amber-500" />;
      case 'Users':
        return <Users className="w-7 h-7 text-blue-500" />;
      case 'Trophy':
        return <Trophy className="w-7 h-7 text-emerald-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-purple-500" />;
      default:
        return <Trophy className="w-7 h-7 text-amber-500" />;
    }
  };

  return (
    <section className="relative py-16 bg-slate-900 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <StaggerItem key={stat.id}>
              <div className="relative p-6 rounded-2xl bg-slate-950/60 dark:bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all group duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getIcon(stat.iconName)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    Key Metric
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-base font-bold text-amber-400 mb-2">{stat.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
