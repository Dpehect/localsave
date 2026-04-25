'use client';

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';

const data = [
  { name: 'Pzt', sales: 2400, products: 12 },
  { name: 'Sal', sales: 1398, products: 8 },
  { name: 'Çar', sales: 9800, products: 45 },
  { name: 'Per', sales: 3908, products: 18 },
  { name: 'Cum', sales: 4800, products: 22 },
  { name: 'Cmt', sales: 3800, products: 15 },
  { name: 'Paz', sales: 4300, products: 20 },
];

const COLORS = ['#10b981', '#06b6d4', '#8b5cf6', '#f59e0b', '#ef4444', '#0ea5e9', '#10b981'];

export const SalesAnalyticsChart = () => {
  return (
    <div className="glass-card p-8 h-[400px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-black text-white uppercase tracking-tighter">Satış Performansı</h3>
          <p className="text-xs text-slate-500 font-mono">Haftalık Gelir Analizi (AI Optimize)</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-emerald-400">₺34,406</p>
          <p className="text-[10px] text-slate-500 font-bold uppercase">Toplam Ciro</p>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
            />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ 
                backgroundColor: 'rgba(3, 7, 17, 0.9)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}
            />
            <Bar dataKey="sales" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.8} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
