import React, { useEffect } from 'react';
import { X, Printer, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, CV_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import profilePic from '../data/yo.jpg';

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
      document.body.classList.add('cv-modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('cv-modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-retro-border/60 backdrop-blur-sm animate-fadeIn cv-modal-overlay">
      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-retro-panel pixel-box border-4 border-retro-border flex flex-col overflow-hidden text-retro-ink cv-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 bg-retro-surface border-b-4 border-retro-border font-pixel text-[10px] sm:text-xs no-print">
          <div className="flex items-center gap-2 text-retro-ink font-bold truncate">
            <span>[DOSSIER: {PERSONAL_INFO.handle.toUpperCase()}.DAT]</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => window.print()}
              className="pixel-btn px-2 sm:px-2.5 py-1 bg-retro-panel text-retro-ink font-pixel text-[8px] sm:text-[9px] flex items-center gap-1.5 hover:bg-retro-surface"
            >
              <Printer className="w-3.5 h-3.5 text-retro-yellow" />
              <span className="hidden sm:inline">IMPRIMIR / PDF</span>
              <span className="sm:hidden">PDF</span>
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
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-5 sm:space-y-6 font-arcade text-lg sm:text-xl leading-relaxed cv-modal-body">
          {/* Header */}
          <div className="border-b-2 border-retro-border pb-3 sm:pb-4 cv-print-header flex flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="font-pixel text-lg sm:text-2xl text-retro-ink cv-print-name">{CV_DATA.name}</h1>
              <p className="font-pixel text-[10px] sm:text-xs text-retro-green font-bold mt-1.5 sm:mt-2 cv-print-title">{CV_DATA.title}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-base text-retro-inkMuted font-bold cv-print-contacts">
                <span>EMAIL: {PERSONAL_INFO.email}</span>
                <span>LINKEDIN: {PERSONAL_INFO.linkedin.replace('https://www.', '').replace('https://', '')}</span>
                <span>GITHUB: {PERSONAL_INFO.github.replace('https://', '')}</span>
                <span>UBICACIÓN: {PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="shrink-0 cv-print-photo-container">
              <div className="p-1 bg-retro-surface border-2 border-retro-border pixel-box shadow-[2px_2px_0px_#2C221E] cv-print-photo-frame">
                <img
                  src={profilePic}
                  alt={CV_DATA.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover object-center border border-retro-border cv-print-photo"
                />
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="cv-print-break-avoid">
            <h2 className="font-pixel text-xs text-retro-yellow font-bold uppercase mb-2 cv-print-section-title">
              // RESUMEN TÉCNICO
            </h2>
            <p className="text-retro-ink cv-print-summary">
              {CV_DATA.summary}
            </p>
          </div>

          {/* Competencies */}
          <div className="cv-print-break-avoid">
            <h2 className="font-pixel text-xs text-retro-cyan font-bold uppercase mb-3 cv-print-section-title">
              // STACK &amp; CAPACIDADES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 cv-print-grid-2">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 bg-retro-surface border-2 border-retro-border cv-print-card">
                  <div className="font-pixel text-[10px] text-retro-ink font-bold mb-2 cv-print-card-title">{cat.title}</div>
                  <div className="space-y-1 text-base text-retro-inkMuted">
                    {cat.skills.map((s) => (
                      <div key={s.name} className="flex items-start gap-1 cv-print-skill-item">
                        <span className="text-retro-green font-bold print:hidden">&gt;</span>
                        <strong className="text-retro-ink cv-print-skill-name">{s.name}:</strong>
                        <span className="truncate print:whitespace-normal">{s.focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="cv-print-break-avoid">
            <h2 className="font-pixel text-xs text-retro-green font-bold uppercase mb-3 flex items-center gap-2 cv-print-section-title">
              <Briefcase className="w-4 h-4 text-retro-green print:hidden" />
              <span>// TRAYECTORIA</span>
            </h2>
            <div className="space-y-4 cv-print-exp-list">
              {CV_DATA.experience.map((exp, idx) => (
                <div key={idx} className="p-3 bg-retro-surface border-2 border-retro-border cv-print-card cv-print-item">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-pixel text-xs text-retro-ink font-bold cv-print-card-title">{exp.role}</h3>
                    <span className="font-pixel text-[10px] text-retro-yellow font-bold cv-print-card-period">{exp.period}</span>
                  </div>
                  <div className="text-retro-cyan font-bold text-base mb-1 cv-print-card-sub">{exp.company}</div>
                  <p className="text-retro-inkMuted text-lg leading-normal cv-print-card-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="cv-print-break-avoid">
            <h2 className="font-pixel text-xs text-retro-yellow font-bold uppercase mb-3 flex items-center gap-2 cv-print-section-title">
              <GraduationCap className="w-4 h-4 text-retro-yellow print:hidden" />
              <span>// EDUCACIÓN</span>
            </h2>
            <div className="space-y-2 cv-print-edu-list">
              {CV_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-3 bg-retro-surface border-2 border-retro-border cv-print-card cv-print-item">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-pixel text-xs text-retro-ink font-bold cv-print-card-title">{edu.degree}</div>
                    <span className="font-pixel text-[10px] text-retro-yellow font-bold cv-print-card-period">{edu.year}</span>
                  </div>
                  <div className="text-retro-inkMuted text-base cv-print-card-desc">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-retro-surface border-t-4 border-retro-border flex items-center justify-between font-pixel text-[10px] text-retro-inkMuted no-print">
          <span>{PERSONAL_INFO.handle} // UGR (GRANADA)</span>
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
