import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Activity, Globe, Zap, Users } from 'lucide-react';
const stats = [{
  label: 'Active Stations',
  value: '2,847',
  icon: Globe,
  color: 'text-purple-400',
  delay: 0,
  x: '-10%',
  y: '10%'
}, {
  label: 'Live Workflows',
  value: '15.2K',
  icon: Zap,
  color: 'text-orange-400',
  delay: 1.5,
  x: '80%',
  y: '-20%'
}, {
  label: 'Contributors',
  value: '892',
  icon: Users,
  color: 'text-cyan-400',
  delay: 0.8,
  x: '-5%',
  y: '-30%'
}, {
  label: 'Compute Power',
  value: '4.2 PF',
  icon: Activity,
  color: 'text-pink-400',
  delay: 2.2,
  x: '85%',
  y: '25%'
}];
export function StatsOrbit() {
  return <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stats.map((stat, index) => <motion.div key={stat.label} className="absolute hidden lg:block" initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1,
      y: [0, -15, 0]
    }} transition={{
      opacity: {
        duration: 0.8,
        delay: stat.delay
      },
      scale: {
        duration: 0.8,
        delay: stat.delay
      },
      y: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: stat.delay * 2
      }
    }} style={{
      left: stat.x.includes('-') ? undefined : stat.x,
      right: stat.x.includes('-') ? undefined : 'auto',
      top: stat.y.includes('-') ? undefined : stat.y,
      bottom: stat.y.includes('-') ? undefined : 'auto',
      // Simple positioning logic for demo
      marginLeft: stat.x.includes('-') ? '5%' : undefined,
      marginTop: stat.y.includes('-') ? '10%' : undefined
    }}>
          <GlassCard className="flex items-center gap-4 py-3 px-5 min-w-[200px]">
            <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono-nums text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          </GlassCard>
        </motion.div>)}
    </div>;
}