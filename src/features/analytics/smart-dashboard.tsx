'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FreshnessPredictor } from '@/features/analytics/components/freshness-predictor';
import { EcoImpactChart } from '@/features/gamification/components/eco-impact-chart';
import { SmartHeatmap } from './components/smart-heatmap';
import { CommunityFeed } from '@/features/community/components/community-feed';
import { Globe } from 'lucide-react';

export default function SmartDashboard() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 lg:px-12 bg-[#030711]">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-gradient tracking-tight mb-2">Smart Dashboard</h1>
        <p className="text-slate-500 font-medium">Veriye dayalı sürdürülebilir gelecek analizi.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {/* Featured: AI Predictor */}
        <div className="lg:col-span-2 lg:row-span-2">
          <FreshnessPredictor />
        </div>

        {/* Global Impact Counter */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card p-6 flex flex-col justify-between border-cyan-500/20"
        >
          <Globe className="h-8 w-8 text-cyan-400" />
          <div>
            <p className="text-3xl font-black text-white">42,840</p>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Global Kurtarılan Ürün</p>
          </div>
        </motion.div>

        {/* Smart Heatmap */}
        <div className="lg:col-span-2 lg:row-span-2">
          <SmartHeatmap />
        </div>

        {/* Eco Score Chart */}
        <div className="lg:col-span-2 lg:row-span-2">
          <EcoImpactChart />
        </div>

        {/* Community Feed - Full Width below */}
        <div className="lg:col-span-4 mt-8">
          <CommunityFeed />
        </div>
      </div>
    </div>
  );
}
