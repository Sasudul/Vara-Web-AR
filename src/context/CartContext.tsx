import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface CartItem {
  id: string; // The physical string ID ("vara-sofa")
  name: string;
  price: number; 
  quantity: number;
  material: string;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, material: string) => void;
  updateQuantity: (id: string, material: string, qty: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

// We rely on local state synced to localStorage for now.
// Realistically, backend cart sync would be dispatched here when "user" exists.
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("vara_cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("vara_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id && i.material === item.material);
      if (exists) {
        return prev.map((i) =>
          (i.id === item.id && i.material === item.material) ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string, material: string) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.material === material)));
  };

  const updateQuantity = (id: string, material: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(id, material);
    setCart((prev) =>
      prev.map((item) => (item.id === id && item.material === material ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
