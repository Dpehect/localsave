'use client';

import { SmartHeatmap } from '@/features/analytics/components/smart-heatmap';
import { PageTransition } from '@/components/page-transition';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, AlertTriangle, Info, BarChart3 } from 'lucide-react';

export default function ExplorePage() {
  return (
    <PageTransition>
      <div className="p-8 lg:p-12 space-y-12">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tighter mb-4">Smart City Pulse</h1>
            <p className="text-slate-400 max-w-2xl text-lg">Şehrinizdeki gıda israfı yoğunluğunu ve en taze fırsat bölgelerini gerçek zamanlı takip edin.</p>
          </div>
          <div className="hidden lg:block text-right">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-xl border border-emerald-500/20">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-black uppercase tracking-widest">Canlı Şehir Nabzı: Aktif</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Map Area */}
          <div className="lg:col-span-8 space-y-8">
            <SmartHeatmap />
            
            {/* Peak Hours Analysis - NEW DATA DEPTH */}
            <div className="glass-card p-8 border-white/5">
              <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2 uppercase">
                <Clock className="text-cyan-400" /> İsraf Yoğunluk Saatleri
              </h3>
              <div className="grid grid-cols-12 h-32 gap-2 items-end">
                {[40, 25, 15, 10, 45, 80, 95, 60, 30, 20, 50, 70].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 flex-1">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      className={`w-full rounded-t-lg ${h > 70 ? 'bg-red-500/50' : 'bg-emerald-500/30'}`}
                    />
                    <span className="text-[8px] text-slate-600 font-bold">{i*2}:00</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-6 italic">
                <Info size={12} className="inline mr-1" /> Analiz: Şehrinizde israfın en yoğun olduğu saatler 12:00 - 14:00 arasıdır. Bu saatlerde "Flash Deals" oranları %40 artar.
              </p>
            </div>
          </div>

          {/* Detailed Stats Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass-card p-8 border-white/5">
              <h3 className="text-xl font-black text-white mb-8 uppercase tracking-tighter flex items-center gap-2">
                <BarChart3 className="text-emerald-400" /> Bölgesel Analitik
              </h3>
              <div className="space-y-8">
                {[
                  { neighborhood: 'Kadıköy', intensity: 85, trend: '+12%', color: 'bg-red-500', status: 'KRİTİK' },
                  { neighborhood: 'Beşiktaş', intensity: 42, trend: '-5%', color: 'bg-emerald-500', status: 'STABİL' },
                  { neighborhood: 'Üsküdar', intensity: 68, trend: '+2%', color: 'bg-orange-500', status: 'UYARI' },
                  { neighborhood: 'Şişli', intensity: 31, trend: '-18%', color: 'bg-emerald-400', status: 'OPTIMAL' },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-slate-200">{item.neighborhood}</span>
                      <span className={item.trend.startsWith('+') ? 'text-red-400' : 'text-emerald-400'}>{item.status} {item.trend}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.intensity}%` }}
                        className={`h-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insight Box */}
            <div className="glass-card p-8 border-cyan-500/20 bg-cyan-500/5 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:rotate-12 transition-transform">
                <TrendingUp size={120} />
              </div>
              <h4 className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-4">AI Fırsat Tahmini</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Algoritmalarımız önümüzdeki 3 saat içinde Üsküdar bölgesindeki fırınlarda %30'luk bir arz fazlası öngörüyor. Hazır olun!
              </p>
              <button className="mt-6 text-[10px] font-black text-cyan-400 flex items-center gap-2 hover:translate-x-2 transition-transform uppercase tracking-widest">
                Detaylı Raporu Gör <TrendingUp size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
