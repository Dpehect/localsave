'use client';

import { CommunityFeed } from '@/features/community/components/community-feed';
import { CommunityChat } from '@/features/chat/components/community-chat';
import { PageTransition } from '@/components/page-transition';

export default function CommunityPage() {
  return (
    <PageTransition>
      <div className="p-8 lg:p-12 max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black text-white tracking-tighter mb-4">Community Hub Pro</h1>
          <p className="text-slate-400 text-lg">Mahallenizle etkileşime geçin, tariflerinizi paylaşın ve israfı beraber bitirin.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* Community Progress - NEW DATA DEPTH */}
            <div className="glass-card p-8 border-white/5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-white uppercase">Haftalık Topluluk Hedefi</h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">1.2 Ton / 2 Ton</span>
              </div>
              <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                />
              </div>
              <p className="text-xs text-slate-500 mt-4 font-medium">Hedefe ulaşıldığında tüm topluluk üyelerine +200 ECO Puan tanımlanacaktır.</p>
            </div>
            
            <CommunityFeed />
          </div>
          <div className="lg:col-span-4">
            <CommunityChat />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
