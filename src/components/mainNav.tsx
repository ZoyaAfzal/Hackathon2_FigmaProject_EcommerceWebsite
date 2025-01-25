'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import nike from "../../public/images/nike.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import Link from 'next/link';

const MainNav = ({ onSearch = () => {}  }: { onSearch?: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
const [maxWidthClass, setMaxWidthClass] = useState(() =>
  typeof window !== 'undefined' && window.innerWidth >= 1266
    ? 'max-w-[1320px]'
    : 'lg:w-[1266px]'
);

  useEffect(() => {
    const handleResize = () => {
      setMaxWidthClass(window.innerWidth >= 1266 ? 'max-w-[1320px]' : 'lg:w-[1266px]');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className={`xs:hidden md:flex ${maxWidthClass} md:w-[780px] w-full h-16 justify-between items-center border-b-[1px] border-gray-200 pl-14 cursor-pointer md:pl-10`}>
      <Image src={nike} alt="nikelogo2" width={59} height={20}  priority />
      {/* Categories */}
      <ul className="flex gap-10 lg:mr-0 lg:ml-36 font-semibold text-[#111111] md:gap-4 md:mr-[2%]">
        {['News & Featured', 'Men', 'Women', 'Kids', 'Sale', 'SNRKS'].map((item, index) => (
          <li key={index} className="hover:text-colors-secondaryColor hover:underline duration-200">
            <Link href={`/${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="right-12 flex items-center space-x-4 mr-8">
        <div className="w-44 lg:flex items-center bg-neutral-100 rounded-full px-4 py-2 hidden">
          <IoSearchOutline className="w-6 h-6 text-gray-700 hover:text-colors-secondaryColor left-3" />
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            className="w-full bg-transparent pl-10 text-sm text-gray-700 focus:outline-none placeholder-[#cccccc]"
          />
        </div>
        <div className="flex gap-6 pl-2">
          <Link href="/addTowishlist">
            <FaRegHeart className="text-[20px] text-[#464444] hover:text-colors-secondaryColor" />
          </Link>
          <Link href="/addToCart">
            <IoBagOutline className="text-[20px] text-[#111111] hover:text-colors-secondaryColor" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
