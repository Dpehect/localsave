'use client';

import { motion } from 'framer-motion';
import { Leaf, Store, MapPin, ChevronRight, ArrowRight, Activity, Zap, ShieldCheck } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { ErrorBoundary } from "@/components/error-boundary";
import { ActivityFeed } from "@/components/activity-feed";

export default function Home() {
  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen bg-[#030711] text-white selection:bg-emerald-500/30 overflow-x-hidden">
          {/* Animated Background Orbs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Futuristic Nav */}
          <nav className="fixed top-0 z-50 w-full bg-[#030711]/60 backdrop-blur-xl border-b border-white/5">
            <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-emerald-400 font-black text-2xl tracking-tighter">
                <Leaf className="h-7 w-7 text-emerald-500 fill-emerald-500/20" />
                LocalSave <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full ml-2 border border-emerald-500/30">BETA v2.0</span>
              </div>
              <div className="hidden md:flex gap-10 text-sm font-bold text-slate-400">
                <a href="#" className="hover:text-emerald-400 transition-all">Smart City Pulse</a>
                <a href="#" className="hover:text-emerald-400 transition-all">Eco impact</a>
                <a href="#" className="hover:text-emerald-400 transition-all">Merchant Portal</a>
              </div>
              <button className="bg-emerald-500 text-[#030711] px-6 py-2.5 rounded-full text-sm font-black hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all active:scale-95">
                Launch App
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8 text-left">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                  >
                    <Activity className="h-4 w-4 animate-bounce" />
                    Next-Gen Food Recovery System
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl lg:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.9]"
                  >
                    Gıda İsrafını <br />
                    <span className="text-gradient">Akıllı Şehirle</span> Önle.
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg lg:text-2xl text-slate-400 max-w-2xl mb-16 leading-relaxed font-medium"
                  >
                    LocalSave, mahallenizdeki esnafların taze ürünlerini yapay zeka ve akıllı harita teknolojileriyle sofranıza taşıyan fütüristik bir ekosistemdir.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6"
                  >
                    <button className="group bg-white text-[#030711] px-10 py-5 rounded-2xl font-black text-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                      Explore Now
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button className="glass-card px-10 py-5 text-white font-black text-xl hover:bg-white/10 transition-all border-white/20">
                      Smart Analytics
                    </button>
                  </motion.div>
                </div>

                <div className="lg:col-span-4">
                  <ActivityFeed />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Bento */}
          <section className="py-24 border-y border-white/5 bg-white/[0.02]">
            <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: 'Active Merchants', value: '500+', icon: Store, color: 'text-emerald-400' },
                { label: 'Carbon Prevented', value: '12 Ton', icon: Leaf, color: 'text-cyan-400' },
                { label: 'Energy Saved', value: '1.2 MWh', icon: Zap, color: 'text-yellow-400' },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-10 text-center flex flex-col items-center border-white/5"
                >
                  <stat.icon className={`h-10 w-10 ${stat.color} mb-6`} />
                  <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Futuristic Features */}
          <section className="py-32 relative">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: MapPin,
                    title: "Smart Heatmap",
                    desc: "Şehrin nabzını tutun. İsraf yoğunluğu ve fırsat bölgelerini anlık takip edin.",
                    badge: "REAL-TIME"
                  },
                  {
                    icon: ShieldCheck,
                    title: "AI Freshness",
                    desc: "Gemini destekli moleküler analiz ile ürünlerinizin tazeliğinden emin olun.",
                    badge: "AI CORE"
                  },
                  {
                    icon: Activity,
                    title: "Price Decay",
                    desc: "Zamanla yarışın. SKT yaklaştıkça fiyatların canlı olarak düşüşünü izleyin.",
                    badge: "DYNAMIC"
                  }
                ].map((feature, i) => (
                  <motion.div 
                    whileHover={{ y: -20 }}
                    key={i} 
                    className="glass-card p-12 border-white/5 hover:border-emerald-500/30 transition-all flex flex-col items-start"
                  >
                    <div className="text-[10px] font-black text-emerald-500 mb-6 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {feature.badge}
                    </div>
                    <div className="h-16 w-16 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-400 mb-8 border border-emerald-500/20">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
