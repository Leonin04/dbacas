import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const categories = ['Todos', 'Sistemas', 'Full-Stack', 'Gráficos / Tooling', 'Infraestructura'];

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

  const filteredProjects = filter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const maxIndex = Math.max(0, filteredProjects.length - visibleCount);

  // Clamp index when filter or visible count changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter, visibleCount]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      id="proyectos"
      className="relative min-h-[calc(100vh-54px)] flex flex-col justify-center py-6 sm:py-8 border-b-4 border-retro-border bg-retro-bg overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-between flex-1">
        {/* Section Header (Clean: Title & Category Filters only) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-3">
          <div>
            <div className="text-retro-green font-pixel text-[10px] sm:text-xs mb-1 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 bg-retro-greenPastel border border-retro-border inline-block" />
              <span>[STAGE 01] :: INGENIERÍA &amp; CASOS DE ESTUDIO</span>
            </div>
            <h2 className="font-pixel text-lg sm:text-2xl text-retro-ink">
              PROYECTOS DESTACADOS
            </h2>
            <p className="font-arcade text-lg sm:text-xl text-retro-inkMuted max-w-2xl leading-tight">
              Arquitecturas reales con foco en throughput, eficiencia de memoria y estabilidad bajo carga.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-retro-surface pixel-box">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`pixel-btn px-2.5 py-1 font-pixel text-[8px] sm:text-[9px] uppercase transition-all ${
                  filter === cat
                    ? 'bg-retro-greenPastel text-retro-ink font-bold shadow-[1px_1px_0px_#2C221E]'
                    : 'bg-retro-panel text-retro-inkMuted hover:text-retro-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Viewport & Slider */}
        <div className="relative w-full overflow-hidden py-1 my-auto">
          {filteredProjects.length === 0 ? (
            <div className="p-8 text-center bg-retro-panel pixel-box font-arcade text-xl text-retro-inkMuted">
              No hay proyectos en esta categoría por ahora.
            </div>
          ) : (
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  style={{ width: `${100 / visibleCount}%` }}
                  className="flex-shrink-0 px-2 sm:px-2.5"
                >
                  <article className="bg-retro-panel pixel-box p-4 sm:p-5 flex flex-col justify-between h-full hover:border-retro-cyan hover:shadow-[5px_5px_0px_#2C221E] transition-all relative">
                    <div>
                      {/* Top Header: Category Tag & Source/Demo Links */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-retro-yellowLight border border-retro-border text-retro-yellow font-pixel text-[8px] uppercase font-bold">
                          &gt; {project.category}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pixel-btn p-1 bg-retro-surface border border-retro-border text-retro-ink hover:bg-retro-greenPastel hover:text-retro-ink transition-colors"
                            title="Código fuente en GitHub"
                            aria-label={`Ver repo de ${project.title}`}
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="pixel-btn p-1 bg-retro-surface border border-retro-border text-retro-ink hover:bg-retro-cyanPastel hover:text-retro-ink transition-colors"
                              title="Ver demo o benchmarks"
                              aria-label={`Ver demo de ${project.title}`}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-pixel text-sm sm:text-base text-retro-ink mb-2 leading-snug">
                        {project.title}
                      </h3>

                      {/* Technical Challenge & Solution */}
                      <div className="space-y-1.5 font-arcade text-base sm:text-lg leading-snug">
                        <div className="p-2 sm:p-2.5 bg-retro-surface/80 border border-retro-border/30">
                          <span className="font-pixel text-[8px] text-retro-red uppercase block mb-0.5 font-bold">
                            [RETO TÉCNICO]
                          </span>
                          <p className="text-retro-ink line-clamp-2">
                            {project.challenge}
                          </p>
                        </div>

                        <div className="p-2 sm:p-2.5 bg-retro-surface/80 border border-retro-border/30">
                          <span className="font-pixel text-[8px] text-retro-cyan uppercase block mb-0.5 font-bold">
                            [ARQUITECTURA &amp; SOLUCIÓN]
                          </span>
                          <p className="text-retro-inkMuted line-clamp-2">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Tech Stack badges & Metrics */}
                    <div className="mt-3 pt-2.5 border-t-2 border-retro-border space-y-2">
                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 bg-retro-surface border border-retro-border font-pixel text-[8px] text-retro-green font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-1 py-0.5 font-pixel text-[7px] text-retro-inkMuted">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-retro-surface border-2 border-retro-border font-arcade text-center">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="p-0.5">
                            <div className="text-[9px] font-pixel text-retro-inkLight uppercase truncate">
                              {metric.label}
                            </div>
                            <div className="text-sm sm:text-base font-bold text-retro-yellow flex items-center justify-center gap-1 mt-0.5">
                              <Activity className="w-2.5 h-2.5 text-retro-yellow shrink-0" />
                              <span className="truncate">{metric.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Carousel Controls: Arrows underneath projects + Dots & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-retro-border/20 font-pixel text-[9px] text-retro-inkMuted">
          {/* Left: Pagination Dots */}
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] text-retro-inkLight mr-1">VISTA:</span>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 border border-retro-border transition-all ${
                  currentIndex === idx
                    ? 'bg-retro-greenPastel scale-110 shadow-[1px_1px_0px_#2C221E]'
                    : 'bg-retro-panel hover:bg-retro-surface'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>

          {/* Center/Right: Navigation Arrows with Retro Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="pixel-btn px-3 py-1.5 bg-retro-panel text-retro-ink hover:bg-retro-yellowPastel disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1 font-pixel text-[9px]"
              aria-label="Proyecto anterior"
              title="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>ANTERIOR</span>
            </button>

            <div className="px-3 py-1.5 bg-retro-surface pixel-box font-pixel text-[9px] text-retro-ink font-bold whitespace-nowrap">
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
              className="pixel-btn px-3 py-1.5 bg-retro-panel text-retro-ink hover:bg-retro-yellowPastel disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1 font-pixel text-[9px]"
              aria-label="Proyecto siguiente"
              title="Siguiente"
            >
              <span>SIGUIENTE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
