'use client';

import dynamic from 'next/dynamic';
import { PageTransition } from '@/components/page-transition';

// Large component loaded lazily to improve TTI
const MapComponent = dynamic(
  () => import('./components/map-view').then((mod) => mod.MapView),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-emerald-50 animate-pulse rounded-3xl" />
  }
);

export default function ExplorePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-bold text-emerald-950 mb-8">Yakındaki Fırsatlar</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MapComponent />
          </div>
          <div className="bg-white p-6 rounded-3xl border border-emerald-100 h-fit">
            <h2 className="font-bold text-emerald-900 mb-4">Filtreler</h2>
            {/* Filter UI */}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
