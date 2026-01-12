import React, { useEffect, useRef } from 'react';
interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  phase: number;
  speed: number;
  connections: number[]; // Indices of connected nodes
}
interface Particle {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}
export function CosmicCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    // Configuration
    const NODE_COUNT = 18;
    const CONNECTION_DISTANCE = 300;
    const COLORS = ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b'];
    // State
    const nodes: Node[] = [];
    const particles: Particle[] = [];
    let mouseX = width / 2;
    let mouseY = height / 2;
    // Initialize Nodes
    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      nodes.length = 0;
      particles.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius: Math.random() * 3 + 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.002 + 0.001,
          connections: []
        });
      }
      // Pre-calculate connections based on distance
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            // Randomly decide to keep connection to avoid clutter, bias towards closer
            if (Math.random() > 0.5) {
              node.connections.push(j);
            }
          }
        });
      });
      // Initialize some particles
      for (let i = 0; i < 8; i++) {
        spawnParticle();
      }
    };
    const spawnParticle = () => {
      if (nodes.length < 2) return;
      const fromIndex = Math.floor(Math.random() * nodes.length);
      const fromNode = nodes[fromIndex];
      if (fromNode.connections.length === 0) return;
      const toIndex = fromNode.connections[Math.floor(Math.random() * fromNode.connections.length)];
      particles.push({
        fromNode: fromIndex,
        toNode: toIndex,
        progress: 0,
        speed: Math.random() * 0.005 + 0.002,
        color: fromNode.color
      });
    };
    const draw = (time: number) => {
      // Clear with trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.2)'; // Slight trail
      ctx.fillRect(0, 0, width, height);
      // Update Nodes
      nodes.forEach(node => {
        // Floating motion
        node.phase += node.speed;
        node.y = node.baseY + Math.sin(node.phase) * 20;
        node.x = node.baseX + Math.cos(node.phase * 0.5) * 10;
        // Mouse parallax (subtle)
        const dx = mouseX - width / 2;
        const dy = mouseY - height / 2;
        node.x += dx * 0.0005;
        node.y += dy * 0.0005;
        // Draw Node Glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fill();
        // Draw Core
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      // Draw Connections
      ctx.lineWidth = 0.5;
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          const target = nodes[targetIndex];
          // Only draw if target index is greater to avoid double drawing
          if (targetIndex > i) {
            const dist = Math.hypot(node.x - target.x, node.y - target.y);
            const opacity = 1 - dist / CONNECTION_DISTANCE;
            if (opacity > 0) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 116, 139, ${opacity * 0.3})`;
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
            }
          }
        });
      });
      // Update and Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          particles.splice(i, 1);
          spawnParticle(); // Keep population steady
          continue;
        }
        const start = nodes[p.fromNode];
        const end = nodes[p.toNode];
        const currentX = start.x + (end.x - start.x) * p.progress;
        const currentY = start.y + (end.y - start.y) * p.progress;
        // Draw Particle
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      // Randomly spawn new particles occasionally
      if (Math.random() < 0.02) spawnParticle();
      animationFrameId = requestAnimationFrame(draw);
    };
    // Event Listeners
    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    draw(0);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
}