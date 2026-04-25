import { Store } from '@/types';
import { supabase } from '@/lib/supabase';

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const fetchNearbyStores = async (lat: number, lng: number, radiusKm: number = 5): Promise<Store[]> => {
  // In a real app with PostGIS:
  // const { data, error } = await supabase.rpc('get_stores_in_radius', { lat, lng, radius_km: radiusKm });
  
  // Mocking the response for now
  const { data: stores, error } = await supabase.from('Store').select('*');
  
  if (error) throw error;

  return (stores || [])
    .map(store => ({
      ...store,
      distance: calculateDistance(lat, lng, store.latitude, store.longitude)
    }))
    .filter(store => store.distance <= radiusKm)
    .sort((a, b) => (a.distance || 0) - (b.distance || 0));
};
