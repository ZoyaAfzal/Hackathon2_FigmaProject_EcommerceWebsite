import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function CustomTopNavbar() {
  return (
    <nav className="max-w-[1320px] lg:w-[1262px] w-full h-[40px] border-[1px] flex justify-between items-center px-8">
        <div className="flex gap-2">
        <FaChevronLeft className='text-[#757575] text-sm mt-1'/>
        <span className='flex text-[#757575] text-sm'>Visit Nike.com</span>
        </div>
        <div className="flex gap-4">
        <ul className='flex font-semibold gap-8 text-sm text-[#757575]'>
        <li><Link href="/signin">Join/Log in</Link></li>
        <li><Link href="/help">Help</Link></li>
        <li><Link href="/addtocart"><FaShoppingCart className='text-lg'/></Link></li>
        <li className='flex text-sm text-[#757575]'><Link href="/"><span className='flex'><IoLocation className=' mr-1 text-lg'/>India</span></Link></li>
      </ul> 
        </div>
    </nav>
  )
}

export default CustomTopNavbar;