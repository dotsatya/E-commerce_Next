// // import { Button } from "@/components/ui/button.js";
// import React from "react";

// const Page = () => {
//   return (
//     <div className=" flex-1 transition-all duration-300 p-8 pt-8 ">
//       <h1 className="mb-4 text-2xl font-bold">HOME</h1>

//       <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
//         <div className="mb-4 p-4 border rounded-xl h-[200px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[260px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[220px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[300px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[180px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[340px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[260px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[230px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[210px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[210px] break-inside-avoid"></div>
//         <div className="mb-4 p-4 border rounded-xl h-[260px] break-inside-avoid"></div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/use-wishlist";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToWishlist, removeFromWishlist, isInWishlist, isLoaded } =
    useWishlist();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleWishlistClick = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-semibold">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-2">Featured Products</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Discover our latest collection
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-[#1a1a1a] dark:border-gray-700"
          >
            {/* Image */}
            <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <img
                src={`/${product.image}`}
                alt={product.name}
                className="h-32 w-32 object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                {!product.inStock && (
                  <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-2 py-1 rounded">
                    Out
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                {product.description}
              </p>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-gray-500 text-sm">
                    {product.category}
                  </span>
                  <div className="text-yellow-500 text-sm">
                    ★ {product.rating}
                  </div>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link href={`/${product.id}`} className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700">
                    View
                  </Button>
                </Link>
                <button
                  onClick={() => handleWishlistClick(product)}
                  className={`px-4 py-2 rounded transition-colors ${
                    isLoaded && isInWishlist(product.id)
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                  }`}
                  title={
                    isLoaded && isInWishlist(product.id) ? "Remove" : "Add"
                  }
                >
                  {isLoaded && isInWishlist(product.id) ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
