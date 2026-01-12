import React from 'react';
import { motion } from 'framer-motion';
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}
export function GlassCard({
  children,
  className = '',
  hoverEffect = false
}: GlassCardProps) {
  return <motion.div className={`glass-panel rounded-2xl p-6 shadow-2xl shadow-purple-900/10 ${className}`} whileHover={hoverEffect ? {
    scale: 1.02,
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  } : undefined} transition={{
    duration: 0.3
  }}>
      {children}
    </motion.div>;
}