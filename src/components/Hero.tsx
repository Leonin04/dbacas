import React from 'react';
import { ArrowRight, Github, Cpu, HardDrive, Shield, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-54px)] flex flex-col justify-center py-8 sm:py-10 border-b-4 border-retro-border bg-retro-bg">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Retro HUD Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 mb-8 bg-retro-surface pixel-box font-pixel text-[10px] text-retro-inkMuted">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-retro-greenPastel animate-pulse inline-block border border-retro-border" />
            <span className="text-retro-green font-bold">STATUS: READY_FOR_WORK</span>
          </div>
          <div className="flex items-center gap-4 text-retro-inkMuted">
            <span>LEVEL: SENIOR</span>
            <span className="text-retro-yellow hidden sm:inline font-bold">XP: 0x7FFF</span>
            <span className="text-retro-cyan font-bold">LOC: MADRID/REMOTE</span>
          </div>
        </div>

        {/* Main Hero Card with Pixel Art Aesthetic */}
        <div className="p-6 sm:p-10 bg-retro-panel pixel-box relative overflow-hidden">
          {/* Subtle 8-bit grid background */}
          <div className="absolute top-0 right-0 p-4 opacity-15 select-none pointer-events-none hidden md:block">
            <pre className="font-pixel text-[8px] text-retro-green leading-none">
{`
  ██████╗ ███████╗██╗   ██╗
  ██╔══██╗██╔════╝██║   ██║
  ██║  ██║█████╗  ██║   ██║
  ██║  ██║██╔══╝  ╚██╗ ██╔╝
  ██████╔╝███████╗ ╚████╔╝ 
  ╚═════╝ ╚══════╝  ╚═══╝  
`}
            </pre>
          </div>

          <div className="max-w-3xl">
            {/* Tag / Role */}
            <div className="inline-block px-2.5 py-1 mb-4 bg-retro-surface border-2 border-retro-border text-retro-green font-pixel text-[10px] font-bold">
              &gt; SOFTWARE_ENGINEER::SYSTEMS_AND_FULLSTACK
            </div>

            {/* Name / Title */}
            <h1 className="font-pixel text-2xl sm:text-4xl text-retro-ink tracking-wide leading-relaxed">
              {PERSONAL_INFO.name}
            </h1>

            <div className="font-pixel text-xs sm:text-sm text-retro-yellow mt-2 flex items-center gap-2 font-bold">
              <span>ALIAS:</span>
              <span className="text-retro-cyan">@{PERSONAL_INFO.handle}</span>
            </div>

            {/* Direct Technical Subtext */}
            <p className="mt-6 text-xl sm:text-2xl text-retro-inkMuted font-arcade leading-relaxed max-w-2xl">
              {PERSONAL_INFO.subtext}
            </p>

            {/* Retro 8-bit Metric & Spec Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 font-arcade text-lg">
              <div className="p-3 bg-retro-surface border-2 border-retro-border flex items-center gap-3">
                <Cpu className="w-5 h-5 text-retro-green shrink-0" />
                <div>
                  <div className="text-xs font-pixel text-retro-inkLight uppercase">LATENCY</div>
                  <div className="text-retro-green font-bold">Sub-millisecond &amp; SIMD</div>
                </div>
              </div>

              <div className="p-3 bg-retro-surface border-2 border-retro-border flex items-center gap-3">
                <HardDrive className="w-5 h-5 text-retro-cyan shrink-0" />
                <div>
                  <div className="text-xs font-pixel text-retro-inkLight uppercase">SYSTEMS</div>
                  <div className="text-retro-cyan font-bold">Distributed &amp; CRDT</div>
                </div>
              </div>

              <div className="p-3 bg-retro-surface border-2 border-retro-border flex items-center gap-3">
                <Shield className="w-5 h-5 text-retro-yellow shrink-0" />
                <div>
                  <div className="text-xs font-pixel text-retro-inkLight uppercase">MEMORY</div>
                  <div className="text-retro-yellow font-bold">Zero-Copy &amp; Lock-Free</div>
                </div>
              </div>
            </div>

            {/* Pixel CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="pixel-btn px-5 py-3 bg-retro-greenPastel hover:bg-retro-greenLight text-retro-ink font-pixel text-xs flex items-center gap-2"
              >
                <span>VER PROYECTOS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="pixel-btn px-5 py-3 bg-retro-yellowPastel hover:bg-retro-yellowLight text-retro-ink font-pixel text-xs border-2 border-retro-border flex items-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>STACK TÉCNICO</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn px-5 py-3 bg-retro-cyanPastel hover:bg-retro-cyanLight text-retro-ink font-pixel text-xs border-2 border-retro-border flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-retro-ink" />
                <span>GITHUB /Leonin04</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
