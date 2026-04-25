'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Package, Tag, Clock, Image as ImageIcon, Loader2 } from 'lucide-react';

import { toast } from 'sonner';

const productSchema = z.object({
  name: z.string().min(3, 'Ürün adı en az 3 karakter olmalıdır'),
  category: z.string().min(1, 'Kategori seçiniz'),
  price: z.coerce.number().min(0.1, 'Fiyat 0\'dan büyük olmalıdır'),
  discountPrice: z.coerce.number().min(0.1, 'İndirimli fiyat 0\'dan büyük olmalıdır'),
  expiryDate: z.string().min(1, 'Son kullanma tarihi gereklidir'),
  stock: z.coerce.number().min(1, 'Stok en az 1 olmalıdır'),
});

type ProductFormData = z.infer<typeof productSchema>;

interface AddProductFormProps {
  onSubmit: (data: ProductFormData) => Promise<void>;
  isLoading?: boolean;
}

export const AddProductForm: React.FC<AddProductFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const handleFormSubmit = async (data: ProductFormData) => {
    try {
      await onSubmit(data);
      toast.success('Ürün başarıyla yayınlandı!');
      reset();
    } catch (error) {
      toast.error('Ürün yayınlanırken bir hata oluştu.');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-emerald-900">Yeni Ürün Ekle</h2>
        <p className="text-emerald-600">İndirimli ürün bilgilerini girerek mahallenize duyurun.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-emerald-700 flex items-center gap-2">
            <Package className="h-4 w-4" /> Ürün Adı
          </label>
          <input
            {...register('name')}
            aria-label="Ürün Adı"
            aria-invalid={errors.name ? 'true' : 'false'}
            className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            placeholder="Örn: Tam Buğday Ekmeği"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-emerald-700">Kategori</label>
          <select
            {...register('category')}
            className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
          >
            <option value="">Seçiniz</option>
            <option value="bakery">Fırın</option>
            <option value="produce">Manav</option>
            <option value="dairy">Süt ve Şarküteri</option>
            <option value="market">Market</option>
          </select>
          {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
        </div>

        {/* Price */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-emerald-700 flex items-center gap-2">
            <Tag className="h-4 w-4" /> Orijinal Fiyat (₺)
          </label>
          <input
            type="number"
            step="0.01"
            {...register('price')}
            className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
        </div>

        {/* Discount Price */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-emerald-700">İndirimli Fiyat (₺)</label>
          <input
            type="number"
            step="0.01"
            {...register('discountPrice')}
            className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          {errors.discountPrice && <p className="text-red-500 text-xs">{errors.discountPrice.message}</p>}
        </div>

        {/* Expiry Date */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-emerald-700 flex items-center gap-2">
            <Clock className="h-4 w-4" /> Son Kullanma Tarihi
          </label>
          <input
            type="datetime-local"
            {...register('expiryDate')}
            className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          {errors.expiryDate && <p className="text-red-500 text-xs">{errors.expiryDate.message}</p>}
        </div>

        {/* Stock */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-emerald-700">Stok Adedi</label>
          <input
            type="number"
            {...register('stock')}
            className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          {errors.stock && <p className="text-red-500 text-xs">{errors.stock.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-100"
      >
        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <ImageIcon className="h-5 w-5" />}
        Ürünü Yayınla
      </button>
    </form>
  );
};
