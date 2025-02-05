'use client'
import React, { useEffect, useMemo, useState } from 'react';
import ProductCard from '@/components/productCard';
import { client } from '@/sanity/lib/client';
import Link from "next/link";

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

function WomenCategorySection() {
    const [products, setProducts] = useState<Product[]>([]); 
    const [isLoading, setIsLoading] = useState(true);


  const selectedCategories = useMemo (() => [
    "Women's Shoes" , 
    "Women's Basketball Jersey", 
    "Women's Jersey", 
    "Women's Mid-Rise Biker Shorts"
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
      <h1 className="text-center text-2xl font-bold mt-6 mb-4 hover:text-gray-400 hover:underline hover:underline-offset-2 ">
        Women&apos;s Products
      </h1>
      {isLoading ? ( 
         <div className="text-center mt-6">Loading products...</div>
        ) : (
      <div className="flex justify-center items-center">
      <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-6 md:mt-12 mt-8 lg:mt-12">
        {products.map((product) => (
         <Link key={product._id} href={`/women/${product._id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
        </div>
        )}
    </div>
  );
}

export default WomenCategorySection;