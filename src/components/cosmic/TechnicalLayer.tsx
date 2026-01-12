import React from 'react';
import { CodeSnippet } from './CodeSnippet';
import { WorkflowDiagram } from './WorkflowDiagram';
export function TechnicalLayer() {
  return <div className="absolute inset-0 bg-[#050714] overflow-hidden flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }} />

      {/* Floating Technical Elements */}
      <div className="relative w-full max-w-7xl h-full mx-auto">
        <CodeSnippet className="absolute top-[20%] left-[10%] -rotate-6" />
        <CodeSnippet className="absolute bottom-[30%] right-[15%] rotate-3" />
        <CodeSnippet className="absolute top-[15%] right-[20%] rotate-12 scale-75" />

        <WorkflowDiagram className="absolute top-[40%] left-[5%] opacity-60" />
        <WorkflowDiagram className="absolute bottom-[20%] left-[30%] opacity-40 scale-125" />
        <WorkflowDiagram className="absolute top-[30%] right-[5%] opacity-50" />

        {/* Raw Data Streams */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 font-mono text-[10px] text-purple-500/30 leading-3 hidden md:block">
          {Array.from({
          length: 40
        }).map((_, i) => <div key={i}>{Math.random().toString(16).substring(2)}</div>)}
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 font-mono text-[10px] text-cyan-500/30 leading-3 text-right hidden md:block">
          {Array.from({
          length: 40
        }).map((_, i) => <div key={i}>
              0x{Math.random().toString(16).substring(2).toUpperCase()}
            </div>)}
        </div>
      </div>

      {/* Central Blueprint Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full animate-[spin_60s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-500/30 rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-500/30 rounded-full"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500/30 rounded-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500/30 rounded-full"></div>
      </div>
    </div>;
}