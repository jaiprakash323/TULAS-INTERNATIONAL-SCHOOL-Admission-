import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Award,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { SCHOOL_INFO, NAV_ITEMS } from '../../data/schoolData';
import { Button } from '../ui/Button';

interface FooterProps {
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApplyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-md shadow-amber-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-amber-400 text-lg">
                  TIS
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  TULA'S
                </span>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest -mt-1">
                  International School
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {SCHOOL_INFO.tagline}. Nurturing academic rigor, holistic boarding life, and timeless Gurukul values across 22 green acres in Dehradun.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-xs font-semibold text-amber-400">
                <ShieldCheck className="w-3.5 h-3.5" /> CBSE Affiliated
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
                <Award className="w-3.5 h-3.5" /> #1 Boarding
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                    data-interactive="true"
                  >
                    <span className="text-amber-500/60 group-hover:text-amber-400 group-hover:translate-x-1 transition-all">
                      ›
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://tis.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-400"
                  data-interactive="true"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" /> Official TIS Website
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Campus Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Campus Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="hover:text-amber-400 transition-colors"
                  data-interactive="true"
                >
                  {SCHOOL_INFO.phone} / {SCHOOL_INFO.altPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${SCHOOL_INFO.admissionsEmail}`}
                  className="hover:text-amber-400 transition-colors"
                  data-interactive="true"
                >
                  {SCHOOL_INFO.admissionsEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Admission Hotline & Action */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Admissions Desk 2025-26
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Admissions are open for Grades IV to IX & XI. Book a virtual tour or consult with our admissions director today.
            </p>

            <Button
              variant="gold"
              size="md"
              className="w-full"
              glow
              icon={<Sparkles className="w-4 h-4" />}
              onClick={onOpenApplyModal}
            >
              Apply Online Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Tula's International School, Dehradun. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Designed for TIS Redesign Assessment</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-900 border border-slate-800 text-amber-400 hover:bg-slate-800 transition-colors flex items-center gap-1"
              aria-label="Back to top"
              data-interactive="true"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
