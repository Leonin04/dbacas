import React, { useState } from 'react';
import { Code2, Server, Globe, TrendingUp, Sparkles, HardDrive, Terminal, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface CartridgeInfo {
  id: number;
  shortTitle: string;
  romCode: string;
  subtitle: string;
  themeColor: string;
  accentBorder: string;
  badgeBg: string;
  badgeText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CARTRIDGES: CartridgeInfo[] = [
  {
    id: 0,
    shortTitle: "LENGUAJES CORE",
    romCode: "ROM-01",
    subtitle: "C++, Java, Ruby, Bash",
    themeColor: "text-retro-green",
    accentBorder: "border-retro-green",
    badgeBg: "bg-retro-greenPastel/30",
    badgeText: "text-retro-green",
    icon: Code2,
  },
  {
    id: 1,
    shortTitle: "ALGORITMOS & SISTEMAS",
    romCode: "ROM-02",
    subtitle: "Grafos, Distribuidos, C++",
    themeColor: "text-retro-cyan",
    accentBorder: "border-retro-cyan",
    badgeBg: "bg-retro-cyanPastel/30",
    badgeText: "text-retro-cyan",
    icon: Server,
  },
  {
    id: 2,
    shortTitle: "SOFTWARE & WEB",
    romCode: "ROM-03",
    subtitle: "Three.js, UML, Godot",
    themeColor: "text-retro-yellow",
    accentBorder: "border-retro-yellow",
    badgeBg: "bg-retro-yellowPastel/30",
    badgeText: "text-retro-yellow",
    icon: Globe,
  },
  {
    id: 3,
    shortTitle: "GESTIÓN & ADE",
    romCode: "ROM-04",
    subtitle: "Finanzas, Economía, Negocio",
    themeColor: "text-retro-red",
    accentBorder: "border-retro-red",
    badgeBg: "bg-retro-redPastel/30",
    badgeText: "text-retro-red",
    icon: TrendingUp,
  },
];

// Unified tag & proficiency level for each technology
const SKILL_METADATA: Record<string, { tag: string; level: string }> = {
  "C++": { tag: "Punteros & Memoria", level: "Dominio" },
  "Java": { tag: "POO & Sockets", level: "Medio-Alto" },
  "Ruby": { tag: "POO Dinámica", level: "Medio" },
  "JavaScript": { tag: "Web & Asincronía", level: "Competente" },
  "Bash / Shell": { tag: "Terminal & Scripts", level: "Soltura" },
  "PHP": { tag: "Backend & Servidor", level: "Básico" },
  "Algoritmos de Búsqueda": { tag: "Dijkstra & A*", level: "Avanzado" },
  "Estructuras de Datos": { tag: "Árboles & Grafos", level: "Dominio" },
  "Paradigmas Algorítmicos": { tag: "Greedy, D&C & Coste", level: "Avanzado" },
  "Sistemas Distribuidos": { tag: "Exclusión Mutua", level: "Avanzado" },
  "Three.js & Gráficos": { tag: "WebGL & 3D", level: "Competente" },
  "HTML5 & CSS3": { tag: "Estándares Web", level: "Avanzado" },
  "Ingeniería del Software": { tag: "UML & Requisitos", level: "Avanzado" },
  "Godot Engine": { tag: "Nodos & Escenas", level: "Básico" },
  "Análisis de Estados Financieros": { tag: "Balances & PyG", level: "Avanzado" },
  "Operaciones Financieras": { tag: "Valoración de Flujos", level: "Avanzado" },
  "Micro & Macroeconomía": { tag: "Mercados & Empresa", level: "Sólido" },
  "Trabajo en Equipo & Soft Skills": { tag: "Erasmus & Liderazgo", level: "Experiencia" },
};

export const TechStack: React.FC = () => {
  const [selectedCartridgeIndex, setSelectedCartridgeIndex] = useState<number>(0);
  const [inspectedSkillName, setInspectedSkillName] = useState<string | null>(null);

  const activeCategory = SKILL_CATEGORIES[selectedCartridgeIndex] || SKILL_CATEGORIES[0];
  const activeCartridge = CARTRIDGES[selectedCartridgeIndex] || CARTRIDGES[0];

  return (
    <section
      id="skills"
      className="relative min-h-[calc(100vh-56px)] lg:h-[calc(100vh-56px)] lg:max-h-[calc(100vh-56px)] snap-start flex flex-col justify-between py-4 sm:py-6 lg:py-3 border-b-4 border-retro-border bg-retro-bg overflow-visible lg:overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 flex flex-col justify-between h-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2 mb-2 sm:mb-2.5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-1.5 bg-retro-surface border-2 border-retro-border text-retro-yellow font-pixel text-[9px] sm:text-[10px] font-bold shadow-[2px_2px_0px_#2C221E]">
              <Sparkles className="w-3 h-3 text-retro-yellow" />
              <span>[STAGE 02] :: STACK TÉCNICO &amp; ESPECIALIDADES</span>
            </div>
            <h2 className="font-pixel text-lg sm:text-2xl text-retro-ink">
              STACK DE DESARROLLO
            </h2>
            <p className="font-arcade text-base sm:text-xl text-retro-inkMuted max-w-2xl leading-tight">
              Selecciona una categoría para cargar sus tecnologías y áreas de aplicación técnica.
            </p>
          </div>

          {/* Quick HUD indicator */}
          <div className="flex items-center gap-2 px-2.5 py-1 bg-retro-surface pixel-box font-pixel text-[9px] text-retro-inkMuted">
            <span className="w-2 h-2 bg-retro-greenPastel border border-retro-border animate-pulse inline-block" />
            <span className="font-bold text-retro-ink uppercase">4 CATEGORÍAS ACTIVAS</span>
          </div>
        </div>

        {/* Clean Retro Cartridges (Selector Tabs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-2.5">
          {CARTRIDGES.map((cart, idx) => {
            const isSelected = selectedCartridgeIndex === idx;
            const Icon = cart.icon;

            return (
              <button
                key={cart.id}
                onClick={() => {
                  setSelectedCartridgeIndex(idx);
                  setInspectedSkillName(null);
                }}
                className={`group relative text-left transition-all duration-150 focus:outline-none ${
                  isSelected
                    ? 'translate-y-0.5'
                    : 'hover:-translate-y-0.5 opacity-85 hover:opacity-100'
                }`}
                title={`Cargar categoría: ${SKILL_CATEGORIES[idx].title}`}
              >
                {/* Cartridge Top Notch */}
                <div className="w-12 mx-auto h-1 bg-retro-border rounded-t-sm" />

                {/* Cartridge Main Card */}
                <div
                  className={`p-2.5 sm:p-3 border-2 transition-all relative overflow-hidden ${
                    isSelected
                      ? `bg-retro-panel ${cart.accentBorder} shadow-[3px_3px_0px_#2C221E] ring-1 ring-retro-border`
                      : 'bg-retro-surface border-retro-border hover:bg-retro-panel hover:shadow-[2px_2px_0px_#2C221E]'
                  }`}
                >
                  {/* Top Bar: ROM Code & Status */}
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-retro-border/20 font-pixel text-[8px]">
                    <span className="text-retro-inkLight font-bold">{cart.romCode}</span>
                    {isSelected ? (
                      <span className="text-retro-green font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-retro-greenPastel inline-block border border-retro-border" />
                        ACTIVO
                      </span>
                    ) : (
                      <span className="text-retro-inkLight group-hover:text-retro-ink">
                        SELECCIONAR
                      </span>
                    )}
                  </div>

                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className={`p-1 border border-retro-border ${
                        isSelected ? cart.badgeBg : 'bg-retro-surfaceAlt/20'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? cart.themeColor : 'text-retro-ink'}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-pixel text-[9px] sm:text-[10px] font-bold text-retro-ink truncate leading-tight">
                        {cart.shortTitle}
                      </div>
                    </div>
                  </div>

                  {/* Subtitle / Key tech preview */}
                  <div className="font-arcade text-xs sm:text-sm text-retro-inkMuted truncate mt-0.5">
                    {cart.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Console Reader Panel (Contenedor Principal Limpio) */}
        <div className="bg-retro-panel pixel-box border-3 border-retro-border p-3 sm:p-4 relative overflow-visible lg:overflow-hidden flex-1 flex flex-col justify-between">
          {/* Console Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b-2 border-retro-border font-pixel text-[9px] sm:text-[10px]">
            <div className="flex items-center gap-2 text-retro-ink">
              <span className="p-0.5 bg-retro-surface border border-retro-border">
                <HardDrive className="w-3.5 h-3.5 text-retro-green" />
              </span>
              <span className="text-retro-green font-bold">SLOT_01:</span>
              <span className="text-retro-ink font-bold uppercase">
                {activeCategory.title}
              </span>
            </div>

            <div className="flex items-center gap-2 font-pixel text-[8px] text-retro-inkLight">
              <span className="px-1.5 py-0.5 bg-retro-surface border border-retro-border text-retro-ink font-bold">
                {activeCartridge.romCode} // {activeCategory.skills.length} TECNOLOGÍAS
              </span>
            </div>
          </div>

          {/* Unified, Calm Skill Cards Grid */}
          <div
            className={`grid gap-2.5 sm:gap-3 my-auto ${
              activeCategory.skills.length <= 4
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {activeCategory.skills.map((skill) => {
              const meta = SKILL_METADATA[skill.name] || {
                tag: "Especialidad",
                level: "Sólido",
              };
              const isInspected = inspectedSkillName === skill.name;

              return (
                <div
                  key={skill.name}
                  onClick={() => setInspectedSkillName(isInspected ? null : skill.name)}
                  className={`p-3 bg-retro-surface/40 hover:bg-retro-surface border transition-all cursor-pointer pixel-box flex flex-col justify-between ${
                    isInspected
                      ? 'border-retro-ink ring-2 ring-retro-ink shadow-[2px_2px_0px_#2C221E] bg-retro-surface'
                      : 'border-retro-border hover:shadow-[2px_2px_0px_#2C221E]'
                  }`}
                  title="Haz clic para inspeccionar detalles técnicos"
                >
                  <div>
                    {/* Card Header: Skill Name & Level */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="font-pixel text-[9px] sm:text-[10px] font-bold text-retro-ink flex items-start gap-1.5 min-w-0 flex-1 leading-snug">
                        <span className="w-1.5 h-1.5 bg-retro-ink inline-block shrink-0 mt-0.5" />
                        <span className="break-words">{skill.name}</span>
                      </div>

                      <span className="font-pixel text-[7px] sm:text-[8px] text-retro-inkLight font-bold uppercase shrink-0 px-1.5 py-0.5 bg-retro-panel border border-retro-border/40 whitespace-nowrap self-start">
                        {meta.level}
                      </span>
                    </div>

                    {/* Focus Description */}
                    <p className="font-arcade text-base sm:text-lg text-retro-inkMuted leading-snug">
                      {skill.focus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inspector Footer Bar */}
          <div className="mt-2.5 pt-2 border-t-2 border-retro-border font-arcade text-sm sm:text-base text-retro-inkMuted flex items-center justify-between gap-1.5">
            {inspectedSkillName ? (
              <div className="flex items-center gap-1.5 text-retro-ink min-w-0">
                <Check className="w-3.5 h-3.5 text-retro-green shrink-0" />
                <span className="font-pixel text-[8px] sm:text-[9px] text-retro-green font-bold shrink-0">&gt; DETALLE:</span>
                <span className="font-pixel text-[8px] sm:text-[9px] text-retro-ink font-bold shrink-0">{inspectedSkillName}</span>
                <span className="text-xs sm:text-sm text-retro-inkMuted truncate">
                  — {activeCategory.skills.find((s) => s.name === inspectedSkillName)?.focus}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-retro-inkLight text-xs sm:text-sm">
                <Terminal className="w-3.5 h-3.5 text-retro-yellow shrink-0" />
                <span>Haz clic sobre cualquier tecnología para ver su detalle de aplicación en el sistema.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
