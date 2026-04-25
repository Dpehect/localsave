'use client';

import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Leaf, Droplets, Wind, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Pzt', eco: 400, water: 240 },
  { name: 'Sal', eco: 300, water: 139 },
  { name: 'Çar', eco: 900, water: 980 },
  { name: 'Per', eco: 1480, water: 390 },
  { name: 'Cum', eco: 1890, water: 480 },
  { name: 'Cmt', eco: 2390, water: 380 },
  { name: 'Paz', eco: 3490, water: 430 },
];

export const EcoImpactChart = () => {
  return (
    <div className="glass-card p-8 min-h-[400px] flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-black text-white flex items-center gap-2">
            Eco Impact <TrendingUp className="h-5 w-5 text-emerald-400" />
          </h3>
          <p className="text-slate-400 text-sm">Haftalık kurtarılan kaynak analizi</p>
        </div>
        <div className="bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-500/30">
          <span className="text-emerald-400 font-bold text-sm">+24% Artış</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <Leaf className="h-5 w-5 text-emerald-400 mb-2" />
          <p className="text-2xl font-bold">12.4kg</p>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">CO2 Tasarrufu</p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <Droplets className="h-5 w-5 text-cyan-400 mb-2" />
          <p className="text-2xl font-bold">840L</p>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Su Tasarrufu</p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <Wind className="h-5 w-5 text-teal-400 mb-2" />
          <p className="text-2xl font-bold">2.4k</p>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Eco Points</p>
        </div>
      </div>

      <div className="flex-1 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEco" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(3, 7, 17, 0.8)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}
              itemStyle={{ color: '#fff' }}
            />
            <Area 
              type="monotone" 
              dataKey="eco" 
              stroke="#10b981" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorEco)" 
            />
            <Area 
              type="monotone" 
              dataKey="water" 
              stroke="#06b6d4" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorWater)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
