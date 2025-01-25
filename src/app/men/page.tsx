'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/productCard';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';



function MenCategorySection() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const selectedCategories = [
    "Men's Shoes",
    "Men's Short-Sleeve Graphic Fitness Top",
    "Men's Short-Sleeve Fitness Top",
    "Men's Tight-Fit Sleeveless Top",
    "Men's Short-Sleeve Running Top",
  ];

  useEffect(() => {
    // Fetch all products from Sanity
    client
      .fetch(
        `*[_type == "products" && category in $categories]{
          _id,
          name,
          price,
          "imageUrl": image.asset->url,
          category
        }`,
        { categories: selectedCategories }
      )
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, );

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-6 mb-4 hover:text-gray-400 hover:underline hover:underline-offset-2">
        Men&apos;s Products
      </h1>
      <div className="flex justify-center items-center">
        {isLoading ? (
          <p className="text-center text-lg font-medium">Loading...</p>
        ) : (
          <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-6 md:mt-12 mt-8 lg:mt-12">
            {products.map((product) => (
              <Link key={product} href={`/featuredProducts/${ProductCard}`}>
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