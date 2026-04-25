'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map as MapIcon, Flame, Target, Zap } from 'lucide-react';

export const SmartHeatmap = () => {
  // Simulating heat zones
  const zones = [
    { x: '20%', y: '30%', intensity: 'high', label: 'Kadıköy' },
    { x: '60%', y: '50%', intensity: 'medium', label: 'Beşiktaş' },
    { x: '40%', y: '70%', intensity: 'low', label: 'Üsküdar' },
  ];

  return (
    <div className="glass-card p-8 min-h-[500px] relative overflow-hidden group">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h3 className="text-2xl font-black text-white flex items-center gap-2">
            Smart Heatmap <Flame className="h-5 w-5 text-orange-500 animate-pulse" />
          </h3>
          <p className="text-slate-400 text-sm font-mono uppercase tracking-tighter">Waste Intensity & Opportunity Zones</p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Live</div>
          <div className="px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-[10px] text-cyan-400 font-bold uppercase tracking-widest">v2.0</div>
        </div>
      </div>

      {/* Futuristic Map Grid */}
      <div className="relative w-full h-[350px] bg-[#0a0f1d] rounded-2xl border border-white/5 overflow-hidden">
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} 
        />
        
        {/* Animated Scanning Line */}
        <motion.div 
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute left-0 right-0 h-[2px] bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-20"
        />

        {/* Heat Zones */}
        {zones.map((zone, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            className={`absolute w-32 h-32 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 ${
              zone.intensity === 'high' ? 'bg-orange-500' : 
              zone.intensity === 'medium' ? 'bg-emerald-500' : 'bg-cyan-500'
            }`}
            style={{ left: zone.x, top: zone.y }}
          />
        ))}

        {/* Opportunity Markers */}
        {zones.map((zone, i) => (
          <motion.div
            key={`marker-${i}`}
            className="absolute z-30 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
            style={{ left: zone.x, top: zone.y }}
          >
            <div className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-xl">
              <Target className={`h-4 w-4 ${
                zone.intensity === 'high' ? 'text-orange-400' : 'text-emerald-400'
              }`} />
            </div>
            <div className="mt-2 px-2 py-0.5 bg-white/5 backdrop-blur-sm rounded border border-white/5 text-[10px] text-slate-300 font-bold whitespace-nowrap">
              {zone.label}
            </div>
          </motion.div>
        ))}

        <div className="absolute bottom-4 right-4 z-40 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest font-mono">City Pulse</span>
          </div>
          <p className="text-xs text-slate-400 max-w-[150px] leading-tight">Bölgelerdeki aktif gıda kurtarma potansiyeli %84 artış gösterdi.</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button className="glass-card py-3 flex items-center justify-center gap-2 text-xs font-bold text-emerald-400 hover:bg-emerald-500/5 transition-all">
          <MapIcon className="h-4 w-4" /> Full Map Access
        </button>
        <button className="glass-card py-3 flex items-center justify-center gap-2 text-xs font-bold text-cyan-400 hover:bg-cyan-500/5 transition-all">
          <Flame className="h-4 w-4" /> Hotspot Analysis
        </button>
      </div>
    </div>
  );
};
