import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Film } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProjects } from '../data/portfolioData';
import { getTranslations } from '../data/translations';

// Vite dynamic glob import for all videos in src/data/proyectos
const videoModules = import.meta.glob<string>('../data/proyectos/*/*.{mp4,webm,mov,MP4,WEBM,MOV}', {
  eager: true,
  import: 'default',
});

const getVideoUrl = (folderName?: string): string | undefined => {
  if (!folderName) return undefined;
  const match = Object.entries(videoModules).find(([path]) =>
    path.toLowerCase().includes(`/proyectos/${folderName.toLowerCase()}/`)
  );
  return match ? match[1] : undefined;
};

type CategoryKey = 'all' | 'design' | 'implementation';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const projects = getProjects(language);
  const t = getTranslations(language);

  const [activeFilterKey, setActiveFilterKey] = useState<CategoryKey>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: 'all', label: t.projects.categories.all },
    { key: 'design', label: t.projects.categories.design },
    { key: 'implementation', label: t.projects.categories.implementation },
  ];

  // Responsive items visible calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (activeFilterKey === 'all') return true;
    if (activeFilterKey === 'design') {
      return p.category === 'Diseño' || p.category === 'Design';
    }
    if (activeFilterKey === 'implementation') {
      return p.category === 'Implementación' || p.category === 'Implementation';
    }
    return true;
  });

  const maxIndex = Math.max(0, filteredProjects.length - visibleCount);

  // Clamp index when filter or visible count changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilterKey, visibleCount]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      id="proyectos"
      className="relative min-h-[calc(100vh-56px)] lg:h-[calc(100vh-56px)] lg:max-h-[calc(100vh-56px)] snap-start flex flex-col justify-between py-4 sm:py-6 lg:py-3 border-b-4 border-retro-border bg-retro-bgAlt overflow-visible lg:overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 flex flex-col justify-between h-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5 sm:mb-5 lg:mb-4 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3.5 sm:mb-4.5 bg-retro-panel border-2 border-retro-border text-retro-green font-pixel text-[8px] sm:text-[9px] font-bold shadow-[2px_2px_0px_#2C221E]">
              <span className="w-2 h-2 bg-retro-greenPastel border border-retro-border inline-block animate-pulse" />
              <span>{t.projects.stage}</span>
            </div>
            <h2 className="font-pixel text-base sm:text-xl text-retro-ink leading-tight">
              {t.projects.title}
            </h2>
            <p className="font-arcade text-sm sm:text-base lg:text-lg text-[#3D3028] font-bold mt-1.5 max-w-2xl leading-snug">
              {t.projects.subtitle}
            </p>
          </div>

          {/* 3 Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1 p-0.5 bg-retro-surfaceAlt pixel-box shrink-0 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilterKey(cat.key)}
                className={`pixel-btn px-2.5 py-0.5 font-pixel text-[8px] sm:text-[9px] uppercase transition-all ${
                  activeFilterKey === cat.key
                    ? 'bg-retro-greenPastel text-retro-ink font-bold shadow-[1px_1px_0px_#2C221E]'
                    : 'bg-retro-panel text-retro-inkMuted hover:text-retro-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Viewport & Slider */}
        <div className="relative w-full overflow-hidden my-auto py-0.5">
          {filteredProjects.length === 0 ? (
            <div className="p-6 text-center bg-retro-panel pixel-box font-arcade text-lg text-retro-inkMuted">
              {t.projects.noProjects}
            </div>
          ) : (
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {filteredProjects.map((project) => {
                const videoUrl = getVideoUrl(project.videoFolder);

                return (
                  <div
                    key={project.id}
                    style={{ width: `${100 / visibleCount}%` }}
                    className="flex-shrink-0 px-2 sm:px-2.5"
                  >
                    <article className="bg-retro-panel pixel-box p-2.5 sm:p-3 flex flex-col justify-between h-full hover:border-retro-cyan hover:shadow-[4px_4px_0px_#2C221E] transition-all relative">
                      <div>
                        {/* Top Header: Category Tag & Source/Demo Links */}
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="px-2 py-0.5 bg-retro-yellowLight border border-retro-border text-retro-yellow font-pixel text-[8px] uppercase font-bold">
                            &gt; {project.category}
                          </span>

                          <div className="flex items-center gap-1.5">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="pixel-btn p-1 bg-retro-surface border border-retro-border text-retro-ink hover:bg-retro-greenPastel hover:text-retro-ink transition-colors"
                              title={t.projects.sourceCodeTitle}
                              aria-label={`${t.projects.sourceCodeTitle}: ${project.title}`}
                            >
                              <Github className="w-3.5 h-3.5" />
                            </a>
                            {project.demoUrl && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pixel-btn p-1 bg-retro-surface border border-retro-border text-retro-ink hover:bg-retro-cyanPastel hover:text-retro-ink transition-colors"
                                title={t.projects.demoTitle}
                                aria-label={`${t.projects.demoTitle}: ${project.title}`}
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Project Title */}
                        <h3 className="font-pixel text-sm sm:text-base text-retro-ink mb-1.5 leading-tight font-bold">
                          {project.title}
                        </h3>

                        {/* Stacked Sub-Cards: Reto Técnico y Funcionalidad */}
                        <div className="space-y-1 sm:space-y-1.5 mb-1.5">
                          {/* Sub-Card 1: Reto Técnico */}
                          <div className="p-1.5 bg-retro-surface/90 border border-retro-border/40 font-arcade text-xs sm:text-sm leading-snug shadow-[1px_1px_0px_#2C221E]">
                            <span className="font-pixel text-[7px] sm:text-[8px] text-retro-red uppercase block mb-0.5 font-bold">
                              {t.projects.techChallenge}
                            </span>
                            <p className="text-retro-ink line-clamp-2 leading-tight">
                              {project.challenge}
                            </p>
                          </div>

                          {/* Sub-Card 2: Funcionalidad */}
                          <div className="p-1.5 bg-retro-surface/90 border border-retro-border/40 font-arcade text-xs sm:text-sm leading-snug shadow-[1px_1px_0px_#2C221E]">
                            <span className="font-pixel text-[7px] sm:text-[8px] text-retro-cyan uppercase block mb-0.5 font-bold">
                              {t.projects.functionality}
                            </span>
                            <p className="text-retro-ink line-clamp-2 leading-tight">
                              {project.functionality || project.challenge}
                            </p>
                          </div>
                        </div>

                        {/* Video Demo Player - Responsive aspect ratio */}
                        <div className="relative w-full aspect-video max-h-36 sm:max-h-40 md:max-h-44 bg-[#1C1613] border-2 border-retro-border overflow-hidden shadow-[2px_2px_0px_#2C221E] my-1">
                          {videoUrl ? (
                            <video
                              src={videoUrl}
                              controls
                              playsInline
                              muted
                              loop
                              preload="metadata"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-[#251D18] text-retro-sand font-pixel relative select-none">
                              {/* CRT Scanline Effect */}
                              <div className="absolute inset-0 bg-scanlines opacity-25 pointer-events-none" />
                              <div className="w-7 h-7 border-2 border-retro-yellowPastel flex items-center justify-center mb-1 bg-retro-surface/30">
                                <Film className="w-3.5 h-3.5 text-retro-yellowPastel animate-pulse" />
                              </div>
                              <span className="text-[8px] sm:text-[9px] text-retro-yellow font-bold uppercase tracking-wider">
                                {t.projects.videoLoading}
                              </span>
                              <span className="text-[7px] sm:text-[8px] text-retro-sandLight font-arcade mt-0.5 max-w-[200px] truncate">
                                data/proyectos/{project.videoFolder || project.id}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bottom: Tech Stack badges */}
                      <div className="mt-1.5 pt-1.5 border-t-2 border-retro-border">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-1.5 py-0.5 bg-retro-surface border border-retro-border font-pixel text-[7px] sm:text-[8px] text-retro-green font-bold shadow-[1px_1px_0px_#2C221E]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Carousel Controls: Arrows underneath projects + Dots & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t-2 border-retro-border/25 font-pixel text-[8px] sm:text-[9px] text-retro-inkMuted shrink-0">
          {/* Left: Pagination Dots */}
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] text-retro-inkLight mr-1">{t.projects.viewLabel}</span>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 border border-retro-border transition-all ${
                  currentIndex === idx
                    ? 'bg-retro-greenPastel scale-110 shadow-[1px_1px_0px_#2C221E]'
                    : 'bg-retro-panel hover:bg-retro-surfaceAlt'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Center/Right: Navigation Arrows with Retro Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="pixel-btn px-2.5 py-1 bg-retro-panel text-retro-ink hover:bg-retro-yellowPastel disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1 font-pixel text-[8px] sm:text-[9px]"
              aria-label={t.projects.prev}
              title={t.projects.prev}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>{t.projects.prev}</span>
            </button>

            <div className="px-2.5 py-1 bg-retro-panel border-2 border-retro-border font-pixel text-[8px] sm:text-[9px] text-retro-ink font-bold whitespace-nowrap shadow-[2px_2px_0px_#2C221E]">
              {filteredProjects.length > 0 ? (
                <span>
                  {currentIndex + 1}-{Math.min(currentIndex + visibleCount, filteredProjects.length)} / {filteredProjects.length}
                </span>
              ) : (
                <span>0/0</span>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="pixel-btn px-2.5 py-1 bg-retro-panel text-retro-ink hover:bg-retro-yellowPastel disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1 font-pixel text-[8px] sm:text-[9px]"
              aria-label={t.projects.next}
              title={t.projects.next}
            >
              <span>{t.projects.next}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


