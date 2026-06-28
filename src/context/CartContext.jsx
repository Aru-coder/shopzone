import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Load login state
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLogin = localStorage.getItem("login");
    return savedLogin ? JSON.parse(savedLogin) : false;
  });

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save login state
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    alert("Product Added to Cart!");
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Login
  const login = () => {
    setIsLoggedIn(true);
  };

  // Logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;