import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
interface RevealContainerProps {
  children: React.ReactNode; // The "Top" layer (Cosmic)
  underLayer: React.ReactNode; // The "Bottom" layer (Technical)
}
export function RevealContainer({
  children,
  underLayer
}: RevealContainerProps) {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Smooth spring animation for the mask
  const maskX = useSpring(mouseX, {
    stiffness: 200,
    damping: 30
  });
  const maskY = useSpring(mouseY, {
    stiffness: 200,
    damping: 30
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  return <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-black" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      {/* Bottom Layer (Technical) - Always rendered, revealed by mask */}
      <div className="absolute inset-0 z-0">{underLayer}</div>

      {/* Top Layer (Cosmic) - Masked */}
      <motion.div className="relative z-10 w-full min-h-screen bg-[#0a0e27]" style={{
      // Create a "hole" in the top layer to reveal the bottom layer
      maskImage: 'radial-gradient(circle 200px at var(--mask-x) var(--mask-y), transparent 0%, black 100%)',
      WebkitMaskImage: 'radial-gradient(circle 200px at var(--mask-x) var(--mask-y), transparent 0%, black 100%)'
    } as any}>
        {/* We need to update CSS variables for the mask position since mask-image doesn't animate well with framer-motion directly in all browsers */}
        <MaskUpdater x={maskX} y={maskY} />
        {children}
      </motion.div>

      {/* Cursor/Lens Effect */}
      <motion.div className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full border border-cyan-500/30 pointer-events-none z-50 mix-blend-screen hidden md:block" style={{
      x: maskX,
      y: maskY,
      translateX: '-50%',
      translateY: '-50%',
      background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
      boxShadow: '0 0 40px rgba(6,182,212,0.1) inset'
    }} />
    </div>;
}
// Helper component to update CSS variables from MotionValues
function MaskUpdater({
  x,
  y
}: {
  x: any;
  y: any;
}) {
  useEffect(() => {
    const update = () => {
      document.documentElement.style.setProperty('--mask-x', `${x.get()}px`);
      document.documentElement.style.setProperty('--mask-y', `${y.get()}px`);
    };
    const unsubscribeX = x.on('change', update);
    const unsubscribeY = y.on('change', update);
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [x, y]);
  return null;
}