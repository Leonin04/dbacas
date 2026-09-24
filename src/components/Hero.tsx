import React from 'react';
import { ArrowRight, Github, Cpu, HardDrive, Shield, Layers, MapPin, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePic from '../data/yo.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative h-[calc(100vh-56px)] max-h-[calc(100vh-56px)] snap-start flex flex-col justify-between py-3 sm:py-4 lg:py-5 border-b-4 border-retro-border bg-retro-bg overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-between h-full">
        {/* Retro HUD Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 sm:p-3 mb-2.5 sm:mb-3 bg-retro-surface pixel-box font-pixel text-[10px] sm:text-xs text-retro-inkMuted shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-retro-greenPastel animate-pulse inline-block border border-retro-border" />
            <span className="text-retro-green font-bold">STATUS: 5TO_CURSO_ACTIVO</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-retro-inkMuted">
            <span className="text-retro-ink font-bold">GRADO: INF + ADE</span>
            <span className="text-retro-yellow font-bold">UNIV: UGR (GRANADA)</span>
            <span className="text-retro-cyan font-bold">MENCIÓN: ING_SOFTWARE</span>
          </div>
        </div>

        {/* Main Hero Card with Pixel Art Aesthetic */}
        <div className="flex-1 p-5 sm:p-7 lg:p-9 bg-retro-panel pixel-box relative flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 h-full">
            {/* Left Column: Bio & Info */}
            <div className="flex-1 max-w-3xl flex flex-col justify-between h-full py-1">
              <div>
                {/* Tag / Role */}
                <div className="inline-block px-3.5 py-1.5 mb-2.5 sm:mb-3 bg-retro-surface border-2 border-retro-border text-retro-green font-pixel text-xs sm:text-sm font-bold shadow-[2px_2px_0px_#2C221E]">
                  &gt; DOBLE_GRADO::INGENIERÍA_INFORMÁTICA_Y_ADE::UGR
                </div>

                {/* Name / Title */}
                <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-retro-ink tracking-wide leading-tight">
                  {PERSONAL_INFO.name}
                </h1>

                <div className="font-pixel text-sm sm:text-base text-retro-yellow mt-2 flex items-center gap-2 font-bold">
                  <span>ALIAS:</span>
                  <span className="text-retro-cyan">@{PERSONAL_INFO.handle}</span>
                </div>

                {/* Direct Technical Subtext */}
                <p className="mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-[25px] xl:text-[27px] text-retro-ink font-arcade leading-relaxed max-w-2xl">
                  {PERSONAL_INFO.subtext}
                </p>
              </div>

              {/* Retro 8-bit Metric & Spec Grid */}
              <div className="my-3 sm:my-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 font-arcade text-lg">
                <div className="p-3 sm:p-3.5 bg-retro-surface border-2 border-retro-border shadow-[2px_2px_0px_#2C221E] flex items-center gap-3">
                  <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-retro-green shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-pixel text-retro-inkLight uppercase truncate">INGENIERÍA SOFTWARE</div>
                    <div className="text-retro-green font-bold text-lg sm:text-xl truncate">Diseño modular y valor</div>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-retro-surface border-2 border-retro-border shadow-[2px_2px_0px_#2C221E] flex items-center gap-3">
                  <HardDrive className="w-6 h-6 sm:w-7 sm:h-7 text-retro-cyan shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-pixel text-retro-inkLight uppercase truncate">SISTEMAS &amp; ARQUITECTURA</div>
                    <div className="text-retro-cyan font-bold text-lg sm:text-xl truncate">Distribuidos y concurrencia</div>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-retro-surface border-2 border-retro-border shadow-[2px_2px_0px_#2C221E] flex items-center gap-3">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-retro-yellow shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-pixel text-retro-inkLight uppercase truncate">VISIÓN NEGOCIO &amp; ADE</div>
                    <div className="text-retro-yellow font-bold text-lg sm:text-xl truncate">Estrategia y equipo</div>
                  </div>
                </div>
              </div>

              {/* Pixel CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <a
                  href="#proyectos"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('proyectos');
                    if (el) window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' });
                  }}
                  className="pixel-btn px-6 py-3 sm:py-3.5 bg-retro-greenPastel hover:bg-retro-greenLight text-retro-ink font-pixel text-xs sm:text-sm font-bold flex items-center gap-2"
                >
                  <span>VER PROYECTOS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('skills');
                    if (el) window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' });
                  }}
                  className="pixel-btn px-6 py-3 sm:py-3.5 bg-retro-yellowPastel hover:bg-retro-yellowLight text-retro-ink font-pixel text-xs sm:text-sm font-bold border-2 border-retro-border flex items-center gap-2"
                >
                  <Layers className="w-4 h-4" />
                  <span>STACK TÉCNICO</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn px-6 py-3 sm:py-3.5 bg-retro-cyanPastel hover:bg-retro-cyanLight text-retro-ink font-pixel text-xs sm:text-sm font-bold border-2 border-retro-border flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-retro-ink" />
                  <span>GITHUB /Leonin04</span>
                </a>
              </div>
            </div>

            {/* Right Column: Retro Photo Frame & Operator HUD */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="bg-retro-surface pixel-box p-3.5 sm:p-4 border-3 border-retro-border relative">
                {/* Header bar of the photo frame */}
                <div className="w-full flex items-center justify-between pb-2 mb-2.5 border-b-2 border-retro-border font-pixel text-[10px] sm:text-xs text-retro-inkMuted gap-4">
                  <span className="flex items-center gap-1.5 text-retro-green font-bold">
                    <span className="w-2 h-2 bg-retro-greenPastel inline-block border border-retro-border animate-pulse" />
                    PHOTO::OPERATOR
                  </span>
                  <span className="text-retro-yellow font-bold">5º CURSO</span>
                </div>

                {/* Photo frame */}
                <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-80 lg:h-80 xl:w-88 xl:h-88 overflow-hidden border-2 border-retro-border bg-retro-panel relative group">
                  <img
                    src={profilePic}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle pixel scanlines/corners */}
                  <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-retro-sandLight pointer-events-none" />
                  <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-retro-sandLight pointer-events-none" />
                  <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-retro-sandLight pointer-events-none" />
                  <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-retro-sandLight pointer-events-none" />
                </div>

                {/* Footer bar of photo */}
                <div className="w-full mt-2.5 pt-2.5 border-t-2 border-retro-border flex items-center justify-between font-pixel text-[9px] sm:text-[10px] text-retro-inkLight">
                  <span>DAVID BACAS POSADAS</span>
                  <span className="text-retro-cyan font-bold">UGR // INF+ADE</span>
                </div>
              </div>

              {/* Status telemetry box below photo to balance height */}
              <div className="w-full mt-3 p-2.5 bg-retro-surface pixel-box border-2 border-retro-border font-pixel text-[10px] sm:text-xs text-retro-inkMuted flex flex-col gap-1.5 shadow-[2px_2px_0px_#2C221E]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-retro-inkLight">
                    <MapPin className="w-3 h-3 text-retro-yellow" />
                    UBICACIÓN:
                  </span>
                  <span className="text-retro-yellow font-bold">GRANADA, ES</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-retro-inkLight">
                    <CheckCircle2 className="w-3 h-3 text-retro-green" />
                    ENFOQUE:
                  </span>
                  <span className="text-retro-green font-bold">ING_SOFTWARE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-retro-inkLight">
                    <Terminal className="w-3 h-3 text-retro-cyan" />
                    ENTORNO:
                  </span>
                  <span className="text-retro-cyan font-bold">LINUX / WINDOWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

