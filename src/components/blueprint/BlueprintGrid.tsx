import React from 'react';
import { motion } from 'framer-motion';
export function BlueprintGrid() {
  return <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />

      {/* Larger Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,217,255,0.1)_1px,transparent_1px)] bg-[size:200px_200px]" />

      {/* Measurement Markers - Crosshairs */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(6)].map((_, i) => <div key={`h-${i}`} className="absolute h-px w-4 bg-blueprint-cyan/50" style={{
        top: `${(i + 1) * 16.6}%`,
        left: 0
      }} />)}
        {[...Array(6)].map((_, i) => <div key={`v-${i}`} className="absolute w-px h-4 bg-blueprint-cyan/50" style={{
        left: `${(i + 1) * 16.6}%`,
        top: 0
      }} />)}
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blueprint-cyan opacity-70" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blueprint-cyan opacity-70" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blueprint-cyan opacity-70" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blueprint-cyan opacity-70" />

      {/* Animated Scanning Line (Horizontal) */}
      <motion.div className="absolute left-0 right-0 h-px bg-blueprint-cyan/30 shadow-[0_0_10px_rgba(0,217,255,0.5)]" animate={{
      top: ['0%', '100%']
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'linear'
    }} />
    </div>;
}