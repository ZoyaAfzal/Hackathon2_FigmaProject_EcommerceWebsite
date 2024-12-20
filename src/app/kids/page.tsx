import React from 'react';
import { products } from '../data/productsData';
import ProductCard from '@/components/productCard';
import Link from "next/link";

function KidsCategorySection() {
      const selectedCategories = ["Older Kids' Shoe"];    
          
          const filteredProducts = products.filter((product) =>
            selectedCategories.includes(product.category) 
          );
        
  return (
    <div>
        <h1 className="text-center text-2xl font-bold mt-6 mb-4 hover:text-gray-400 hover:underline hover:underline-offset-2 ">
        Men&aapos;s Products
      </h1>
      <div className="flex justify-center items-center">
      <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-6 md:mt-12 mt-8 lg:mt-12">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/featuredProducts/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
      </div>
    </div>
  )
}

export default KidsCategorySection;