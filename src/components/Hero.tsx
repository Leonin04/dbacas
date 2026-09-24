import React from 'react';
import { Github, Linkedin, Cpu, HardDrive, Shield, MapPin, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePic from '../data/yo.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-56px)] snap-start flex flex-col justify-center py-4 sm:py-6 lg:py-5 border-b-4 border-retro-border bg-retro-bg"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-between">
        {/* Retro HUD Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 sm:p-2.5 mb-3 bg-retro-surface pixel-box font-pixel text-[8px] sm:text-[10px] lg:text-xs text-retro-inkMuted shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-retro-greenPastel animate-pulse inline-block border border-retro-border" />
            <span className="text-retro-green font-bold">STATUS: 5TO_CURSO_ACTIVO</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-retro-inkMuted">
            <span className="text-retro-ink font-bold">GRADO: INF + ADE</span>
            <span className="text-retro-yellow font-bold">UNIV: UGR (GRANADA)</span>
            <span className="text-retro-cyan font-bold">MENCIÓN: ING_SOFTWARE</span>
          </div>
        </div>

        {/* Main Hero Card with Pixel Art Aesthetic */}
        <div className="p-4 sm:p-6 lg:p-7 xl:p-8 bg-retro-panel pixel-box relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-12">
            {/* Left Column: Bio & Info */}
            <div className="flex-1 max-w-2xl xl:max-w-3xl flex flex-col justify-center gap-3 sm:gap-4 w-full">
              <div>
                {/* Tag / Role - Responsive, wraps gracefully on mobile without clipping */}
                <div className="inline-block max-w-full px-2.5 sm:px-3 py-1 mb-2 bg-retro-surface border-2 border-retro-border text-retro-green font-pixel text-[8px] sm:text-[10px] lg:text-xs font-bold shadow-[2px_2px_0px_#2C221E] leading-relaxed break-words [overflow-wrap:anywhere]">
                  &gt; DOBLE_GRADO :: INGENIERÍA_INFORMÁTICA_Y_ADE :: UGR
                </div>

                {/* Name / Title */}
                <h1 className="font-pixel text-xl sm:text-3xl lg:text-4xl text-retro-ink tracking-wide leading-tight">
                  {PERSONAL_INFO.name}
                </h1>

                <div className="font-pixel text-xs sm:text-sm text-retro-yellow mt-1.5 flex items-center gap-2 font-bold">
                  <span>ALIAS:</span>
                  <span className="text-retro-cyan">@{PERSONAL_INFO.handle}</span>
                </div>

                {/* Direct Technical Subtext */}
                <p className="mt-2.5 sm:mt-3 text-lg sm:text-xl lg:text-[22px] xl:text-[25px] text-retro-ink font-arcade leading-relaxed">
                  {PERSONAL_INFO.subtext}
                </p>
              </div>

              {/* Retro 8-bit Metric & Spec Grid - Centered & Equal Heights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="p-2.5 sm:p-3 bg-retro-surface border-2 border-retro-border shadow-[2px_2px_0px_#2C221E] flex flex-col items-center justify-center text-center">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-retro-green mb-1 shrink-0" />
                  <div className="text-[8px] sm:text-[9px] font-pixel text-retro-inkLight uppercase leading-tight text-center">
                    INGENIERÍA SOFTWARE
                  </div>
                  <div className="text-retro-green font-arcade font-bold text-base sm:text-lg lg:text-xl leading-tight mt-1 text-center">
                    Diseño modular y valor
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 bg-retro-surface border-2 border-retro-border shadow-[2px_2px_0px_#2C221E] flex flex-col items-center justify-center text-center">
                  <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-retro-cyan mb-1 shrink-0" />
                  <div className="text-[8px] sm:text-[9px] font-pixel text-retro-inkLight uppercase leading-tight text-center">
                    SISTEMAS &amp; ARQUITECTURA
                  </div>
                  <div className="text-retro-cyan font-arcade font-bold text-base sm:text-lg lg:text-xl leading-tight mt-1 text-center">
                    Distribuidos y concurrencia
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 bg-retro-surface border-2 border-retro-border shadow-[2px_2px_0px_#2C221E] flex flex-col items-center justify-center text-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-retro-yellow mb-1 shrink-0" />
                  <div className="text-[8px] sm:text-[9px] font-pixel text-retro-inkLight uppercase leading-tight text-center">
                    VISIÓN NEGOCIO &amp; ADE
                  </div>
                  <div className="text-retro-yellow font-arcade font-bold text-base sm:text-lg lg:text-xl leading-tight mt-1 text-center">
                    Estrategia y equipo
                  </div>
                </div>
              </div>

              {/* Pixel Social Links: GitHub & LinkedIn */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn px-5 py-2.5 sm:px-6 sm:py-3 bg-retro-greenPastel hover:bg-retro-greenLight text-retro-ink font-pixel text-xs sm:text-sm font-bold border-2 border-retro-border flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-retro-ink" />
                  <span>GITHUB /Leonin04</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn px-5 py-2.5 sm:px-6 sm:py-3 bg-retro-cyanPastel hover:bg-retro-cyanLight text-retro-ink font-pixel text-xs sm:text-sm font-bold border-2 border-retro-border flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-retro-ink" />
                  <span>LINKEDIN /david-bacas</span>
                </a>
              </div>
            </div>

            {/* Right Column: Retro Photo Frame & Operator HUD (Wider card, controlled height) */}
            <div className="shrink-0 flex flex-col items-center w-full max-w-[340px] sm:max-w-[380px] lg:w-[410px] xl:w-[440px] mx-auto lg:mx-0 mt-4 lg:mt-0">
              <div className="w-full bg-retro-surface pixel-box p-3.5 sm:p-4 border-3 border-retro-border">
                {/* Header bar of the photo frame */}
                <div className="w-full flex items-center justify-between pb-2 mb-2.5 border-b-2 border-retro-border font-pixel text-[10px] sm:text-xs text-retro-inkMuted px-1">
                  <span className="flex items-center gap-2 text-retro-green font-bold tracking-wider">
                    <span className="w-2 h-2 bg-retro-greenPastel inline-block border border-retro-border animate-pulse" />
                    PHOTO::OPERATOR
                  </span>
                  <span className="text-retro-yellow font-bold tracking-wider">5º CURSO</span>
                </div>

                {/* Photo frame - controlled height to avoid getting too tall while wide */}
                <div className="w-full h-56 sm:h-64 lg:h-[275px] xl:h-[290px] overflow-hidden border-2 border-retro-border bg-retro-panel relative group">
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
                <div className="w-full mt-2.5 pt-2.5 border-t-2 border-retro-border flex items-center justify-between font-pixel text-[10px] sm:text-xs text-retro-inkLight px-1">
                  <span className="tracking-wider font-bold">DAVID</span>
                  <span className="text-retro-cyan font-bold tracking-wider">UGR // INF+ADE</span>
                </div>
              </div>

              {/* Status telemetry box below photo */}
              <div className="w-full mt-3 p-3 bg-retro-surface pixel-box border-2 border-retro-border font-pixel text-[10px] sm:text-xs text-retro-inkMuted flex flex-col gap-2 shadow-[2px_2px_0px_#2C221E]">
                <div className="flex items-center justify-between px-1">
                  <span className="flex items-center gap-2 text-retro-inkLight tracking-wide">
                    <MapPin className="w-3.5 h-3.5 text-retro-yellow shrink-0" />
                    UBICACIÓN:
                  </span>
                  <span className="text-retro-yellow font-bold tracking-wider">GRANADA, ES</span>
                </div>
                <div className="flex items-center justify-between px-1">
                  <span className="flex items-center gap-2 text-retro-inkLight tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5 text-retro-green shrink-0" />
                    ENFOQUE:
                  </span>
                  <span className="text-retro-green font-bold tracking-wider">ING_SOFTWARE</span>
                </div>
                <div className="flex items-center justify-between px-1">
                  <span className="flex items-center gap-2 text-retro-inkLight tracking-wide">
                    <Terminal className="w-3.5 h-3.5 text-retro-cyan shrink-0" />
                    ENTORNO:
                  </span>
                  <span className="text-retro-cyan font-bold tracking-wider">LINUX / WINDOWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
