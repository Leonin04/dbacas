import React from 'react';
import { ArrowUp, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPersonalInfo } from '../data/portfolioData';
import { getTranslations } from '../data/translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const personalInfo = getPersonalInfo(language);
  const t = getTranslations(language);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-4 border-retro-border bg-retro-surface py-8 text-retro-inkMuted font-pixel text-[10px] snap-start">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b-2 border-retro-border">
          {/* Identity */}
          <div className="flex items-center gap-2 text-retro-ink">
            <span className="text-retro-green font-bold">&gt;</span>
            <span className="font-bold">{personalInfo.handle}</span>
            <span className="text-retro-borderMuted">/</span>
            <span className="text-retro-inkMuted">{personalInfo.name}</span>
          </div>

          {/* Social Links: Instagram & Email */}
          <div className="flex items-center gap-5 font-bold">
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-ink hover:text-retro-red flex items-center gap-1.5 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>INSTAGRAM</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
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
            aria-label={language === 'en' ? 'Back to top' : 'Volver arriba'}
          >
            <span>{t.footer.top}</span>
            <ArrowUp className="w-3 h-3 text-retro-green" />
          </button>
        </div>

        {/* Bottom */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-retro-inkLight text-[9px]">
          <div>
            (C) {new Date().getFullYear()} {personalInfo.name}. {t.footer.rightsReserved}
          </div>
          <div>
            {t.footer.systemId}
          </div>
        </div>
      </div>
    </footer>
  );
};

