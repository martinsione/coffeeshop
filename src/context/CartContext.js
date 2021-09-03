import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children, initialValue = [] }) => {
  const [cartItems, setCartItems] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item, quantity) => {
    // index => If ${item} is not in the cart return -1. Else append quantity
    const index = cartItems.findIndex((arr) => arr.item.id === item.id);
    if (index === -1) {
      setCartItems([...cartItems, { item, quantity }]);
    } else {
      const appendItem = [...cartItems];
      appendItem[index].quantity += quantity;
      setCartItems(appendItem);
    }
  };

  const clearItems = () => setCartItems([]);

  const hasItem = (id) => cartItems.some((arr) => arr.item.id === id);

  const removeItem = (id) =>
    setCartItems(cartItems.filter((arr) => arr.item.id !== id));

  const totalItems = () =>
    cartItems?.reduce((acc, arr) => arr.quantity + acc, 0);

  const totalValue = () =>
    cartItems?.reduce((acc, arr) => arr.item.price * arr.quantity + acc, 0);

  const cart = {
    add: addItem,
    clear: clearItems,
    has: hasItem,
    items: cartItems,
    remove: removeItem,
    totalItems,
    totalValue,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
