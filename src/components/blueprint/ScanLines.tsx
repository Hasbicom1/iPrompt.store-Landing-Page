import React from 'react';
export function ScanLines() {
  return <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden mix-blend-overlay opacity-20">
      <div className="w-full h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blueprint-cyan/5 to-transparent animate-scan h-[200%]" />
    </div>;
}