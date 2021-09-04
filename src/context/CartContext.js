import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children, initialValue = [] }) => {
  const [cartItems, setCartItems] = useState(initialValue);

  useEffect(() => {
    // Only keep items with at least a unit
    cartItems.forEach((arr) => arr?.quantity < 1 && removeItem(arr.item.id));
    localStorage.setItem("cart", JSON.stringify(cartItems));
    //eslint-disable-next-line
  }, [cartItems]);

  const addItem = (item, quantity) => {
    // index => If ${item} is not in the cart return -1. Else append quantity
    const index = cartItems.findIndex((arr) => arr.item.id === item.id);
    index === -1
      ? setCartItems([...cartItems, { item, quantity }])
      : updateItemQuantity(item.id, quantity, "append");
  };

  const clearItems = () => setCartItems([]);

  const hasItem = (id) => cartItems.some((arr) => arr.item.id === id);

  const removeItem = (id) =>
    setCartItems(cartItems.filter((arr) => arr.item.id !== id));

  const totalItems = () =>
    cartItems?.reduce((acc, arr) => arr.quantity + acc, 0);

  const totalValue = () =>
    cartItems?.reduce((acc, arr) => arr.item.price * arr.quantity + acc, 0);

  const updateItemQuantity = (id, quantity, append) => {
    const index = cartItems.findIndex((arr) => arr.item.id === id);
    const appendItem = [...cartItems];
    append === "append"
      ? (appendItem[index].quantity += quantity)
      : (appendItem[index].quantity = quantity);
    setCartItems(appendItem);
  };

  const cart = {
    add: addItem,
    clear: clearItems,
    has: hasItem,
    items: cartItems,
    remove: removeItem,
    totalItems,
    totalValue,
    updateItemQuantity,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
