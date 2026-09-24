import React, { useState } from 'react';
import { Code2, Server, Globe, Cpu, ChevronRight, Sparkles, HardDrive } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface CartridgeInfo {
  id: number;
  shortTitle: string;
  romCode: string;
  subtitle: string;
  accentColor: string;
  bgClass: string;
  labelBgClass: string;
  borderClass: string;
  textClass: string;
  icon: React.ComponentType<{ className?: string }>;
  chipCount: string;
}

const CARTRIDGE_CONFIG: CartridgeInfo[] = [
  {
    id: 0,
    shortTitle: "LENGUAJES",
    romCode: "ROM-01",
    subtitle: "Bajo nivel & Compilados",
    accentColor: "#4A7C59",
    bgClass: "bg-[#E2EFE4]",
    labelBgClass: "bg-[#9EC5A6]",
    borderClass: "border-[#3D784D]",
    textClass: "text-[#1E4D2B]",
    icon: Code2,
    chipCount: "6 TECS",
  },
  {
    id: 1,
    shortTitle: "BACKEND & SISTEMAS",
    romCode: "ROM-02",
    subtitle: "Concurrencia & Datos",
    accentColor: "#3E7596",
    bgClass: "bg-[#E0EEF5]",
    labelBgClass: "bg-[#9EC4D7]",
    borderClass: "border-[#306C8A]",
    textClass: "text-[#1A455D]",
    icon: Server,
    chipCount: "4 TECS",
  },
  {
    id: 2,
    shortTitle: "FRONTEND & WEB",
    romCode: "ROM-03",
    subtitle: "React & Tooling Moderno",
    accentColor: "#A8731F",
    bgClass: "bg-[#FCF3DC]",
    labelBgClass: "bg-[#EFC777]",
    borderClass: "border-[#966718]",
    textClass: "text-[#523508]",
    icon: Globe,
    chipCount: "4 TECS",
  },
  {
    id: 3,
    shortTitle: "INFRAESTRUCTURA",
    romCode: "ROM-04",
    subtitle: "Linux, CI/CD & eBPF",
    accentColor: "#B84C3C",
    bgClass: "bg-[#FAE3DF]",
    labelBgClass: "bg-[#E89C90]",
    borderClass: "border-[#9C3E30]",
    textClass: "text-[#571C13]",
    icon: Cpu,
    chipCount: "4 TECS",
  },
];

// Individual skill tags and badges
const SKILL_DETAILS: Record<string, { tag: string; level: string; colorClass: string }> = {
  "C++ (17/20)": { tag: "SYS_CORE", level: "EXPERTO", colorClass: "bg-[#E6DEF8] text-[#2C1F5A] border-[#6754A8]" },
  "TypeScript": { tag: "STRICT_TYPES", level: "SENIOR", colorClass: "bg-[#D6EEFC] text-[#143B5E] border-[#3A80B8]" },
  "Python": { tag: "AUTOMATION", level: "AVANZADO", colorClass: "bg-[#FCF2CE] text-[#543F08] border-[#B08920]" },
  "Go": { tag: "CONCURRENCY", level: "SENIOR", colorClass: "bg-[#D2F5EE] text-[#10473E] border-[#328F7F]" },
  "Rust": { tag: "ZERO_COPY", level: "AVANZADO", colorClass: "bg-[#FCE1D2] text-[#5A280D] border-[#BD6434]" },
  "SQL": { tag: "DATA_QUERY", level: "SENIOR", colorClass: "bg-[#D7F5E2] text-[#134725] border-[#3B9258]" },
  "APIs & Protocolos": { tag: "NETWORKING", level: "ESPECIALISTA", colorClass: "bg-[#D2F5F0] text-[#114945] border-[#2F938C]" },
  "Bases de Datos": { tag: "PERSISTENCE", level: "SENIOR", colorClass: "bg-[#F7DCF0] text-[#521C45] border-[#A34E8F]" },
  "Concurrencia": { tag: "LOCK_FREE", level: "EXPERTO", colorClass: "bg-[#FCECC4] text-[#593C08] border-[#B88220]" },
  "Event-Driven": { tag: "STREAMING", level: "SENIOR", colorClass: "bg-[#FDE1DC] text-[#5E2015] border-[#BD5442]" },
  "React 18+": { tag: "UI_FRAMEWORK", level: "SENIOR", colorClass: "bg-[#D5EFFF] text-[#123E5A] border-[#3387B8]" },
  "Vite & Tooling": { tag: "BUNDLER", level: "EXPERTO", colorClass: "bg-[#EDDEF9] text-[#3E1B64] border-[#8050B8]" },
  "Tailwind CSS": { tag: "DESIGN_SYS", level: "EXPERTO", colorClass: "bg-[#D8F6F0] text-[#124940] border-[#349484]" },
  "APIs Web Nativas": { tag: "WEB_STANDARDS", level: "AVANZADO", colorClass: "bg-[#FDE5D8] text-[#5C270E] border-[#BD6338]" },
  "Docker & Containers": { tag: "CONTAINERS", level: "SENIOR", colorClass: "bg-[#D8EAFD] text-[#163863] border-[#3876BF]" },
  "Linux / POSIX": { tag: "KERNEL_OPS", level: "EXPERTO", colorClass: "bg-[#FCF5C8] text-[#544309] border-[#AD8F1E]" },
  "CI/CD & Git": { tag: "AUTOMATION", level: "SENIOR", colorClass: "bg-[#FDE2CF] text-[#5E2B0C] border-[#BF612A]" },
  "Observabilidad": { tag: "TELEMETRY", level: "SENIOR", colorClass: "bg-[#D8F6E4] text-[#144726] border-[#379459]" },
};

export const TechStack: React.FC = () => {
  const [selectedCartridgeIndex, setSelectedCartridgeIndex] = useState<number>(0);
  const [inspectedSkillName, setInspectedSkillName] = useState<string | null>(null);

  const activeCategory = SKILL_CATEGORIES[selectedCartridgeIndex] || SKILL_CATEGORIES[0];
  const activeCartridgeConfig = CARTRIDGE_CONFIG[selectedCartridgeIndex] || CARTRIDGE_CONFIG[0];

  return (
    <section
      id="skills"
      className="relative min-h-[calc(100vh-54px)] flex flex-col justify-center py-4 sm:py-6 border-b-4 border-retro-border bg-retro-bg overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-between flex-1">
        {/* Section Header - Compact */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 mb-2.5">
          <div>
            <div className="text-retro-yellow font-pixel text-[9px] sm:text-[10px] mb-1 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-retro-yellow" />
              <span>[STAGE 02] :: CONJUNTOS DE DESARROLLO &amp; CARTUCHOS</span>
            </div>
            <h2 className="font-pixel text-base sm:text-xl text-retro-ink">
              STACK DE DESARROLLO
            </h2>
            <p className="font-arcade text-base sm:text-lg text-retro-inkMuted max-w-2xl leading-tight">
              Selecciona un cartucho de especialidad para cargarlo en el lector de consola y ver las tecnologías que domino.
            </p>
          </div>

          {/* Quick HUD specs pill */}
          <div className="flex items-center gap-2 px-2 py-0.5 bg-retro-surface pixel-box font-pixel text-[8px] sm:text-[9px] text-retro-inkMuted">
            <span className="w-2 h-2 bg-retro-greenPastel border border-retro-border animate-pulse inline-block" />
            <span className="font-bold text-retro-ink">4 CARTUCHOS DISPONIBLES</span>
          </div>
        </div>

        {/* The 4 Physical 8-bit Cartridges (Conjuntos) - Sleek, Shorter & Compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-2.5">
          {CARTRIDGE_CONFIG.map((cart, idx) => {
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
                    ? 'translate-y-1 scale-[1.01]'
                    : 'hover:-translate-y-0.5 hover:brightness-105 opacity-90 hover:opacity-100'
                }`}
                title={`Cargar cartucho: ${SKILL_CATEGORIES[idx].title}`}
              >
                {/* 8-bit Cartridge Bevel Top Notch */}
                <div className="w-10 mx-auto h-0.5 bg-retro-border flex items-center justify-center gap-0.5">
                  <span className="w-1.5 h-0.5 bg-retro-bg" />
                  <span className="w-1.5 h-0.5 bg-retro-bg" />
                </div>

                {/* Main Cartridge Body */}
                <div
                  className={`pixel-box p-2 sm:p-2.5 border-2 bg-retro-panel relative overflow-hidden transition-all ${
                    isSelected
                      ? `ring-2 ring-retro-ink shadow-[3px_3px_0px_#2C221E] ${cart.borderClass}`
                      : 'border-retro-border hover:shadow-[2px_2px_0px_#2C221E]'
                  }`}
                >
                  {/* Cartridge Grip Ribs */}
                  <div className="flex justify-between items-center pb-0.5 mb-0.5 border-b border-retro-border/20 font-pixel text-[6px] text-retro-inkLight">
                    <span className="font-bold">{cart.romCode}</span>
                    <div className="flex gap-0.5 opacity-70">
                      <span className="w-0.5 h-1.5 bg-retro-border" />
                      <span className="w-0.5 h-1.5 bg-retro-border" />
                      <span className="w-0.5 h-1.5 bg-retro-border" />
                    </div>
                  </div>

                  {/* Illustrated Cartridge Label */}
                  <div
                    className={`${cart.labelBgClass} ${cart.borderClass} border p-1 sm:p-1.5 text-center pixel-box mb-1 transition-colors`}
                  >
                    <div className="flex items-center justify-center mb-0.5">
                      <div className="p-0.5 bg-white/70 border border-retro-border">
                        <Icon className="w-3 h-3 text-retro-ink" />
                      </div>
                    </div>
                    <div className={`font-pixel text-[9px] sm:text-[10px] font-bold leading-tight ${cart.textClass}`}>
                      {cart.shortTitle}
                    </div>
                    <div className="font-arcade text-[11px] sm:text-xs text-retro-inkMuted truncate leading-none mt-0.5">
                      {cart.subtitle}
                    </div>
                  </div>

                  {/* Cartridge Status Strip */}
                  <div className="flex items-center justify-between font-pixel text-[7px] sm:text-[8px]">
                    <span className="text-retro-inkLight">{cart.chipCount}</span>
                    {isSelected ? (
                      <span className="text-retro-green font-bold flex items-center gap-1 bg-retro-surface px-1 py-0.2 border border-retro-border">
                        <span className="w-1 h-1 bg-retro-green inline-block animate-ping" />
                        CARGADO
                      </span>
                    ) : (
                      <span className="text-retro-inkMuted group-hover:text-retro-ink underline decoration-dashed">
                        INSERTAR &gt;
                      </span>
                    )}
                  </div>

                  {/* Bottom Gold Pins */}
                  <div className="pt-1 mt-1 border-t border-retro-border/20 flex justify-center gap-0.5 opacity-80">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-1 h-1 ${isSelected ? 'bg-retro-greenPastel' : 'bg-retro-yellowPastel'} border border-retro-border/30`}
                      />
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Global Cartridge Reader Console (El Lector) - Sleek & Ultra-Compact */}
        <div className="bg-retro-panel pixel-box border-3 border-retro-border p-3 sm:p-3.5 relative overflow-hidden flex-1 flex flex-col justify-between">
          {/* Lector Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 mb-2 border-b-2 border-retro-border font-pixel text-[9px] sm:text-[10px]">
            <div className="flex items-center gap-2 text-retro-ink font-bold">
              <span className="p-0.5 bg-retro-surface border border-retro-border">
                <HardDrive className="w-3 h-3 text-retro-green" />
              </span>
              <span className="text-retro-green font-pixel text-[9px] sm:text-[10px]">
                LECTOR DE CONSOLA:
              </span>
              <span className="px-1.5 py-0.5 bg-retro-surface border border-retro-border text-retro-ink font-pixel text-[9px] uppercase">
                {activeCategory.title}
              </span>
            </div>

            <div className="flex items-center gap-2 font-pixel text-[8px] text-retro-inkMuted">
              <span className="text-retro-green font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-retro-greenPastel border border-retro-border animate-pulse inline-block" />
                ESTADO: MONTADO
              </span>
              <span className="text-retro-borderMuted">|</span>
              <span className="text-retro-ink">
                {activeCartridgeConfig.chipCount}
              </span>
            </div>
          </div>

          {/* Description of this cartridge set */}
          <div className="p-1 sm:p-1.5 mb-2 bg-retro-surface border border-retro-border font-arcade text-sm sm:text-base text-retro-ink leading-tight">
            <span className="font-pixel text-[8px] text-retro-yellow font-bold mr-1.5">&gt; RESUMEN:</span>
            <span>{activeCategory.description}</span>
          </div>

          {/* Grid of technologies inside this cartridge */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-auto">
            {activeCategory.skills.map((skill) => {
              const details = SKILL_DETAILS[skill.name] || {
                tag: "TECH_SPEC",
                level: "SENIOR",
                colorClass: "bg-retro-surface text-retro-ink border-retro-border",
              };
              const isInspected = inspectedSkillName === skill.name;

              return (
                <div
                  key={skill.name}
                  onClick={() => setInspectedSkillName(isInspected ? null : skill.name)}
                  className={`p-2 bg-retro-surface/80 border border-retro-border pixel-box cursor-pointer transition-all hover:bg-retro-surface ${
                    isInspected ? 'ring-2 ring-retro-ink shadow-[2px_2px_0px_#2C221E]' : ''
                  }`}
                  title="Haz clic para inspeccionar detalles"
                >
                  {/* Skill header with badge & tag */}
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="font-pixel text-[8px] sm:text-[9px] font-bold text-retro-ink flex items-center gap-1">
                      <span className="w-1 h-1 bg-retro-ink inline-block" />
                      {skill.name}
                    </span>

                    <span className={`px-1 py-0.2 border font-pixel text-[7px] font-bold ${details.colorClass}`}>
                      {details.tag}
                    </span>
                  </div>

                  {/* Level & Focus description */}
                  <div className="space-y-0.5">
                    <div className="font-pixel text-[7px] text-retro-yellow font-bold uppercase">
                      [{details.level}]
                    </div>
                    <p className="font-arcade text-xs sm:text-sm text-retro-inkMuted leading-tight line-clamp-1 sm:line-clamp-2">
                      {skill.focus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Skill Detailed Inspector Drawer if clicked */}
          <div className="mt-2 pt-1.5 border-t border-retro-border font-arcade text-sm text-retro-inkMuted flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            {inspectedSkillName ? (
              <div className="flex items-center gap-1 text-retro-ink truncate">
                <span className="font-pixel text-[9px] text-retro-green font-bold">&gt; DETALLE:</span>
                <span className="font-pixel text-[9px] text-retro-ink font-bold">{inspectedSkillName}</span>
                <span className="text-xs sm:text-sm text-retro-inkMuted truncate">
                  — {activeCategory.skills.find((s) => s.name === inspectedSkillName)?.focus}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-retro-inkLight font-arcade text-xs sm:text-sm">
                <ChevronRight className="w-3 h-3 text-retro-yellow shrink-0" />
                <span>Haz clic en cualquier cartucho superior o en cualquier tecnología para ver su aplicación técnica.</span>
              </div>
            )}

            <div className="font-pixel text-[7px] text-retro-inkLight shrink-0">
              [SISTEMA LISTO // ZERO-OVERHEAD]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
