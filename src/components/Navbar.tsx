import React, { useState } from 'react';
import { Github, FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'PROYECTOS', href: '#proyectos' },
    { name: 'STACK TÉCNICO', href: '#skills' },
    { name: 'SOBRE MÍ', href: '#sobre-mi' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-retro-surface/95 backdrop-blur-sm border-b-4 border-retro-border">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Monogram / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group text-retro-ink font-pixel text-xs tracking-wider"
        >
          <span className="inline-block p-1 bg-retro-greenPastel text-retro-ink font-pixel text-[10px] leading-none border-2 border-retro-border">
            &gt;_
          </span>
          <span className="text-retro-ink group-hover:text-retro-yellow transition-colors font-bold">
            {PERSONAL_INFO.handle}
          </span>
          <span className="text-retro-cyan text-[10px] hidden sm:inline">
            [SYS]
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-pixel text-[10px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-retro-inkMuted hover:text-retro-green hover:underline decoration-2 underline-offset-4 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCv}
            className="pixel-btn px-3 py-1.5 bg-retro-panel text-retro-ink font-pixel text-[10px] hover:bg-retro-surface flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-retro-yellow" />
            <span>VER CV</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn px-3 py-1.5 bg-retro-greenPastel text-retro-ink font-pixel text-[10px] flex items-center gap-1.5 hover:bg-retro-greenLight"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCv}
            className="pixel-btn px-2 py-1 bg-retro-panel text-retro-yellow font-pixel text-[9px]"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 border-2 border-retro-border bg-retro-panel text-retro-ink"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-retro-surface border-b-4 border-retro-border px-4 py-3 space-y-2 font-pixel text-[10px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-retro-inkMuted hover:text-retro-green"
            >
              &gt; {link.name}
            </a>
          ))}
          <div className="pt-2 border-t-2 border-retro-border flex items-center justify-between">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-green flex items-center gap-1 text-[10px]"
            >
              <Github className="w-3 h-3" />
              <span>GITHUB: {PERSONAL_INFO.handle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
