import { create } from "zustand";
import { Product } from "../types/product";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  // 狀態
  isOpen: boolean;
  cart: CartItem[];

  // 購物車開關 Actions
  openCart: () => void;
  closeCart: () => void;

  // 商品操作 Actions
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, delta: number) => void;

  // 計算邏輯
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartState>()((set, get) => ({
  isOpen: false,
  cart: [],

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      }

      return {
        cart: [...state.cart, { product, quantity }],
      };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    }));
  },

  updateQuantity: (productId, delta) => {
    set((state) => ({
      cart: state.cart
        .map((item) => {
          if (item.product.id === productId) {
            const newQuantity = item.quantity + delta;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null),
    }));
  },

  getTotalItems: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  },
}));
