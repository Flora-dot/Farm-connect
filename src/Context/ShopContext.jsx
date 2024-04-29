import React, { useState, useEffect } from "react";
import { createContext } from "react";
import products from "../components/productData";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (const product of products) {
    cart[product.id] = 0;
  }
  return cart;
};

const calculateSubtotal = (cartItems) => {
  return Object.keys(cartItems).reduce((total, productId) => {
    const product = products.find((p) => p.id === productId);
    const price = product ? parseFloat(product.price) : 0;
    return total + price * cartItems[productId];
  }, 0);
};

const calculateTotal = (subtotal, deliveryFee) => {
  return subtotal + deliveryFee;
};


const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    console.log("Component mounted, loading cart from localStorage...");
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      console.log("Stored cart found:", storedCart);
      setCartItems(JSON.parse(storedCart));
    } else {
      console.log("No stored cart found.");
      setCartItems(getDefaultCart());
    }
  }, []);


  useEffect(() => {
    console.log("Cart items changed, updating localStorage:", cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  const deliveryFee = 4000;

  const subtotal = calculateSubtotal(cartItems);
  const total = calculateTotal(subtotal, deliveryFee);

  const contextValue = {
    products,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    total,
    subtotal,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
