'use client';

import React, { useState } from 'react';
import { Bot, Zap, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIResult {
  freshness: number;
  consumeWithin: number;
  recommendation: string;
}

export const FreshnessPredictor = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AIResult | null>(null);

  const simulateAnalysis = async () => {
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulating Gemini API processing
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setResult({
      freshness: 88,
      consumeWithin: 14,
      recommendation: "Ürün mükemmel durumda. Vitamin değeri en üst seviyede. Gece yarısına kadar tüketilmesi önerilir."
    });
    setIsAnalyzing(false);
  };

  return (
    <div className="glass-card p-8 neon-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald-500/20 rounded-lg">
          <Bot className="h-6 w-6 text-emerald-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold">AI Freshness Predictor</h3>
          <p className="text-xs text-emerald-500/60 font-mono tracking-widest uppercase">Powered by Gemini AI</p>
        </div>
      </div>

      <div className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 h-48 flex items-center justify-center transition-all hover:bg-white/10">
        <div className="text-center">
          <Zap className="h-10 w-10 text-emerald-400/50 mx-auto mb-2" />
          <p className="text-sm text-slate-400 font-medium">Analiz için fotoğraf sürükleyin veya tıklayın</p>
        </div>
        <input type="file" className="absolute inset-0 opacity-0" onChange={simulateAnalysis} />
      </div>

      <AnimatePresence>
        {isAnalyzing && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-center justify-center gap-3 text-emerald-400"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="font-mono text-sm tracking-tighter">MOLECULAR ANALYSIS IN PROGRESS...</span>
          </motion.div>
        )}

        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 space-y-4"
          >
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium text-slate-400">Tazelik Skoru</span>
              <span className="text-3xl font-black text-emerald-400">%{result.freshness}</span>
            </div>
            
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${result.freshness}%` }}
                className="h-full cyber-gradient"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Kalan Zaman</p>
                <p className="text-lg font-bold text-cyan-400">{result.consumeWithin} Saat</p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Durum</p>
                <p className="text-lg font-bold text-emerald-400">Optimal</p>
              </div>
            </div>

            <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <p className="text-xs text-emerald-100/80 leading-relaxed italic">"{result.recommendation}"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
