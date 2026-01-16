import { useState, useEffect } from "react";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Failed to load wishlist:", error);
        setWishlist([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isLoaded]);

  // Add product to wishlist
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  // Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Get all wishlist items
  const getWishlist = () => wishlist;

  // Clear wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    getWishlist,
    clearWishlist,
    isLoaded,
  };
};
