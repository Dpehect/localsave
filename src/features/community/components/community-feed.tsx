'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Plus, Sparkles } from 'lucide-react';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    user: { name: 'Ece Yılmaz', avatar: 'EY' },
    content: 'Bugün fırından kurtardığım bayat ekmeklerle harika bir "Peynirli Ekmek Tatlısı" yaptım! 🥖✨ #SıfırAtık',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80',
    likes: 124,
    comments: 18,
    savedCarbon: '1.2kg'
  },
  {
    id: 2,
    user: { name: 'Can Mert', avatar: 'CM' },
    content: 'Manavdan aldığım son dakika meyvelerinden Smoothies party! 🍓🥤 Çocuklar bayıldı.',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&q=80',
    likes: 89,
    comments: 12,
    savedCarbon: '0.8kg'
  }
];

export const CommunityFeed = () => {
  return (
    <div className="space-y-8">
      {/* Feed Header */}
      <div className="flex justify-between items-center bg-white/5 p-6 rounded-[2rem] border border-white/10 backdrop-blur-md">
        <div>
          <h3 className="text-2xl font-black text-white flex items-center gap-2">
            Community Hub <Sparkles className="h-5 w-5 text-purple-400" />
          </h3>
          <p className="text-slate-400 text-sm">Kurtardığın gıdalarla neler yaptığını paylaş!</p>
        </div>
        <button className="bg-purple-600 p-4 rounded-full text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/20 active:scale-95">
          <Plus className="h-6 w-6" />
        </button>
      </div>

      {/* Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card overflow-hidden group border-white/5 hover:border-purple-500/30 transition-all"
          >
            {/* Post Header */}
            <div className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold border border-purple-500/30">
                {post.user.avatar}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.user.name}</p>
                <p className="text-[10px] text-slate-500 font-mono">15 dk önce • Eco Hero</p>
              </div>
            </div>

            {/* Post Image */}
            <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
              <Image 
                src={post.image} 
                alt="Post content" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                <Leaf className="h-3 w-3 text-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-400">-{post.savedCarbon} CO2</span>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-6">
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                {post.content}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-slate-400 hover:text-red-400 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span className="text-xs font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-slate-400 hover:text-purple-400 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-xs font-bold">{post.comments}</span>
                  </button>
                </div>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Leaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
