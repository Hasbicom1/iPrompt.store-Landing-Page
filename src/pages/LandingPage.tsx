import React from 'react';
import { CosmicHero } from '../components/cosmic/CosmicHero';
export function LandingPage() {
  return <div className="bg-[#0a0e27] min-h-screen text-slate-200 selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden">
      <CosmicHero />
    </div>;
}