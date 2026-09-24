import React from 'react';
import { Cpu, Shield, TrendingUp, FileText, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutMeProps {
  onOpenCv: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenCv }) => {
  const principles = [
    {
      icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-retro-green" />,
      title: "INGENIERÍA & VALOR DE USUARIO",
      description: "Arquitectura limpia, diseño modular y foco constante en construir software que aporte valor real, directo y tangible a los usuarios."
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-retro-cyan" />,
      title: "APRENDIZAJE & PROYECTOS PROPIOS",
      description: "Curiosidad técnica y aprendizaje continuo mediante el desarrollo de proyectos independientes por iniciativa propia."
    },
    {
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-retro-yellow" />,
      title: "VISIÓN DE NEGOCIO & ADE",
      description: "Perspectiva analítica de empresa: viabilidad de proyectos, lectura de estados financieros y trabajo en equipo multidisciplinar."
    },
    {
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-retro-greenPastel" />,
      title: "INTERCAMBIO ERASMUS // TAILANDIA",
      description: "Experiencia académica internacional en Tailandia: inmersión cultural, alta adaptabilidad y comunicación eficaz en entornos globales."
    }
  ];

  return (
    <section
      id="sobre-mi"
      className="relative h-[calc(100vh-56px)] max-h-[calc(100vh-56px)] snap-start flex flex-col justify-between py-3 sm:py-4 border-b-4 border-retro-border bg-retro-bgAlt overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-between h-full">
        {/* Section Header */}
        <div className="mb-2 sm:mb-2.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-1.5 bg-retro-panel border-2 border-retro-border text-retro-cyan font-pixel text-[9px] sm:text-[10px] font-bold shadow-[2px_2px_0px_#2C221E]">
            <span className="w-2 h-2 bg-retro-cyanPastel border border-retro-border inline-block animate-pulse" />
            <span>[STAGE 03] :: PERFIL &amp; FILOSOFÍA DE SOFTWARE</span>
          </div>
          <h2 className="font-pixel text-lg sm:text-2xl text-retro-ink">
            MÁS SOBRE MÍ
          </h2>
          <p className="font-arcade text-lg sm:text-xl text-[#3D3028] font-bold mt-0.5 max-w-2xl leading-tight">
            Estudiante de 5º curso de Informática y ADE en la UGR, con mención en Ingeniería del Software y experiencia internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 items-center flex-1 my-auto">
          {/* Main Bio Box */}
          <div className="lg:col-span-7 bg-retro-panel pixel-box p-3.5 sm:p-5 lg:p-6 space-y-2 sm:space-y-2.5 font-arcade text-base sm:text-lg lg:text-xl text-retro-ink leading-relaxed">
            <p>
              Soy <strong className="text-retro-ink font-pixel text-sm sm:text-base">{PERSONAL_INFO.name}</strong> (<span className="text-retro-green font-pixel text-[10px] sm:text-xs font-bold">@{PERSONAL_INFO.handle}</span>), estudiante de 5º curso de <strong className="text-retro-ink font-bold">Ingeniería Informática y ADE en la Universidad de Granada (UGR)</strong>, cursando la mención en <strong className="text-retro-ink font-bold">Ingeniería del Software</strong>.
            </p>
            <p>
              Siempre he sido un apasionado de la tecnología. Mi motivación principal es <strong className="text-retro-ink font-bold">crear software útil que aporte valor real</strong> a los usuarios, disfrutando enormemente de aprender de forma constante mientras realizo <strong className="text-retro-ink font-bold">proyectos independientes por mi cuenta</strong>.
            </p>
            <p>
              La formación en ADE enriquece mi enfoque técnico con una <strong className="text-retro-ink font-bold">visión estratégica de negocio</strong>: viabilidad económica, comprensión analítica y habilidades sólidas de gestión y trabajo en equipo.
            </p>
            <p className="text-[#3D3028] font-bold">
              Además, mi experiencia de <strong className="text-retro-ink">intercambio académico (Erasmus) en Tailandia</strong> fortaleció mi <strong className="text-retro-ink">capacidad de adaptación, mentalidad global</strong> y comunicación en entornos multiculturales diversos.
            </p>

            <div className="pt-2 sm:pt-2.5 border-t-2 border-retro-border flex items-center gap-4">
              <button
                onClick={onOpenCv}
                className="pixel-btn px-4 py-2 bg-retro-greenPastel hover:bg-retro-greenLight text-retro-ink font-pixel text-[10px] sm:text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CONSULTAR DOSSIER / CV</span>
              </button>
            </div>
          </div>

          {/* Pillars List (4 Pillars) */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-2.5">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-retro-panel pixel-box p-2.5 sm:p-3 space-y-0.5 shadow-[2px_2px_0px_#2C221E]"
              >
                <div className="flex items-center gap-2">
                  <span className="p-1 bg-retro-surfaceAlt border border-retro-border">
                    {p.icon}
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

