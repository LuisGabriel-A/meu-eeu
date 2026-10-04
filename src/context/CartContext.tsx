'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';
import type { CartItem, CartItemInput } from '../types';

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (item: CartItemInput) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  totalItems: number;
  subtotal: number;
  toastMessage: string | null;
  showToast: (message: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'meu_eeu_cart';

export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    let savedItems: CartItem[] = [];

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) savedItems = JSON.parse(saved) as CartItem[];
    } catch (error) {
      console.error('Não foi possível carregar o carrinho salvo.', error);
    }

    const timer = window.setTimeout(() => {
      setCartItems(savedItems);
      setIsCartLoaded(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isCartLoaded) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Não foi possível salvar o carrinho.', error);
    }
  }, [cartItems, isCartLoaded]);

  const showToast = (message: string) => {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(null), 3500);
  };

  const addToCart = (item: CartItemInput) => {
    const quantity = item.quantity ?? 1;

    setCartItems((previous) => {
      const existingIndex = previous.findIndex(
        (existing) =>
          existing.artworkId === item.artworkId &&
          existing.sizeId === item.sizeId &&
          existing.material === item.material,
      );

      if (existingIndex === -1) return [...previous, { ...item, quantity }];

      return previous.map((existing, index) =>
        index === existingIndex
          ? { ...existing, quantity: existing.quantity + quantity }
          : existing,
      );
    });

    showToast(
      `"${item.title}" (${item.sizeName || item.sizeId}) adicionado ao carrinho!`,
    );
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCartItems((previous) =>
      previous.filter((_, itemIndex) => itemIndex !== index),
    );
  };

  const updateQuantity = (index: number, delta: number) => {
    setCartItems((previous) =>
      previous.flatMap((item, itemIndex) => {
        if (itemIndex !== index) return [item];
        const quantity = item.quantity + delta;
        return quantity > 0 ? [{ ...item, quantity }] : [];
      }),
    );
  };

  const clearCart = () => setCartItems([]);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const subtotal = cartItems.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded border border-stone-700 bg-[#1A1A1A] px-5 py-3 text-sm font-light tracking-wide text-white shadow-2xl animate-slide-up">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
