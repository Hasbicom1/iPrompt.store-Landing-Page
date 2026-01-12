import React from 'react';
import { motion } from 'framer-motion';
export function WorkflowDiagram({
  className = ''
}: {
  className?: string;
}) {
  return <div className={`relative w-64 h-48 border border-purple-500/20 bg-purple-900/10 rounded-lg p-4 ${className}`}>
      <div className="absolute top-2 left-2 text-[10px] text-purple-400 font-mono">
        WORKFLOW_EXEC_01
      </div>

      {/* Nodes */}
      <div className="absolute top-12 left-8 w-8 h-8 rounded border border-cyan-400/40 bg-cyan-900/20 flex items-center justify-center">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>

      <div className="absolute top-24 left-24 w-8 h-8 rounded border border-purple-400/40 bg-purple-900/20 flex items-center justify-center">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <div className="absolute top-12 left-40 w-8 h-8 rounded border border-pink-400/40 bg-pink-900/20 flex items-center justify-center">
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
      </div>

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path d="M 48 44 L 96 110" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" initial={{
        pathLength: 0
      }} animate={{
        pathLength: 1
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} />
        <motion.path d="M 112 110 L 160 44" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" initial={{
        pathLength: 0
      }} animate={{
        pathLength: 1
      }} transition={{
        duration: 2,
        delay: 1,
        repeat: Infinity
      }} />
      </svg>

      {/* Data Stream */}
      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-green-400/60">
        STREAM_ACTIVE: 42.8MB/s
      </div>
    </div>;
}