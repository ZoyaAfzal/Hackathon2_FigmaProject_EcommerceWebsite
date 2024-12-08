import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import nike from "../../public/images/nike.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from 'lucide-react';
import Image from 'next/image';

function MobileNavbar() {
  return (
    <div className='md:hidden w-full flex justify-between items-center mr-8 sticky top-0 bg-colors-bgColor h-14'>
      <div className='flex ml-8 '>
        <Image src={nike} alt="nikelogo" width={38} height={30}/>
      </div>
      <Sheet>
  <SheetTrigger>
  <GiHamburgerMenu className='text-3xl mr-8'/>
  </SheetTrigger>
  <SheetContent side="right">
  <SheetHeader>
      <SheetTitle>
    <ul>
    <li className="className='flex flex-col gap-2 text-[#111111]">
        <Link href="/news">News & Featured</Link>
        <Link href="/men">Men</Link>
        <Link href="/women">Women</Link>
        <Link href="/kids">Kids</Link>
        <Link href="/sale">Sale</Link>
        <Link href="/snrks">SNRKS</Link>
    </li>    
    </ul>

      </SheetTitle>
      <SheetDescription>

      </SheetDescription>
    </SheetHeader>
    </SheetContent>
</Sheet>
    </div>
  )
}

export default MobileNavbar;