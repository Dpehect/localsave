'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Leaf, Zap, Award } from 'lucide-react';

const activities = [
  { id: 1, user: 'Ayşe K.', action: '2kg Domates', type: 'save', time: '2 dk önce' },
  { id: 2, user: 'Esnaf Ahmet', action: 'Yeni Fırsat: Taze Simit', type: 'offer', time: '5 dk önce' },
  { id: 3, user: 'Mehmet Y.', action: 'Achievement: Waste Warrior I', type: 'achievement', time: '12 dk önce' },
  { id: 4, user: 'Zeynep B.', action: '350L Su Tasarrufu', type: 'impact', time: '1 saat önce' },
];

export const ActivityFeed = () => {
  return (
    <div className="glass-card p-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-6">
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
        <h3 className="text-sm font-black uppercase tracking-widest text-emerald-500">Canlı Topluluk Akışı</h3>
      </div>

      <div className="space-y-4">
        {activities.map((activity, i) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-default group"
          >
            <div className={cn(
              "p-2 rounded-lg",
              activity.type === 'save' ? "bg-emerald-500/20 text-emerald-400" :
              activity.type === 'offer' ? "bg-cyan-500/20 text-cyan-400" :
              activity.type === 'achievement' ? "bg-purple-500/20 text-purple-400" : "bg-yellow-500/20 text-yellow-400"
            )}>
              {activity.type === 'save' && <Leaf size={16} />}
              {activity.type === 'offer' && <ShoppingCart size={16} />}
              {activity.type === 'achievement' && <Award size={16} />}
              {activity.type === 'impact' && <Zap size={16} />}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs text-white">
                <span className="font-black">{activity.user}</span> {activity.action}
              </p>
              <p className="text-[10px] text-slate-500 font-mono mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
        Tüm Etkinlikleri Gör
      </button>
    </div>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
