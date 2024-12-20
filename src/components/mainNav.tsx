'use client';
import Image from 'next/image';
import React from 'react';
import nike from "../../public/images/nike.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import Link from 'next/link';


function MainNav() {

  return (
    <div className='hidden md:flex w-full h-16 justify-between items-center border-b-[1px] border-gray-200 pl-14 cursor-pointer '>
      <Image src={nike} alt="nikelogo2" width={59} height={20}/>
      { /* categories */ }
      <ul className='flex gap-9 lg:mr-[36%] font-semibold text-[#111111] md:gap-4 md:mr-[28%]'>
        <li className='hover:text-colors-secondaryColor hover:underline duration-200'><Link href="/featuredProducts">News & Featured</Link></li>
        <li className='hover:text-colors-secondaryColor hover:underline duration-200'><Link href="/men">Men</Link></li>
        <li className='hover:text-colors-secondaryColor hover:underline duration-200'><Link href="/women">Women</Link></li>
        <li className='hover:text-colors-secondaryColor hover:underline duration-200'><Link href="/kids">Kids</Link></li>
        <li className='hover:text-colors-secondaryColor hover:underline duration-200'><Link href="/sale">Sale</Link></li>
        <li className='hover:text-colors-secondaryColor hover:underline duration-200'><Link href="/snrks">SNRKS</Link></li>
      </ul> 


   
      <div className="absolute right-12 flex items-center space-x-4">
            <div className="relative w-44 lg:flex items-center bg-neutral-100 rounded-full px-4 py-2 hidden">
            <IoSearchOutline className="w-6 h-6 text-gray-700 hover:text-colors-secondaryColor absolute left-3" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent pl-10 text-sm text-gray-700 focus:outline-none placeholder-[#cccccc]"
            />
            </div>
            <div className="flex gap-6 pl-2">
            <FaRegHeart className='text-[20px] text-[#464444] hover:text-colors-secondaryColor'/>
           <Link href="/addToCart">
           <IoBagOutline className='text-[20px] text-[#111111] hover:text-colors-secondaryColor'/>    
           </Link> 
            </div>

              
</div>
    </div>
  )
}

export default MainNav;