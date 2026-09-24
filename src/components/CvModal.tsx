import React, { useEffect } from 'react';
import { X, Printer, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, CV_DATA, SKILL_CATEGORIES } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-retro-border/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-retro-panel pixel-box border-4 border-retro-border flex flex-col overflow-hidden text-retro-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-retro-surface border-b-4 border-retro-border font-pixel text-xs">
          <div className="flex items-center gap-2 text-retro-ink font-bold">
            <span>[DOSSIER: {PERSONAL_INFO.handle.toUpperCase()}.DAT]</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="pixel-btn px-2.5 py-1 bg-retro-panel text-retro-ink font-pixel text-[9px] flex items-center gap-1.5 hover:bg-retro-surface"
            >
              <Printer className="w-3.5 h-3.5 text-retro-yellow" />
              <span>IMPRIMIR / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="pixel-btn p-1 bg-retro-redPastel text-retro-ink hover:bg-retro-redLight"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-arcade text-xl leading-relaxed print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b-2 border-retro-border pb-4">
            <h1 className="font-pixel text-xl sm:text-2xl text-retro-ink">{CV_DATA.name}</h1>
            <p className="font-pixel text-xs text-retro-green font-bold mt-2">{CV_DATA.title}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-base text-retro-inkMuted font-bold">
              <span>EMAIL: {PERSONAL_INFO.email}</span>
              <span>GITHUB: {PERSONAL_INFO.github}</span>
              <span>UBICACIÓN: {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="font-pixel text-xs text-retro-yellow font-bold uppercase mb-2">
              // RESUMEN TÉCNICO
            </h2>
            <p className="text-retro-ink">
              {CV_DATA.summary}
            </p>
          </div>

          {/* Competencies */}
          <div>
            <h2 className="font-pixel text-xs text-retro-cyan font-bold uppercase mb-3">
              // STACK &amp; CAPACIDADES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 bg-retro-surface border-2 border-retro-border">
                  <div className="font-pixel text-[10px] text-retro-ink font-bold mb-2">{cat.title}</div>
                  <div className="space-y-1 text-base text-retro-inkMuted">
                    {cat.skills.map((s) => (
                      <div key={s.name} className="flex items-start gap-1">
                        <span className="text-retro-green font-bold">&gt;</span>
                        <strong className="text-retro-ink">{s.name}:</strong>
                        <span className="truncate">{s.focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-pixel text-xs text-retro-green font-bold uppercase mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-retro-green" />
              <span>// TRAYECTORIA</span>
            </h2>
            <div className="space-y-4">
              {CV_DATA.experience.map((exp, idx) => (
                <div key={idx} className="p-3 bg-retro-surface border-2 border-retro-border">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-pixel text-xs text-retro-ink font-bold">{exp.role}</h3>
                    <span className="font-pixel text-[10px] text-retro-yellow font-bold">{exp.period}</span>
                  </div>
                  <div className="text-retro-cyan font-bold text-base mb-1">{exp.company}</div>
                  <p className="text-retro-inkMuted text-lg leading-normal">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-pixel text-xs text-retro-yellow font-bold uppercase mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-retro-yellow" />
              <span>// EDUCACIÓN</span>
            </h2>
            <div className="space-y-2">
              {CV_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-3 bg-retro-surface border-2 border-retro-border">
                  <div className="font-pixel text-xs text-retro-ink font-bold">{edu.degree}</div>
                  <div className="text-retro-inkMuted text-base">{edu.institution} ({edu.year})</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-retro-surface border-t-4 border-retro-border flex items-center justify-between font-pixel text-[10px] text-retro-inkMuted">
          <span>{PERSONAL_INFO.handle} // MADRID</span>
          <button
            onClick={onClose}
            className="pixel-btn px-3 py-1 bg-retro-panel text-retro-ink hover:bg-retro-surface"
          >
            [ CERRAR ]
          </button>
        </div>
      </div>
    </div>
  );
};
