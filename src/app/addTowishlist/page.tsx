'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface WishlistItem {
  _id: string;
  name: string;
  imageUrl: string;
  price: string;
  selectedSize: string;
}

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    // Load wishlist from localStorage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
  },[] );

  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlistItems.filter((item) => item._id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="max-w-[1344px] w-full h-auto mx-auto p-6">
      <h1 className="text-2xl font-bold my-6">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => (
          <div key={item._id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center gap-4">
              <Image src={item.imageUrl} alt={item.name} width={16} height={16} className="w-16 h-16 object-cover" />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm">Size: {item.selectedSize}</p>
                <p className="text-sm">Price: {item.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveFromWishlist(item._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Remove from Wishlist
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistPage;
