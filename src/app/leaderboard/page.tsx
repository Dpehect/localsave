'use client';

import { EcoImpactChart } from '@/features/gamification/components/eco-impact-chart';
import { PageTransition } from '@/components/page-transition';
import { Trophy, Award, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const topWarriors = [
  { name: 'Selin Aras', points: 4850, level: 42, impact: '12.4kg CO2', avatar: 'SA' },
  { name: 'Mert Demir', points: 4200, level: 38, impact: '10.1kg CO2', avatar: 'MD' },
  { name: 'Buse Yıldız', points: 3950, level: 35, impact: '8.4kg CO2', avatar: 'BY' },
];

export default function LeaderboardPage() {
  return (
    <PageTransition>
      <div className="p-8 lg:p-12">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-white tracking-tighter mb-4">Liderlik Tablosu</h1>
          <p className="text-slate-400 max-w-2xl text-lg">Mahallenin "İsraf Savaşçıları" ile tanışın. Her kurtarılan gıda sizi zirveye taşır.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2">
            <EcoImpactChart />
          </div>

          {/* Ranking List */}
          <div className="glass-card p-8 border-white/5">
            <h3 className="text-xl font-black text-white mb-8 flex items-center gap-2">
              <Trophy className="text-yellow-400" /> Haftanın Savaşçıları
            </h3>
            
            <div className="space-y-6">
              {topWarriors.map((warrior, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="text-lg font-black text-slate-500 w-4">{i + 1}</div>
                  <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/30">
                    {warrior.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">{warrior.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono">Lv. {warrior.level} • {warrior.impact}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-emerald-400">{warrior.points}</p>
                    <p className="text-[10px] text-slate-500 font-bold">ECO</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">Senin Rozetlerin</h4>
              <div className="flex gap-4">
                {[Award, Star, Zap].map((Icon, i) => (
                  <div key={i} className="h-12 w-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-600 grayscale hover:grayscale-0 hover:text-emerald-400 transition-all cursor-help" title="Kilitli Rozet">
                    <Icon size={24} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
