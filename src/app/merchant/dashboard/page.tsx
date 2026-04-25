'use client';

import { AddProductForm } from '@/features/dashboard/components/add-product-form';
import { SalesAnalyticsChart } from '@/features/analytics/components/sales-analytics-chart';
import { PageTransition } from '@/components/page-transition';
import { LayoutDashboard, Package, TrendingUp, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MerchantDashboardPage() {
  const stats = [
    { label: 'Toplam Satış', value: '₺2.840', icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Aktif Ürünler', value: '14', icon: Package, color: 'text-cyan-400' },
    { label: 'Sadık Müşteriler', value: '128', icon: Users, color: 'text-purple-400' },
  ];

  return (
    <PageTransition>
      <div className="p-8 lg:p-12">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-white tracking-tighter mb-4 flex items-center gap-3">
            <LayoutDashboard className="h-10 w-10 text-emerald-500" /> Esnaf Yönetim Paneli
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">Ürünlerinizi yönetin, satış analitiğinizi takip edin ve israfı beraber önleyelim.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Section */}
          <div className="lg:col-span-2">
            <SalesAnalyticsChart />
          </div>

          {/* Monthly Goals */}
          <div className="glass-card p-8 border-white/5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Target className="text-cyan-400" /> Aylık Hedef
              </h3>
              <p className="text-xs text-slate-500 font-mono">12 Ton İsraf Önleme Hedefi</p>
            </div>
            
            <div className="py-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold text-slate-300">İlerleme</span>
                <span className="text-sm font-black text-emerald-400">%74</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '74%' }}
                  className="h-full cyber-gradient"
                />
              </div>
            </div>

            <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
              <p className="text-xs text-emerald-100 font-medium italic">"Bu hızla giderseniz ay sonunda 'Eco Merchant' rozeti kazanacaksınız!"</p>
            </div>
          </div>

          {/* Add Product Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-black text-white mb-6">Yeni Ürün Yayınla</h3>
            <div className="glass-card p-2 border-white/5">
              <AddProductForm onSubmit={async (data) => console.log('Product added:', data)} />
            </div>
          </div>

          {/* Activity Logs Placeholder */}
          <div className="glass-card p-8 border-white/5 h-fit">
            <h3 className="text-lg font-black text-white mb-6">Son İşlemler</h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 items-center p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <div className="flex-1">
                    <p className="text-xs text-white font-bold">Yeni Rezervasyon</p>
                    <p className="text-[10px] text-slate-500 font-mono">Simit (3 Adet) • 14:20</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
