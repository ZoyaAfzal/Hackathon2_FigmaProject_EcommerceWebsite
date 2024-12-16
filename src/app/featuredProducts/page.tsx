'use client';
import MainNav from '@/components/mainNav';
import { IoMdSwitch } from "react-icons/io";
import TopNavbar from '@/components/topNavbar';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { products } from '../data/productsData';
import ProductCard from '@/components/productCard';
import Link from 'next/link';
import React, { useState } from 'react';
import Footer from '@/components/footer';

const sidebarList = [
  "Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts", "Jackets",
  "Trousers & Tights", "Shorts", "Tracksuits", "Jumpsuits & Rompers",
  "Skirts & Dresses", "Socks", "Accessories & Equipment"
];

function NewsandFeatured() {
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedKids, setSelectedKids] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const { value, checked } = e.target;
    setState((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      {/* Top Navigation */}
      <TopNavbar />
      <MainNav />

      {/* Header */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center px-6 lg:pr-12 mt-16 lg:mt-32">
        <h1 className="text-2xl font-bold">New (500)</h1>
        <ul className="flex gap-6 mt-4 lg:mt-0 text-[16px] font-medium">
          <li className="flex items-center">Hide Filters <IoMdSwitch className="ml-2 text-xl" /></li>
          <li className="flex items-center">Sort <RiArrowDropDownLine className="text-3xl" /></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row mt-8">
        {/* Sidebar Section */}
        <div className="w-full lg:w-[20%] px-6 space-y-6">
          {/* Sidebar Menu */}
          <div className="hidden lg:block border-r-[8px] h-[390px] pr-6 border-gray-500">
            <div className="flex flex-col gap-4 font-semibold">
              {sidebarList.map((data: string, index) => (
                <Link href="" key={index} className="hover:text-blue-500">{data}</Link>
              ))}
            </div>
          </div>

          {/* Gender Filter */}
          <div>
          <div className='flex justify-between items-center lg:mt-40 md:mt-10 mt-0 border-t'>
            <h3 className="font-semibold text-lg mb-2 pt-6">Gender</h3>
            <span className='text-3xl pt-2'><RiArrowDropUpLine /></span>
          </div>
            <div className="flex flex-col gap-2 lg:mt-6">
              {['Men', 'Women', 'Unisex'].map((gender) => (
                <label key={gender} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={gender}
                    checked={selectedGender.includes(gender)}
                    onChange={(e) => handleCheckboxChange(e, setSelectedGender)}
                    className="w-4 h-4 accent-gray-300"
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>

          {/* Kids Filter */}
          <div>
          <div className='flex justify-between items-center mt-8 border-t'>
            <h3 className="font-semibold text-lg mb-2 pt-6">Kids</h3>
            <span className='text-3xl pt-2'><RiArrowDropUpLine /></span>
            </div>
            <div className="flex flex-col gap-2 lg:mt-6">
              {["Boys", "Girls"].map((kid) => (
                <label key={kid} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={kid}
                    checked={selectedKids.includes(kid)}
                    onChange={(e) => handleCheckboxChange(e, setSelectedKids)}
                    className="w-4 h-4 accent-gray-300"
                  />
                  {kid}
                </label>
              ))}
            </div>
          </div>

          {/* Shop by Price */}
          <div>
          <div className='flex justify-between items-center mt-8 border-t'>
            <h3 className="font-semibold text-lg mb-2 pt-6">Shop by Price</h3>
            <span className='text-3xl pt-2'><RiArrowDropUpLine /></span>
            </div>
            <div className="flex flex-col gap-2 lg:mt-6">
              {["Under ₹ 2,500.00", "₹ 2,501.00 - ₹"].map((price) => (
                <label key={price} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={price}
                    checked={selectedPrice.includes(price)}
                    onChange={(e) => handleCheckboxChange(e, setSelectedPrice)}
                    className="w-4 h-4 accent-gray-300"
                  />
                  {price}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-6 md:mt-12 mt-8 lg:mt-0">
          {products.map((product) => (
            <Link key={product.id} href={`/featuredProducts/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
          ))}
        </div>
      </div>

      { /* Circle */ }
      <div className="max-w-[892px] w-full h-auto flex lg:justify-center lg:items-center ml-[290px] mt-16 justify-start items-start">
      <div className="w-8 h-8 rounded-full text-5xl border-[2px] border-black bg-white mt-8 md:ml-20"></div>
      </div>
      {/* Related Categories */}
      <div className="max-w-[972px] w-full h-[30px] md:h-auto sm:h-[2px] flex lg:justify-center lg:items-center lg:ml-[290px] lg:mt-14 mt-4 justify-start items-start">
      <section className="w-full max-w-[1092px] px-4 py-6 border-t mt-16">
        <h2 className="text-2xl font-bold mb-4">Related Categories</h2>
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            "Best Selling Products", "Best Shoes", "New Basketball Shoes",
            "New Football Shoes", "New Men's Shoes", "New Running Shoes",
            "Best Men's Shoes", "New Jordan Shoes", "Best Women's Shoes",
            "Best Training & Gym"
          ].map((category) => (
            <span
            key={category}
            className="inline-block px-3 py-2 text-sm bg-gray-50 rounded-full hover:bg-gray-200 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </section>
          </div>

      {/* Footer */}
      <div className="md:mt-[10%] top-0">
      <Footer />
      </div>
    </div>
  );
}

export default NewsandFeatured;
