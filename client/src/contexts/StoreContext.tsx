/**
 * The Atelier Procession: frictionless, tactile prototype commerce state.
 * Persists only local demo cart and wishlist selections; no checkout or API claims.
 */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products, type Product } from "@/lib/data";

type CartItem = { productId: string; quantity: number };
type StoreContextValue = {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  setCartOpen: (open: boolean) => void;
  cartCount: number;
  subtotal: number;
  cartProducts: { product: Product; quantity: number }[];
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

const readSaved = <T,>(key: string, fallback: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
};

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => readSaved("gcs-demo-cart", []));
  const [wishlist, setWishlist] = useState<string[]>(() => readSaved("gcs-demo-wishlist", []));
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => localStorage.setItem("gcs-demo-cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("gcs-demo-wishlist", JSON.stringify(wishlist)), [wishlist]);

  const value = useMemo<StoreContextValue>(() => {
    const cartProducts = cart.flatMap((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return product ? [{ product, quantity: item.quantity }] : [];
    });
    return {
      cart,
      wishlist,
      isCartOpen,
      setCartOpen,
      cartCount: cart.reduce((total, item) => total + item.quantity, 0),
      subtotal: cartProducts.reduce((total, item) => total + item.product.price * item.quantity, 0),
      cartProducts,
      addToCart: (productId) => {
        setCart((existing) => {
          const item = existing.find((entry) => entry.productId === productId);
          return item
            ? existing.map((entry) => entry.productId === productId ? { ...entry, quantity: entry.quantity + 1 } : entry)
            : [...existing, { productId, quantity: 1 }];
        });
        setCartOpen(true);
      },
      removeFromCart: (productId) => setCart((existing) => existing.filter((item) => item.productId !== productId)),
      updateQuantity: (productId, quantity) => setCart((existing) => quantity < 1 ? existing.filter((item) => item.productId !== productId) : existing.map((item) => item.productId === productId ? { ...item, quantity } : item)),
      toggleWishlist: (productId) => setWishlist((existing) => existing.includes(productId) ? existing.filter((id) => id !== productId) : [...existing, productId]),
    };
  }, [cart, wishlist, isCartOpen]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}
