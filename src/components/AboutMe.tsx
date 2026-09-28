import React from 'react';
import { Cpu, Shield, TrendingUp, FileText, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPersonalInfo } from '../data/portfolioData';
import { getTranslations } from '../data/translations';

interface AboutMeProps {
  onOpenCv: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenCv }) => {
  const { language } = useLanguage();
  const personalInfo = getPersonalInfo(language);
  const t = getTranslations(language);

  const principleIcons = [
    <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-retro-green" />,
    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-retro-cyan" />,
    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-retro-yellow" />,
    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-retro-greenPastel" />,
  ];

  return (
    <section
      id="sobre-mi"
      className="relative min-h-[calc(100vh-56px)] lg:h-[calc(100vh-56px)] lg:max-h-[calc(100vh-56px)] snap-start flex flex-col justify-between py-6 sm:py-8 lg:py-4 border-b-4 border-retro-border bg-retro-bgAlt overflow-visible lg:overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 flex flex-col justify-between h-full">
        {/* Section Header */}
        <div className="mb-2 sm:mb-2.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-1.5 bg-retro-panel border-2 border-retro-border text-retro-cyan font-pixel text-[9px] sm:text-[10px] font-bold shadow-[2px_2px_0px_#2C221E]">
            <span className="w-2 h-2 bg-retro-cyanPastel border border-retro-border inline-block animate-pulse" />
            <span>{t.aboutMe.stage}</span>
          </div>
          <h2 className="font-pixel text-lg sm:text-2xl text-retro-ink">
            {t.aboutMe.title}
          </h2>
          <p className="font-arcade text-lg sm:text-xl text-[#3D3028] font-bold mt-0.5 max-w-2xl leading-tight">
            {t.aboutMe.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 items-center flex-1 my-auto">
          {/* Main Bio Box */}
          <div className="lg:col-span-7 bg-retro-panel pixel-box p-3.5 sm:p-5 lg:p-6 space-y-2 sm:space-y-2.5 font-arcade text-base sm:text-lg lg:text-xl text-retro-ink leading-relaxed">
            <p>
              {t.aboutMe.p1BeforeName}
              <strong className="text-retro-ink font-pixel text-sm sm:text-base">{personalInfo.name}</strong> (
              <span className="text-retro-green font-pixel text-[10px] sm:text-xs font-bold">@{personalInfo.handle}</span>)
              {t.aboutMe.p1AfterName}
            </p>
            <p>
              {t.aboutMe.p2}
            </p>
            <p>
              {t.aboutMe.p3}
            </p>
            <p className="text-[#3D3028] font-bold">
              {t.aboutMe.p4BeforeErasmus}
              <strong className="text-retro-ink">{t.aboutMe.p4Erasmus}</strong>
              {t.aboutMe.p4AfterErasmus}
            </p>

            <div className="pt-2 sm:pt-2.5 border-t-2 border-retro-border flex items-center gap-4">
              <button
                onClick={onOpenCv}
                className="pixel-btn px-4 py-2 bg-retro-greenPastel hover:bg-retro-greenLight text-retro-ink font-pixel text-[10px] sm:text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t.aboutMe.cvBtn}</span>
              </button>
            </div>
          </div>

          {/* Pillars List (4 Pillars) */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-2.5">
            {t.aboutMe.principles.map((p, idx) => (
              <div
                key={p.title}
                className="bg-retro-panel pixel-box p-2.5 sm:p-3 space-y-0.5 shadow-[2px_2px_0px_#2C221E]"
              >
                <div className="flex items-center gap-2">
                  <span className="p-1 bg-retro-surfaceAlt border border-retro-border">
                    {principleIcons[idx]}
                  </span>
                  <h3 className="font-pixel text-[10px] sm:text-xs text-retro-ink font-bold">
                    {p.title}
                  </h3>
                </div>
                <p className="font-arcade text-sm sm:text-base text-retro-inkMuted leading-tight">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


