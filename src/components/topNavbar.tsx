'use client'
import React from 'react';
import nikelogo from "../../public/images/nikelogo.png";
import Image from 'next/image';
import Link from 'next/link';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

function TopNavbar() {

  return (
    <div className='sticky  lg:max-w-[1262px] max-w-[1800px] xl:max-w-[1800px]  hidden md:flex top-0 w-full h-10 bg-colors-bgColor justify-between items-center pl-14'>
    <Image src={nikelogo} alt="nikelogo" width={24} height={24} priority/>
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
            <SignedOut>
            <Link href="/sign-up">
            <SignUpButton fallbackRedirectUrl="/dashboard"/>
            </Link>
            </SignedOut>
            <span className='pl-2'>|</span>
            </li>
            <li className='pl-2 hover:text-colors-secondaryColor'>
           <SignedOut>
              <Link href="/sign-in" className='mb-8'>
        <SignInButton fallbackRedirectUrl="/dashboard" />
          </Link>
        </SignedOut>
        <SignedIn>
        <div>
      <UserButton 
        showName
        />
    </div>
        </SignedIn> 
            </li>
        </ul>
    </div>
    </div>
  )
}

export default TopNavbar;
