'use client';
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { createClient } from '@sanity/client';
import Link from "next/link";



// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});


interface Category {
  _id: string;
  name: string;
  image: string;
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



function NikeAir () {
  const [categories, setCategory] = useState<Category[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
 
 
  useEffect(() => {
  const fetchCategories = async () => {
    try {
  const query = `*[_type == "category"] {
    _id,
    name,
    "image": image.asset->url,
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
  }`;
    const data: Category[] = await client.fetch(query);
    setCategory(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
    const scrollAmount = 300;

    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= scrollAmount;
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    };
  return (
    <div className="lg:w-[1262px] max-w-[1320px] w-full flex flex-col items-center justify-center mt-10 lg:mt-18 md:mt-0 px-4 sm:px-8 ">
      {/* Header Section */}
      <div className="text-center">
        <h3 className="text-base sm:text-lg font-semibold text-[#111111] hover:text-colors-secondaryColor">
          First Look
        </h3>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase font-semibold font-sans text-[#111111] mt-4">
          Nike Air Max Pulse
        </h1>
        <p className="font-semibold text-sm sm:text-base mt-6 leading-relaxed sm:px-16 md:px-20">
          Extreme Comfort. Hyper durable Max Volume. Introducing the Air Max
          Pulse
          <br />
          <span>--designed to push you past your limits and help you go to the max.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
          <button className="w-40 h-10 bg-[#111111] text-white rounded-3xl hover:bg-colors-secondaryColor">
            Notify Me
          </button>
          <button className="w-44 h-10 bg-[#111111] text-white rounded-3xl hover:bg-colors-secondaryColor">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="w-full mt-20">
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-3xl font-semibold font-sans hover:text-colors-secondaryColor">
            Best of Air Max
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold hover:text-colors-secondaryColor">Shop</p>
            <button className="flex">
            <FaChevronLeft onClick={scrollLeft} className="text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full" />
            </button>
            <button className="flex">
            <FaAngleRight  onClick={scrollRight} className="text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full font-semibold" />
            </button>
          </div>
        </div>


      {/* Categories Section */} 
      <div  ref={scrollRef} className="scroll-container overflow-x-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:mt-2 lg:space-x-4 "> 
          {categories.map((category) => ( 
                <Link key={category._id} href={`/nikeAir/${category._id}`}>
            <div key={category._id} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl w-[350px] border border-gray-200 transition">
              <div className="flex flex-col items-center sm:mt-2 border border-gray-200 hover:border-gray-500 rounded-lg hover:shadow-lg transition">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={480}
                  height={480}
                  className="w-full h-64 object-cover rounded-sm"
                />
                  <div className="bottom-0 w-full bg-white/25 p-2">
                  <div className="flex justify-between items-center gap-4">
                <h3 className="text-lg font-semibold text-[#111111] mt-4">{category.name}</h3>
                <span className="font-semibold text-sm hover:text-colors-secondaryColor mt-4">MRP: {" "}₹{category.price}.00</span>
                </div>
                <span className="text-gray-600 text-sm">{category.category}</span>
              </div>
            </div>
        </div>
        </Link>
      ))}
      </div>
      
     </div>
  </div>
  
);
};


export default NikeAir;

