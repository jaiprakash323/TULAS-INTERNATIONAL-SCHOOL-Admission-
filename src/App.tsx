import React, { useState } from 'react';
import { CustomCursor } from './components/animation/CustomCursor';
import { ScrollProgress } from './components/animation/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StatCounterSection } from './components/sections/StatCounterSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProgramsSection } from './components/sections/ProgramsSection';
import { CampusFacilitiesSection } from './components/sections/CampusFacilitiesSection';
import { BoardingLifeSection } from './components/sections/BoardingLifeSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AwardsSection } from './components/sections/AwardsSection';
import { FAQSection } from './components/sections/FAQSection';
import { CTASection } from './components/sections/CTASection';
import { AdmissionCalculatorModal } from './components/modals/AdmissionCalculatorModal';
import { VideoTourModal } from './components/modals/VideoTourModal';

export const App: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenApplyModal = () => setIsApplyModalOpen(true);
  const handleCloseApplyModal = () => setIsApplyModalOpen(false);

  const handleOpenTourModal = () => setIsVideoModalOpen(true);
  const handleCloseTourModal = () => setIsVideoModalOpen(false);

  return (
    <div className="relative min-h-screen bg-slate-950 dark:bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Required Standout Features: Feature A Custom Cursor & Feature D Scroll Progress Bar */}
      <CustomCursor />
      <ScrollProgress />

      {/* Main Navigation Header */}
      <Navbar
        onOpenApplyModal={handleOpenApplyModal}
        onOpenTourModal={handleOpenTourModal}
      />

      {/* Page Content Sections */}
      <main>
        <HeroSection
          onOpenApplyModal={handleOpenApplyModal}
          onOpenTourModal={handleOpenTourModal}
        />

        <StatCounterSection />

        <AboutSection
          onOpenTourModal={handleOpenTourModal}
          onOpenApplyModal={handleOpenApplyModal}
        />

        <ProgramsSection onOpenApplyModal={handleOpenApplyModal} />

        <CampusFacilitiesSection />

        <BoardingLifeSection />

        <TestimonialsSection />

        <AwardsSection />

        <FAQSection />

        <CTASection
          onOpenApplyModal={handleOpenApplyModal}
          onOpenTourModal={handleOpenTourModal}
        />
      </main>

      {/* Footer */}
      <Footer onOpenApplyModal={handleOpenApplyModal} />

      {/* Modals */}
      <AdmissionCalculatorModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApplyModal}
      />

      <VideoTourModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseTourModal}
      />
    </div>
  );
};

export default App;
