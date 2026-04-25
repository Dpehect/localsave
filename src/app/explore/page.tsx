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

        <div className="grid grid-cols-1 gap-8">
          <SmartHeatmap />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 border-white/5">
              <h4 className="font-bold text-emerald-400 mb-2">En Aktif Bölge</h4>
              <p className="text-2xl font-black text-white">Kadıköy</p>
              <p className="text-xs text-slate-500 mt-1">%84 Doluluk</p>
            </div>
            <div className="glass-card p-6 border-white/5">
              <h4 className="font-bold text-cyan-400 mb-2">Yeni Fırsatlar</h4>
              <p className="text-2xl font-black text-white">124 Ürün</p>
              <p className="text-xs text-slate-500 mt-1">Son 1 saatte</p>
            </div>
            <div className="glass-card p-6 border-white/5">
              <h4 className="font-bold text-purple-400 mb-2">Eco Saving</h4>
              <p className="text-2xl font-black text-white">4.2 Ton</p>
              <p className="text-xs text-slate-500 mt-1">Bu ay toplam</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
