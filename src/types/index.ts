export interface Store {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  imageUrl?: string;
  rating: number;
  distance?: number; // Calculated distance in km
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  discountPrice: number;
  expiryDate: string;
  imageUrl?: string;
  stock: number;
  storeId: string;
  store?: Store;
}
