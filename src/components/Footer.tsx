import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-4 border-retro-border bg-retro-surface py-8 text-retro-inkMuted font-pixel text-[10px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b-2 border-retro-border">
          {/* Identity */}
          <div className="flex items-center gap-2 text-retro-ink">
            <span className="text-retro-green font-bold">&gt;</span>
            <span className="font-bold">{PERSONAL_INFO.handle}</span>
            <span className="text-retro-borderMuted">/</span>
            <span className="text-retro-inkMuted">{PERSONAL_INFO.name}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 font-bold">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-ink hover:text-retro-green flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-ink hover:text-retro-cyan flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-retro-ink hover:text-retro-yellow flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>EMAIL</span>
            </a>
          </div>

          {/* Return to top */}
          <button
            onClick={scrollToTop}
            className="pixel-btn px-2.5 py-1 bg-retro-panel text-retro-ink hover:bg-retro-greenPastel flex items-center gap-1"
            aria-label="Volver arriba"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3 text-retro-green" />
          </button>
        </div>

        {/* Bottom */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-retro-inkLight text-[9px]">
          <div>
            (C) {new Date().getFullYear()} {PERSONAL_INFO.name}. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div>
            SYSTEM_ID: X86_64 // RELEASE
          </div>
        </div>
      </div>
    </footer>
  );
};
