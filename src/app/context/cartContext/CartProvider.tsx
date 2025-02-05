"use client";

import { createContext, useContext, useEffect, useState, ReactNode} from "react";

interface CartItem {
  _id: string;
  name: string;
  category: string;
  selectedSize: string;
  details: string;
  price: number;
  totalPrice: number;
  quantity: number;
  imageUrl: string;
}

interface CartContextType {
  cartItems: CartItem[];
 setCartItems: (items: CartItem[]) => void;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: {children: ReactNode}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };
  //const contextValue = { cartItems, setCartItems, addToCart, clearCart };
  return (
    <CartContext.Provider  value={{ cartItems, setCartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
