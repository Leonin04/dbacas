import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { TerminalWidget } from './components/TerminalWidget';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export const App: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-zinc-100 flex flex-col selection:bg-retro-green selection:text-black">
      {/* Retro Grid Background */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none z-0" />

      {/* 8-bit Sticky HUD / Navbar */}
      <Navbar onOpenCv={() => setCvModalOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        <Hero />
        <Projects />
        <TechStack />
        <TerminalWidget />
        <AboutMe onOpenCv={() => setCvModalOpen(true)} />
      </main>

      {/* Serious Retro Footer */}
      <Footer />

      {/* 8-bit CV Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
};

export default App;
