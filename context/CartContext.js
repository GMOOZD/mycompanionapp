import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prev) =>
      prev.filter((item) => item.season_number !== itemToRemove.season_number)
    );
  };

  const isInCart = (season_number) => {
    return cartItems.some((item) => item.season_number === season_number);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
