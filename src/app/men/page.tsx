'use client'
import React, { useEffect, useMemo, useState } from 'react';
import ProductCard from '@/components/productCard';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';


interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  sizes: string[];
  rating: number;
  stock: number;
  discount: number;
  category: string;
  color: string[];
  details: string;
  style: string;
  tag: string;
}

function MenCategorySection() {
  const [products, setProducts] = useState<Product[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const selectedCategories = useMemo(() => [
    "Men's Shoes",
    "Men's Short-Sleeve Graphic Fitness Top",
    "Men's Short-Sleeve Fitness Top",
    "Men's Tight-Fit Sleeveless Top",
    "Men's Short-Sleeve Running Top",
  ],
  []
);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products" && category in $categories] {
          _id,
          name,
          "imageUrl": image.asset->url,
          description,
          price,
          sizes,
          rating,
          stock,
          discount,
          category,
          color,
          details,
          style,
          tag
        }`,
        { categories: selectedCategories }
      )
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, [selectedCategories]);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-6 mb-4">Men&apos;s Products</h1>
      <div className="flex justify-center items-center">
        {isLoading ? (
          <p className="text-center text-lg font-medium">Loading...</p>
        ) : (
          <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-6">
            {products.map((product) => (
              <Link key={product._id} href={`/men/${product._id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MenCategorySection;
