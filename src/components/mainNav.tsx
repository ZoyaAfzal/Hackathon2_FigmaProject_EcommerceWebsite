import Image from 'next/image';
import React from 'react';
import nike from "../../public/images/nike.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import Link from 'next/link';

function MainNav() {
  return (
    <div className='hidden md:flex w-full h-16 justify-between items-center border-b-[1px] border-gray-200 pl-14 cursor-pointer'>
      <Image src={nike} alt="nikelogo2" width={59} height={20}/>
      { /* categories */ }
      <ul className='flex gap-8 lg:mr-[36%] font-semibold text-[#111111] md:gap-4 md:mr-[28%]'>
        <li><Link href="/">News & Featured</Link></li>
        <li><Link href="/">Men</Link></li>
        <li><Link href="/">Women</Link></li>
        <li><Link href="/">Kids</Link></li>
        <li><Link href="/">Sale</Link></li>
        <li><Link href="/">SNRKS</Link></li>
      </ul>
      <div className="absolute right-12 flex items-center space-x-4">
            <div className="relative w-44 lg:flex items-center bg-neutral-100 rounded-full px-4 py-2 mr-22 hidden">
            <IoSearchOutline className='w-6 h-6 text-gray-700'/>
              <span className="text-sm text-[#cccccc]">Search</span>
            </div>
            <div className="flex gap-6 pl-2">
            <FaRegHeart className='text-[20px] text-[#464444]'/>
            <IoBagOutline className='text-[20px] text-[#111111]'/>
            </div>

              
</div>
    </div>
  )
}

export default MainNav;