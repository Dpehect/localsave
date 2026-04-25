'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Search, MessageSquare, Trophy, Settings, 
  ChevronLeft, ChevronRight, LogOut, LayoutDashboard, Menu
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Ana Sayfa', href: '/' },
  { icon: Search, label: 'Keşfet', href: '/explore' },
  { icon: MessageSquare, label: 'Topluluk', href: '/community' },
  { icon: Trophy, label: 'Liderlik', href: '/leaderboard' },
  { icon: LayoutDashboard, label: 'Panel', href: '/merchant/dashboard' },
];

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: isExpanded ? 240 : 80 }}
        className="hidden lg:flex fixed left-0 top-0 h-screen bg-[#030711]/80 backdrop-blur-2xl border-r border-white/5 z-50 flex-col transition-all duration-300"
      >
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-3 top-20 bg-emerald-500 rounded-full p-1 text-[#030711] shadow-lg border border-white/20"
        >
          {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        <div className="p-6 mb-8">
          <div className="h-8 w-8 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <div className="h-4 w-4 border-2 border-white rounded-full" />
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group relative"
            >
              <item.icon className="h-5 w-5 text-slate-400 group-hover:text-emerald-400" />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-sm font-bold text-slate-400 group-hover:text-white"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-red-500/10 transition-colors group">
            <LogOut className="h-5 w-5 text-slate-400 group-hover:text-red-400" />
            {isExpanded && <span className="text-sm font-bold text-slate-400">Çıkış</span>}
          </button>
        </div>
      </motion.aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#030711]/90 backdrop-blur-2xl border-t border-white/10 z-50 flex items-center justify-around px-2 py-4">
        {menuItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-black uppercase tracking-tighter">{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
};
