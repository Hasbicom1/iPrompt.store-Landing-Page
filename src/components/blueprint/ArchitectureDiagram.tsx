import React, { useState } from 'react';
import { motion } from 'framer-motion';
type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  type: 'service' | 'db' | 'client' | 'gateway';
};
const nodes: Node[] = [{
  id: 'client',
  x: 100,
  y: 300,
  label: 'CLIENT APP',
  type: 'client'
}, {
  id: 'gateway',
  x: 300,
  y: 300,
  label: 'API GATEWAY',
  type: 'gateway'
}, {
  id: 'auth',
  x: 500,
  y: 150,
  label: 'AUTH SERVICE',
  type: 'service'
}, {
  id: 'core',
  x: 500,
  y: 300,
  label: 'CORE ENGINE',
  type: 'service'
}, {
  id: 'analytics',
  x: 500,
  y: 450,
  label: 'ANALYTICS',
  type: 'service'
}, {
  id: 'db',
  x: 700,
  y: 300,
  label: 'PRIMARY DB',
  type: 'db'
}, {
  id: 'cache',
  x: 700,
  y: 150,
  label: 'REDIS CACHE',
  type: 'db'
}];
const connections = [{
  from: 'client',
  to: 'gateway'
}, {
  from: 'gateway',
  to: 'auth'
}, {
  from: 'gateway',
  to: 'core'
}, {
  from: 'gateway',
  to: 'analytics'
}, {
  from: 'core',
  to: 'db'
}, {
  from: 'core',
  to: 'cache'
}, {
  from: 'auth',
  to: 'db'
}];
export function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  return <div className="w-full h-full min-h-[500px] relative flex items-center justify-center overflow-hidden bg-blueprint-navy/50 border border-blueprint-cyan/20 backdrop-blur-sm">
      <div className="absolute top-4 left-4 text-xs text-blueprint-cyan/70 tracking-widest">
        FIG 2.1 - SYSTEM ARCHITECTURE
      </div>

      <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 600">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#00d9ff" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map((conn, i) => {
        const start = nodes.find(n => n.id === conn.from)!;
        const end = nodes.find(n => n.id === conn.to)!;
        return <g key={`${conn.from}-${conn.to}`}>
              {/* Base Line */}
              <motion.path d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`} stroke="#1e3a5f" strokeWidth="1" fill="none" initial={{
            pathLength: 0
          }} animate={{
            pathLength: 1
          }} transition={{
            duration: 1.5,
            delay: i * 0.1,
            ease: 'easeInOut'
          }} />

              {/* Animated Data Flow */}
              <motion.path d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`} stroke="#00d9ff" strokeWidth="2" fill="none" strokeDasharray="4 8" initial={{
            pathLength: 0,
            opacity: 0
          }} animate={{
            pathLength: 1,
            opacity: 1,
            strokeDashoffset: -240
          }} transition={{
            pathLength: {
              duration: 1.5,
              delay: i * 0.1
            },
            opacity: {
              duration: 0.5,
              delay: i * 0.1
            },
            strokeDashoffset: {
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }
          }} />
            </g>;
      })}

        {/* Nodes */}
        {nodes.map((node, i) => <motion.g key={node.id} initial={{
        scale: 0,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        delay: 1 + i * 0.1,
        type: 'spring',
        stiffness: 200
      }} onHoverStart={() => setActiveNode(node.id)} onHoverEnd={() => setActiveNode(null)} className="cursor-pointer">
            {/* Node Glow */}
            {activeNode === node.id && <circle cx={node.x} cy={node.y} r="40" fill="url(#glow)" className="fill-blueprint-cyan/20" />}

            {/* Node Shape */}
            <rect x={node.x - 40} y={node.y - 20} width="80" height="40" fill="#0a1628" stroke={activeNode === node.id ? '#ffffff' : '#00d9ff'} strokeWidth="1.5" />

            {/* Tech Markers on Node */}
            <line x1={node.x - 35} y1={node.y - 15} x2={node.x - 30} y2={node.y - 15} stroke="#00d9ff" strokeWidth="1" opacity="0.5" />
            <line x1={node.x + 30} y1={node.y + 15} x2={node.x + 35} y2={node.y + 15} stroke="#00d9ff" strokeWidth="1" opacity="0.5" />

            {/* Label */}
            <text x={node.x} y={node.y} dy="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="bold" className="pointer-events-none select-none">
              {node.label}
            </text>
          </motion.g>)}
      </svg>

      {/* Interactive Tooltip/Detail Panel */}
      {activeNode && <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} className="absolute bottom-4 right-4 bg-blueprint-navy/90 border border-blueprint-cyan p-4 w-64 backdrop-blur-md">
          <div className="flex justify-between items-center mb-2 border-b border-blueprint-cyan/30 pb-2">
            <span className="text-blueprint-cyan text-xs font-bold uppercase">
              COMPONENT_ID
            </span>
            <span className="text-white text-xs">
              0x{activeNode.toUpperCase()}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-blueprint-white/60">STATUS:</span>
              <span className="text-green-400">OPERATIONAL</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-blueprint-white/60">UPTIME:</span>
              <span className="text-blueprint-cyan">99.99%</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-blueprint-white/60">LOAD:</span>
              <span className="text-blueprint-cyan">42%</span>
            </div>
          </div>
        </motion.div>}
    </div>;
}