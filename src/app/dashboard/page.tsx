'use client';

import { PageTransition } from '@/components/page-transition';
import { motion } from 'framer-motion';
import { Trophy, Leaf, Zap, ShieldCheck, Star, Calendar, ArrowUpRight, Award } from 'lucide-react';
import { EcoImpactChart } from '@/features/gamification/components/eco-impact-chart';

const dailyMissions = [
  { title: 'İlk Gıdanı Kurtar', points: 150, status: 'complete' },
  { title: 'Bir Tarif Paylaş', points: 300, status: 'in-progress' },
  { title: '3 Farklı Esnaftan Alışveriş Yap', points: 500, status: 'pending' },
];

const recentActivities = [
  { store: 'Kardeşler Manav', product: '2kg Domates', saving: '₺45', impact: '1.2kg CO2', date: 'Bugün' },
  { store: 'Özlem Pastanesi', product: '6'lı Poğaça', saving: '₺30', impact: '0.8kg CO2', date: 'Dün' },
];

export default function UserDashboard() {
  return (
    <PageTransition>
      <div className="p-6 lg:p-12 space-y-10">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tighter">İsraf Savaşçısı Paneli</h1>
            <p className="text-slate-500 font-mono text-xs uppercase mt-2 tracking-widest">ID: LS-2024-8892 • Premium Citizen</p>
          </div>
          <div className="flex gap-4">
            <div className="glass-card px-6 py-3 flex items-center gap-3 border-emerald-500/20">
              <Leaf className="text-emerald-400 h-5 w-5" />
              <div>
                <p className="text-xs text-slate-500 font-black">ECO-PUAN</p>
                <p className="text-xl font-black text-white">4,850</p>
              </div>
            </div>
            <div className="glass-card px-6 py-3 flex items-center gap-3 border-cyan-500/20">
              <Zap className="text-cyan-400 h-5 w-5" />
              <div>
                <p className="text-xs text-slate-500 font-black">RANK</p>
                <p className="text-xl font-black text-white">#12</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Analytics */}
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-card p-8 border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Trophy size={120} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-6 uppercase">Sürdürülebilirlik Yolculuğun</h3>
              <EcoImpactChart />
            </div>

            {/* Daily Missions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dailyMissions.map((mission, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className={`glass-card p-6 border-white/5 ${mission.status === 'complete' ? 'bg-emerald-500/5' : ''}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg ${mission.status === 'complete' ? 'bg-emerald-500 text-[#030711]' : 'bg-white/5 text-slate-500'}`}>
                      <Star size={16} />
                    </div>
                    <span className="text-[10px] font-black text-emerald-400">+{mission.points} XP</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{mission.title}</h4>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${mission.status === 'complete' ? 'w-full bg-emerald-500' : 'w-1/3 bg-cyan-500'}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Side Info Layer */}
          <div className="lg:col-span-4 space-y-8">
            {/* Badges Section */}
            <div className="glass-card p-8 border-white/5">
              <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                <Award className="text-yellow-400" /> Aktif Rozetler
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <div key={i} className={`aspect-square rounded-xl flex items-center justify-center border transition-all cursor-help ${
                    i <= 3 ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' : 'bg-white/5 border-white/5 text-slate-700'
                  }`}>
                    {i === 1 && <ShieldCheck size={20} />}
                    {i === 2 && <Leaf size={20} />}
                    {i === 3 && <Zap size={20} />}
                    {i > 3 && <Star size={20} />}
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 text-[10px] font-black uppercase text-slate-500 hover:text-white transition-colors">Tüm Rozetleri İncele</button>
            </div>

            {/* Recent Savings */}
            <div className="glass-card p-8 border-white/5">
              <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                <Calendar className="text-cyan-400" /> Son Tasarruflar
              </h3>
              <div className="space-y-4">
                {recentActivities.map((act, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                    <div>
                      <p className="text-xs font-bold text-white">{act.product}</p>
                      <p className="text-[10px] text-slate-500">{act.store}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-emerald-400">{act.saving}</p>
                      <p className="text-[10px] text-slate-600 uppercase font-mono">{act.impact}</p>
                    </div>
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
