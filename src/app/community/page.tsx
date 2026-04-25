'use client';

import { CommunityFeed } from '@/features/community/components/community-feed';
import { PageTransition } from '@/components/page-transition';

export default function CommunityPage() {
  return (
    <PageTransition>
      <div className="p-8 lg:p-12 max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black text-white tracking-tighter mb-4">Community Hub</h1>
          <p className="text-slate-400 text-lg">İsrafı önleyenlerin buluşma noktası. Deneyimlerini ve tariflerini paylaş.</p>
        </header>

        <CommunityFeed />
      </div>
    </PageTransition>
  );
}
