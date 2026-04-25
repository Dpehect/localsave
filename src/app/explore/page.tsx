'use client';

import { SmartHeatmap } from '@/features/analytics/components/smart-heatmap';
import { PageTransition } from '@/components/page-transition';

export default function ExplorePage() {
  return (
    <PageTransition>
      <div className="p-8 lg:p-12">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-white tracking-tighter mb-4">Smart City Pulse</h1>
          <p className="text-slate-400 max-w-2xl text-lg">Şehrinizdeki gıda israfı yoğunluğunu ve en taze fırsat bölgelerini gerçek zamanlı takip edin.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <SmartHeatmap />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-8 border-white/5 h-full">
              <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tighter">Bölgesel Analiz</h3>
              <div className="space-y-6">
                {[
                  { neighborhood: 'Kadıköy', intensity: 85, trend: '+12%', color: 'bg-red-500' },
                  { neighborhood: 'Beşiktaş', intensity: 42, trend: '-5%', color: 'bg-emerald-500' },
                  { neighborhood: 'Üsküdar', intensity: 68, trend: '+2%', color: 'bg-orange-500' },
                  { neighborhood: 'Şişli', intensity: 31, trend: '-18%', color: 'bg-emerald-400' },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                      <span>{item.neighborhood}</span>
                      <span className={item.trend.startsWith('+') ? 'text-red-400' : 'text-emerald-400'}>{item.trend}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.intensity}%` }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <p className="text-[10px] text-cyan-100 font-medium italic leading-relaxed">
                  "Şu an Kadıköy bölgesinde yüksek israf yoğunluğu tespit edildi. Fırsatları değerlendirmek için bölgedeki esnaflara göz atın."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
