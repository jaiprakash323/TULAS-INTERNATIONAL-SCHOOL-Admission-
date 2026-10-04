import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CheckCircle2, Calculator, Send, ShieldCheck } from 'lucide-react';

interface AdmissionCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionCalculatorModal: React.FC<AdmissionCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('Grade VI');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const gradesList = [
    'Grade IV',
    'Grade V',
    'Grade VI',
    'Grade VII',
    'Grade VIII',
    'Grade IX',
    'Grade XI (Science)',
    'Grade XI (Commerce)',
    'Grade XI (Humanities)',
  ];

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone) return;
    setIsSubmitted(true);
    triggerConfetti();
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setParentName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Admissions 2025-26 & Instant Eligibility Calculator"
      maxWidth="2xl"
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Interactive Fee & Seat Availability Check
              </span>
            </div>
            <Badge variant="gold">Limited Seats</Badge>
          </div>

          {/* Grade Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              1. Select Student Grade Seeking Admission
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {gradesList.map((g) => (
                <button
                  type="button"
                  key={g}
                  onClick={() => setGrade(g)}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer border ${
                    grade === g
                      ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow-md'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                  data-interactive="true"
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 pt-2 border-t border-slate-800">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              2. Parent / Guardian Contact Details
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Parent's Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  data-interactive="true"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  data-interactive="true"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Email Address (Optional)</label>
              <input
                type="email"
                placeholder="e.g. rajesh@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                data-interactive="true"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Information strictly confidential
            </span>

            <Button
              variant="gold"
              size="md"
              glow
              type="submit"
              icon={<Send className="w-4 h-4" />}
            >
              Get Instant Prospectus & Fee Breakdown
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center py-8 space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-black text-white">Application Inquiry Submitted!</h3>

          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you, <strong className="text-amber-400">{parentName}</strong>. Our Admissions Office for <strong className="text-amber-400">{grade}</strong> will contact you via WhatsApp/Phone at <strong className="text-white">{phone}</strong> within 2 hours with the complete fee structure & syllabus guide.
          </p>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
            <div className="text-amber-400 font-bold">Priority Registration Reference: TIS-2025-{(Math.random() * 8999 + 1000).toFixed(0)}</div>
            <div>Direct Admission Helpline: +91 94583 11000</div>
          </div>

          <Button variant="gold" size="md" onClick={handleReset}>
            Close & Continue Browsing
          </Button>
        </div>
      )}
    </Modal>
  );
};
