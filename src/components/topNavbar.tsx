import React from 'react';
import nikelogo from "../../public/images/nikelogo.png";
import Image from 'next/image';
import Link from 'next/link';

function TopNavbar() {
  return (
    <div className='sticky hidden md:flex top-0 w-full h-9 bg-colors-bgColor justify-between items-center pl-14'>
    <Image src={nikelogo} alt="nikelogo" width={24} height={24}/>
    <div className='flex gap-2'>
        <ul className='flex text-[14px] text-black font-semibold cursor-pointer font-sans pr-10'>
            <li className='hover:text-colors-secondaryColor'>
            <Link href="/">
            Find a Store 
            </Link>
            <span className='pl-2'>|</span>
            </li>
            <li className='pl-2 hover:text-colors-secondaryColor'>
            <Link href="/">
            Help 
            </Link>
            <span className='pl-2 hover:text-colors-secondaryColor'>|</span>
            </li>
            <li className='pl-2 hover:text-colors-secondaryColor'>
            <Link href="/">
            Join Us 
            </Link>
            <span className='pl-2'>|</span>
            </li>
            <li className='pl-2 hover:text-colors-secondaryColor'>
            <Link href="/">
            Sign In  
            </Link>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default TopNavbar;
