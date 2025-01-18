import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { createClient } from '@sanity/client';



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



async function NikeAir () {
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
    const categories: Category[] = await client.fetch(query);
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 lg:mt-18 px-4 sm:px-8 ">
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
            <FaAngleRight className="text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full" />
            <FaChevronLeft className="text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full" />
          </div>
        </div>

  {/*     
     
          <div className="flex flex-col items-center">
            <Image
              src={nikeairmax1}
              alt="Nike Air Max Pulse"
              width={441}
              height={441}
              className="w-full rounded-lg"
            />
            <div className="bottom-0 w-full bg-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold hover:text-colors-secondaryColor">Nike Air Max Pulse</h2>
                <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹13,995</span>
              </div>
              <span className="text-gray-600 text-sm">Women&apos;s Shoes</span>
            </div>
          </div>

        
          <div className="flex flex-col items-center">
            <Image
              src={nikeairmax2}
              alt="Nike Air Max Pulse"
              width={441}
              height={441}
              className="w-full rounded-lg"
            />
            <div className="bottom-0 w-full bg-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold hover:text-colors-secondaryColor">Nike Air Max Pulse</h2>
                <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹13,995</span>
              </div>
              <span className="text-gray-600 text-sm">Men&apos;s Shoes</span>
            </div>
          </div>

        
                
          <div className="flex flex-col items-center">
            <Image
              src={nikeairmax3}
              alt="Nike Air Max Pulse"
              width={441}
              height={441}
              className="w-full rounded-lg"
            />
            <div className="bottom-0 w-full bg-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold hover:text-colors-secondaryColor">Nike Air Max Pulse</h2>
                <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹13,995</span>
              </div>
              <span className="text-gray-600 text-sm">Men&apos;s Shoes</span>
            </div>
          </div> */}



      {/* Categories Section */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {categories.map((category) => (
            <div key={category._id} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg">
              <div className="flex flex-col items-center">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover rounded-sm"
                />
                  <div className="bottom-0 w-full bg-white/25 p-2">
                  <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#111111] mt-4">{category.name}</h3>
                <span className="font-semibold text-sm hover:text-colors-secondaryColor">MRP: {" "}₹{category.price}.00</span>
                </div>
                <span className="text-gray-600 text-sm">{category.category}</span>
              </div>
            </div>
        </div>
        
      ))}
      </div>
      
     </div>
  </div>
  
);
};


export default NikeAir;

