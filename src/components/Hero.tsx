import React from 'react';
import { ArrowRight, Github, Terminal, Cpu, HardDrive, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b-4 border-black bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Retro HUD Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 mb-8 bg-retro-surface pixel-box font-pixel text-[10px] text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-retro-green animate-pulse inline-block border border-black" />
            <span className="text-retro-green">STATUS: READY_FOR_WORK</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>LEVEL: SENIOR</span>
            <span className="text-retro-yellow hidden sm:inline">XP: 0x7FFF</span>
            <span className="text-retro-cyan">LOC: MADRID/REMOTE</span>
          </div>
        </div>

        {/* Main Hero Card with Pixel Art Aesthetic */}
        <div className="p-6 sm:p-10 bg-retro-panel pixel-box relative overflow-hidden">
          {/* Subtle 8-bit grid background */}
          <div className="absolute top-0 right-0 p-4 opacity-10 select-none pointer-events-none hidden md:block">
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
            <div className="inline-block px-2.5 py-1 mb-4 bg-black border-2 border-retro-green text-retro-green font-pixel text-[10px]">
              &gt; SOFTWARE_ENGINEER::SYSTEMS_AND_FULLSTACK
            </div>

            {/* Name / Title */}
            <h1 className="font-pixel text-2xl sm:text-4xl text-white tracking-wide leading-relaxed">
              {PERSONAL_INFO.name}
            </h1>

            <div className="font-pixel text-xs sm:text-sm text-retro-yellow mt-2 flex items-center gap-2">
              <span>ALIAS:</span>
              <span className="text-retro-cyan">@{PERSONAL_INFO.handle}</span>
            </div>

            {/* Direct Technical Subtext */}
            <p className="mt-6 text-xl sm:text-2xl text-zinc-300 font-arcade leading-relaxed max-w-2xl">
              {PERSONAL_INFO.subtext}
            </p>

            {/* Retro 8-bit Metric & Spec Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 font-arcade text-lg">
              <div className="p-3 bg-black/60 border-2 border-zinc-700 flex items-center gap-3">
                <Cpu className="w-5 h-5 text-retro-green shrink-0" />
                <div>
                  <div className="text-xs font-pixel text-zinc-500 uppercase">LATENCY</div>
                  <div className="text-retro-green font-bold">Sub-millisecond &amp; SIMD</div>
                </div>
              </div>

              <div className="p-3 bg-black/60 border-2 border-zinc-700 flex items-center gap-3">
                <HardDrive className="w-5 h-5 text-retro-cyan shrink-0" />
                <div>
                  <div className="text-xs font-pixel text-zinc-500 uppercase">SYSTEMS</div>
                  <div className="text-retro-cyan font-bold">Distributed &amp; CRDT</div>
                </div>
              </div>

              <div className="p-3 bg-black/60 border-2 border-zinc-700 flex items-center gap-3">
                <Shield className="w-5 h-5 text-retro-yellow shrink-0" />
                <div>
                  <div className="text-xs font-pixel text-zinc-500 uppercase">MEMORY</div>
                  <div className="text-retro-yellow font-bold">Zero-Copy &amp; Lock-Free</div>
                </div>
              </div>
            </div>

            {/* Pixel CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="pixel-btn px-5 py-3 bg-retro-green text-black font-pixel text-xs flex items-center gap-2"
              >
                <span>VER PROYECTOS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn px-5 py-3 bg-retro-surface text-white font-pixel text-xs border-2 border-retro-cyan flex items-center gap-2 hover:bg-zinc-800"
              >
                <Github className="w-4 h-4 text-retro-cyan" />
                <span>GITHUB /Leonin04</span>
              </a>

              <a
                href="#terminal"
                className="pixel-btn px-4 py-3 bg-black text-retro-yellow font-pixel text-xs border-2 border-retro-yellow flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <span>BASH SHELL &gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
