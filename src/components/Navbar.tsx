import React, { useState } from 'react';
import { Github, FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'PROYECTOS', href: '#proyectos' },
    { name: 'STACK TÉCNICO', href: '#skills' },
    { name: 'MÁS SOBRE MÍ', href: '#sobre-mi' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      if (targetId === 'inicio') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 56;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.round(elementTop - headerHeight),
          behavior: 'smooth',
        });
      }
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-retro-surface/95 backdrop-blur-sm border-b-4 border-retro-border">
      <div className="max-w-6xl w-full mx-auto px-4 h-14 flex items-center justify-between relative">
        {/* Monogram / Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
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
              onClick={(e) => handleNavClick(e, link.href)}
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
            className="pixel-btn px-2.5 py-1 bg-retro-panel text-retro-yellow font-pixel text-[9px] font-bold"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 border-2 border-retro-border bg-retro-panel text-retro-ink pixel-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Absolute overlay) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-retro-surface border-b-4 border-retro-border px-5 py-4 space-y-3 font-pixel text-xs shadow-[0px_4px_0px_#2C221E] z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 text-retro-ink hover:text-retro-green transition-colors border-b border-retro-border/20 last:border-b-0"
            >
              &gt; {link.name}
            </a>
          ))}
          <div className="pt-2 border-t-2 border-retro-border flex items-center justify-between text-[10px]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-green font-bold flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-cyan font-bold flex items-center gap-1.5"
            >
              <span>LINKEDIN &gt;</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
