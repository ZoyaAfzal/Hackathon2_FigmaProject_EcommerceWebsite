'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

interface Category {
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
  id: string;
}

function Products() {
  const [menProducts, setMenProducts] = useState<Category[]>([]);
  const [womenProducts, setWomenProducts] = useState<Category[]>([]);
  const menScrollRef = useRef<HTMLDivElement>(null);
  const womenScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect is running"); 
    async function fetchProducts() {
      const query = `*[_type == "categories"]{
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
        tag,
        id
      }`;

      try {
        const fetchedProducts = await client.fetch(query);
        console.log("Fetched Products:", fetchedProducts);
        setMenProducts(fetchedProducts.filter((p: Category) => p.category?.toLowerCase() === "men"));
        setWomenProducts(fetchedProducts.filter((p: Category) => p.category?.toLowerCase() === "women"));
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts(); 
  }, []);

    // Handles next/prev scrolling
    const handleScroll = (type: "men" | "women", direction: "next" | "prev") => {
      const scrollContainer = type === "men" ? menScrollRef.current : womenScrollRef.current;
      if (scrollContainer) {
        const scrollAmount = 300; // Adjust for 2 products width
        if (direction === "next") {
          scrollContainer.scrollLeft += scrollAmount;
        } else {
          scrollContainer.scrollLeft -= scrollAmount;
        }
      }
    };

  return (
    <div className="lg:max-w-[1200px] max-w-[1460px] xl:w-[1460px] md:w-[700px] sm:w-[600px] xs:w-[360px] xxs:w-[260px] w-full h-auto xs:mt-[20%] px-4 md:mt-[14%] sm:mt-[18%] mt-[20%] sm:h-[700px] lg:mt-28 ml-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row lg:flex-row  justify-between items-center lg:items-start">
        <h3 className="text-3xl md:text-4xl font-semibold font-sans hover:text-colors-secondaryColor">
          Gear Up
        </h3>
        </div>

  <div className="flex flex-col lg:flex-row  gap-6 mt-6 w-full">
  {/* Men's Section */}
  <div className="w-full lg:w-1/2 xl:w-1/2">
    <div className="flex justify-between items-center mb-4">
      <p className="font-semibold text-lg">Shop Men&apos;s</p>
      <div className="flex gap-3">
        <FaChevronLeft
          onClick={() => handleScroll("men", "prev")}
          className="text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer"
        />
        <FaChevronRight
          onClick={() => handleScroll("men", "next")}
          className="text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer"
        />
      </div>
    </div>

    <div ref={menScrollRef} className="flex gap-4 overflow-x-auto scroll-container scrollbar-hide scroll-smooth snap-x">
      {menProducts.length > 0 ? (
        menProducts.map((product) => (
          <Link key={product._id} href={`/products/${product._id}`}>
          <div key={product._id} className="w-[300px] h-[400px] flex-shrink-0 bg-white rounded-lg shadow-md p-2 border border-gray-200 hover:border-gray-400 hover:shadow-2xl transition">
            <Image src={product.imageUrl} alt={product.name} width={300} height={300} className="rounded-lg" />
            <p className="text-sm font-semibold mt-1 ">{product.name}</p>
            <p className="text-sm font-semibold mt-1">{product.style}</p>
            <p className="text-sm font-semibold ">{product.tag}</p>
            <p className="text-gray-500 text-sm">₹{product.price.toFixed(2)}</p>
          </div>
      </Link>
        ))
      ) : (
        <p>No products available for Men.</p>
      )}
    </div>
  </div>

  {/* Women's Section */}
  <div className="w-full lg:w-1/2 xl:w-1/2">
    <div className="flex justify-between items-center mb-4">
      <p className="font-semibold text-lg">Shop Women&apos;s</p>
      <div className="flex gap-3">
        <FaChevronLeft
          onClick={() => handleScroll("women", "prev")}
          className="text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer"
        />
        <FaChevronRight
          onClick={() => handleScroll("women", "next")}
          className="text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer"
        />
      </div>
    </div>

    <div ref={womenScrollRef} className="flex gap-4 overflow-x-auto scroll-container scrollbar-hide scroll-smooth snap-x">
      {womenProducts.length > 0 ? (
        womenProducts.map((product) => (
          <Link key={product._id} href={`/products/${product._id}`}>
          <div key={product._id} className="min-w-[300px] h-[400px] flex-shrink-0 bg-white rounded-lg shadow-md p-2 border border-gray-200 hover:border-gray-400 hover:shadow-2xl transition">
            <Image src={product.imageUrl} alt={product.name} width={300} height={400} className="rounded-lg" />
            <p className="text-sm font-semibold mt-1">{product.name}</p>
            <p className="text-sm font-semibold mt-1">{product.style}</p>
            <p className="text-sm font-semibold">{product.tag}</p>
            <p className="text-gray-500 text-sm">₹{product.price.toFixed(2)}</p>
          </div>
          </Link>
        ))
      ) : (
        <p>No products available for Women.</p>
      )}
    </div>
  </div>
</div>
    </div>
    
 
   
  );
}

export default Products;
