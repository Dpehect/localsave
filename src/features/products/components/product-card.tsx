'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Clock, MapPin, Tag } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  distance?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, distance }) => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const expiry = new Date(product.expiryDate).getTime();
      const diff = expiry - now;

      if (diff <= 0) {
        setTimeLeft('Süre doldu');
        clearInterval(timer);
      } else {
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${hours}sa ${minutes}dk`);
      }
    }, 1000 * 60);

    return () => clearInterval(timer);
  }, [product.expiryDate]);

  const discountPercentage = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100
  );

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-md transition-all duration-300">
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
        <Tag className="h-3 w-3" />
        %{discountPercentage} İndirim
      </div>

      {/* Product Image */}
      <div className="relative h-48 w-full bg-emerald-50">
        <Image
          src={product.imageUrl || '/placeholder-product.jpg'}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-bold text-white text-lg truncate">{product.name}</h3>
          <p className="text-slate-400 text-xs mb-2">{product.store?.name || 'Smart Store v2.0'}</p>
        </div>

        <div className="bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Price Decay Active</span>
            <span className="text-[10px] font-mono text-emerald-400">-%20 Next Drop</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: '100%' }}
              animate={{ width: '60%' }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="h-full bg-emerald-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 line-through">₺{product.price}</span>
            <span className="text-2xl font-black text-emerald-400">₺{product.discountPrice}</span>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full border border-orange-400/20">
              <Clock className="h-3 w-3" />
              {timeLeft}
            </div>
          </div>
        </div>

        <button className="w-full cyber-gradient text-white py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95 transition-all">
          Secure Reservation
        </button>
      </div>
    </div>
  );
};

export const ProductCardSkeleton = () => (
  <div className="animate-pulse bg-white rounded-2xl border border-emerald-50 overflow-hidden">
    <div className="h-48 bg-emerald-50" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-emerald-100 rounded w-3/4" />
      <div className="h-3 bg-emerald-50 rounded w-1/2" />
      <div className="flex justify-between items-center py-2">
        <div className="h-6 bg-emerald-100 rounded w-1/4" />
        <div className="h-6 bg-orange-50 rounded w-1/4" />
      </div>
      <div className="h-10 bg-emerald-100 rounded-xl w-full" />
    </div>
  </div>
);
