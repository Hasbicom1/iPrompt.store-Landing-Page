import React from 'react';
import { motion } from 'framer-motion';
import { BlueprintGrid } from './BlueprintGrid';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { TechnicalSpecs } from './TechnicalSpecs';
import { ScanLines } from './ScanLines';
export function BlueprintHero() {
  return <div className="relative min-h-screen w-full bg-blueprint-navy overflow-hidden flex flex-col">
      <BlueprintGrid />
      <ScanLines />

      {/* Header Bar */}
      <header className="relative z-10 w-full border-b border-blueprint-cyan/30 bg-blueprint-navy/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blueprint-cyan animate-pulse" />
            <span className="text-xl font-bold tracking-[0.2em] text-blueprint-white">
              SYSTEM_ARCHITECT
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-xs tracking-widest text-blueprint-cyan/70">
            <span>VER: 2.4.0</span>
            <span>STATUS: ONLINE</span>
            <span>SECURE: TRUE</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full p-6 gap-8">
        {/* Left Column: Text & Specs */}
        <div className="flex-1 flex flex-col justify-center space-y-12">
          <div className="space-y-6">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
              <div className="inline-block px-2 py-1 border border-blueprint-cyan/50 text-xs text-blueprint-cyan mb-4 tracking-widest bg-blueprint-cyan/5">
                TECHNICAL SPECIFICATION
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blueprint-cyan/80">
                PLATFORM
                <br />
                ARCHITECTURE
              </h1>
              <p className="text-blueprint-white/70 max-w-lg text-sm md:text-base leading-relaxed border-l-2 border-blueprint-cyan/30 pl-4">
                Advanced schematic visualization of distributed system topology.
                Featuring real-time data flow analysis, automated scaling
                vectors, and military-grade security protocols.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }}>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blueprint-cyan/10 border border-blueprint-cyan text-blueprint-cyan hover:bg-blueprint-cyan hover:text-blueprint-navy transition-all duration-300 font-bold tracking-wider text-sm uppercase group relative overflow-hidden">
                  <span className="relative z-10">Initialize System</span>
                  <div className="absolute inset-0 bg-blueprint-cyan transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                </button>
                <button className="px-6 py-3 border border-blueprint-white/30 text-blueprint-white hover:border-blueprint-white transition-all duration-300 font-bold tracking-wider text-sm uppercase">
                  View Docs
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8
        }}>
            <TechnicalSpecs />
          </motion.div>
        </div>

        {/* Right Column: Diagram */}
        <div className="flex-1 flex items-center justify-center min-h-[400px] lg:min-h-auto">
          <div className="w-full h-full relative">
            {/* Corner Accents for Diagram Container */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blueprint-cyan" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-blueprint-cyan" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blueprint-cyan" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blueprint-cyan" />

            <ArchitectureDiagram />

            {/* Decorative Tech Elements */}
            <div className="absolute bottom-4 left-4 text-[10px] text-blueprint-cyan/50 font-mono">
              COORD: 45.32.11
              <br />
              SYNC: ACTIVE
            </div>
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="relative z-10 w-full border-t border-blueprint-cyan/20 bg-blueprint-navy/90 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] text-blueprint-white/40 tracking-widest uppercase">
          <div>System ID: 884-XJ-99</div>
          <div className="flex gap-8">
            <span>Latency: 12ms</span>
            <span>Packets: 4.2M/s</span>
            <span>Load: 34%</span>
          </div>
        </div>
      </footer>
    </div>;
}