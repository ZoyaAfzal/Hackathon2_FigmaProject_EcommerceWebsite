import React from 'react';
import snkrslogo from "../../public/images/snkrslogo.png";
import Image from 'next/image';
import Link from 'next/link';

function CustomNavbar() {
  return (
    <nav className='max-w-[1440px] w-full h-[57px] border-[1px] flex justify-between items-center'>
      <Image src={snkrslogo} alt="snkrslogo" width={50} height={33} className='ml-12'/>

      <ul className='flex font-semibold lg:gap-12 mt-0 lg:mr-[500px] md:mr-[240px] sm:mr-[200px] xs:mr-[100px] md:gap-8 gap-4'>
        <li className='hover:text-red-400 hover:underline duration-200'><Link href="/featuredProducts">Feed</Link></li>
        <li className='hover:text-red-400 hover:underline duration-200'><Link href="/men">In Stock</Link></li>
        <li className='hover:text-red-400 hover:underline duration-200'><Link href="/women">Upcoming</Link></li>
      </ul> 
    </nav>
  )
}

export default CustomNavbar;