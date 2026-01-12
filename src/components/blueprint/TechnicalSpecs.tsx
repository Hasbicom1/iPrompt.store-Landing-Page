import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Cpu, Shield, Zap, Server } from 'lucide-react';
type Spec = {
  id: string;
  title: string;
  icon: React.ElementType;
  metrics: {
    label: string;
    value: string;
  }[];
  description: string;
};
const specs: Spec[] = [{
  id: 'perf',
  title: 'PERFORMANCE METRICS',
  icon: Zap,
  metrics: [{
    label: 'LATENCY',
    value: '< 15ms'
  }, {
    label: 'THROUGHPUT',
    value: '50k RPS'
  }],
  description: 'High-velocity data processing pipeline optimized for real-time ingestion and analysis.'
}, {
  id: 'scale',
  title: 'SCALABILITY PROTOCOLS',
  icon: Server,
  metrics: [{
    label: 'NODES',
    value: 'AUTO-SCALE'
  }, {
    label: 'REGIONS',
    value: 'GLOBAL'
  }],
  description: 'Elastic infrastructure that automatically provisions resources based on incoming load vectors.'
}, {
  id: 'sec',
  title: 'SECURITY ENCRYPTION',
  icon: Shield,
  metrics: [{
    label: 'AT REST',
    value: 'AES-256'
  }, {
    label: 'IN TRANSIT',
    value: 'TLS 1.3'
  }],
  description: 'Military-grade encryption standards applied to all data vectors with zero-trust architecture.'
}, {
  id: 'infra',
  title: 'INFRASTRUCTURE CORE',
  icon: Cpu,
  metrics: [{
    label: 'UPTIME',
    value: '99.999%'
  }, {
    label: 'BACKUP',
    value: 'REAL-TIME'
  }],
  description: 'Redundant core systems with automated failover and disaster recovery protocols.'
}];
export function TechnicalSpecs() {
  const [openSpec, setOpenSpec] = useState<string | null>('perf');
  return <div className="w-full max-w-2xl mx-auto border-t border-blueprint-cyan/30">
      {specs.map(spec => <div key={spec.id} className="border-b border-blueprint-cyan/30">
          <button onClick={() => setOpenSpec(openSpec === spec.id ? null : spec.id)} className="w-full flex items-center justify-between p-4 hover:bg-blueprint-cyan/5 transition-colors group text-left">
            <div className="flex items-center gap-4">
              <div className={`p-2 border border-blueprint-cyan/50 ${openSpec === spec.id ? 'bg-blueprint-cyan/20' : ''}`}>
                <spec.icon className="w-5 h-5 text-blueprint-cyan" />
              </div>
              <span className="font-bold tracking-wider text-blueprint-white group-hover:text-blueprint-cyan transition-colors">
                {spec.title}
              </span>
            </div>
            <motion.div animate={{
          rotate: openSpec === spec.id ? 90 : 0
        }} transition={{
          duration: 0.2
        }}>
              <ChevronRight className="w-5 h-5 text-blueprint-cyan/70" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openSpec === spec.id && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }} className="overflow-hidden bg-blueprint-dark/50">
                <div className="p-4 pl-[4.5rem] border-l-2 border-blueprint-cyan/20 ml-8 mb-4">
                  <p className="text-sm text-blueprint-white/80 mb-6 font-light leading-relaxed">
                    {spec.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {spec.metrics.map(metric => <div key={metric.label} className="bg-blueprint-navy border border-blueprint-cyan/20 p-3 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blueprint-cyan/50" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blueprint-cyan/50" />

                        <div className="text-[10px] text-blueprint-cyan/70 mb-1 tracking-widest">
                          {metric.label}
                        </div>
                        <div className="text-lg font-bold text-blueprint-white">
                          {metric.value}
                        </div>
                      </div>)}
                  </div>
                </div>
              </motion.div>}
          </AnimatePresence>
        </div>)}
    </div>;
}