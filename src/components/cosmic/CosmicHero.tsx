import React from 'react';
import { motion } from 'framer-motion';
import { CosmicCanvas } from './CosmicCanvas';
import { StatsOrbit } from './StatsOrbit';
import { GlassCard } from './GlassCard';
import { RevealContainer } from './RevealContainer';
import { TechnicalLayer } from './TechnicalLayer';
import { Globe } from '../ui/globe';
import { ArrowRight, Play, Map } from 'lucide-react';
export function CosmicHero() {
  return <RevealContainer underLayer={<TechnicalLayer />}>
      <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Visualization - Keep for additional effects */}
        <CosmicCanvas />

        {/* 3D Globe - Main centerpiece */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Globe className="top-0 opacity-30" config={{
          width: 800,
          height: 800,
          onRender: () => {},
          devicePixelRatio: 2,
          phi: 0,
          theta: 0.3,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.3, 0.3, 0.3],
          markerColor: [139 / 255, 92 / 255, 246 / 255],
          glowColor: [0.3, 0.3, 0.4],
          markers: [{
            location: [37.7749, -122.4194],
            size: 0.08
          }, {
            location: [48.8566, 2.3522],
            size: 0.08
          }, {
            location: [35.6762, 139.6503],
            size: 0.08
          }, {
            location: [51.5074, -0.1278],
            size: 0.07
          }, {
            location: [40.7128, -74.006],
            size: 0.09
          }, {
            location: [-23.5505, -46.6333],
            size: 0.07
          }, {
            location: [19.076, 72.8777],
            size: 0.08
          }, {
            location: [39.9042, 116.4074],
            size: 0.09
          }, {
            location: [52.52, 13.405],
            size: 0.06
          }, {
            location: [1.3521, 103.8198],
            size: 0.06
          } // Singapore
          ]
        }} />
        </div>

        {/* Floating Stats (Desktop) */}
        <StatsOrbit />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center pointer-events-auto">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              The Living Map of AI
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Build the Future on a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Global Canvas
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              iPrompt.store is the first geographic AI ecosystem. Connect
              stations, share compute, and build collaborative workflows on a
              living, breathing world map.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                <Map size={20} className="text-purple-600" />
                Explore the Map
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <GlassCard className="!p-0 !bg-white/5 hover:!bg-white/10 transition-colors cursor-pointer rounded-full overflow-hidden" hoverEffect={false}>
                <button className="px-8 py-4 text-white font-medium text-lg flex items-center gap-3 w-full h-full">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                    <Play size={14} className="text-purple-300 ml-0.5" fill="currentColor" />
                  </div>
                  Watch Demo
                </button>
              </GlassCard>
            </motion.div>

            {/* Mobile Stats Grid (Visible only on small screens) */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.8
          }} className="mt-16 grid grid-cols-2 gap-4 lg:hidden">
              <GlassCard className="text-center py-4">
                <div className="text-2xl font-bold text-white">2,847</div>
                <div className="text-xs text-slate-400 uppercase">Stations</div>
              </GlassCard>
              <GlassCard className="text-center py-4">
                <div className="text-2xl font-bold text-white">15.2K</div>
                <div className="text-xs text-slate-400 uppercase">
                  Workflows
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0e27] to-transparent z-10 pointer-events-none" />
      </div>
    </RevealContainer>;
}