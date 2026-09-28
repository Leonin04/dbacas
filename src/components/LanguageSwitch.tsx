import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitchProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className = '', size = 'md' }) => {
  const { language, setLanguage } = useLanguage();

  const isSmall = size === 'sm';

  return (
    <div
      role="group"
      aria-label="Seleccionar idioma / Select language"
      className={`inline-flex items-center bg-retro-panel border-2 border-retro-border pixel-box p-0.5 select-none ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`font-pixel transition-all ${
          isSmall
            ? 'px-1.5 py-0.5 text-[7px] sm:text-[8px]'
            : 'px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[9px]'
        } ${
          language === 'es'
            ? 'bg-retro-greenPastel text-retro-ink font-bold border border-retro-border shadow-[1px_1px_0px_#2C221E]'
            : 'text-retro-inkMuted hover:text-retro-ink hover:bg-retro-surface border border-transparent'
        }`}
        aria-pressed={language === 'es'}
        title="Cambiar a Español"
      >
        ES
      </button>

      <span className="text-retro-borderMuted font-pixel text-[8px] px-0.5">/</span>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`font-pixel transition-all ${
          isSmall
            ? 'px-1.5 py-0.5 text-[7px] sm:text-[8px]'
            : 'px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[9px]'
        } ${
          language === 'en'
            ? 'bg-retro-greenPastel text-retro-ink font-bold border border-retro-border shadow-[1px_1px_0px_#2C221E]'
            : 'text-retro-inkMuted hover:text-retro-ink hover:bg-retro-surface border border-transparent'
        }`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
