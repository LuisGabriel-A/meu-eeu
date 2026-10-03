export type ArtworkCategory = 'prints' | 'originais';
export type ArtworkType = 'print' | 'original';

export interface ArtworkSize {
  id: string;
  name: string;
  material: string;
  price: number;
}

export interface Artwork {
  id: string;
  title: string;
  category: ArtworkCategory;
  medium: string;
  originalMedium: string;
  year: string;
  tag: string;
  badgeType: 'print' | 'original' | 'new';
  isNew: boolean;
  isAvailable: boolean;
  startingPrice: number;
  basePrice: number;
  type: ArtworkType;
  dimensions?: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  dimensionsInfo: string;
  materialInfo: string;
  shippingDays: string;
  sizes: ArtworkSize[];
}

export interface CartItem {
  artworkId: string;
  title: string;
  image: string;
  sizeId: string;
  sizeName?: string;
  material: string;
  unitPrice: number;
  quantity: number;
  type: ArtworkType | 'commission';
  isCommission?: boolean;
  commissionType?: string;
}

export type CartItemInput = Omit<CartItem, 'quantity'> & { quantity?: number };

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  title: string;
  likes: number;
  comments: number;
  isVideo: boolean;
  text: string;
}
