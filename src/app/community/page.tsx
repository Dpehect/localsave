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
          <div className="lg:col-span-8">
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
