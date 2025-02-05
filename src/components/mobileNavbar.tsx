import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import nike from "../../public/images/nike.png";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";


function MobileNavbar() {
  return (
    <nav className="w-full bg-colors-bgColor border-b sticky top-0 z-50">
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center px-4 h-14">
        <Link href="/">
          <Image 
            src={nike} 
            alt="Nike Logo" 
            width={38} 
            height={30} 
            className="w-9 h-7"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/addtocart" className="relative">
            <IoBagOutline className="w-6 h-6" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Link>
          
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className="text-2xl hover:text-colors-secondaryColor" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="border-b pb-4">
                <SheetTitle>Nike Menu</SheetTitle>
              </SheetHeader>
              
              <nav className="mt-6">
                <ul className="flex flex-col gap-4 text-[#111111]">
                  <li>
                    <Link 
                      href="/news&featured" 
                      className="flex items-center py-2 hover:text-colors-secondaryColor transition-colors"
                    >
                      New & Featured
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/men" 
                      className="flex items-center py-2 hover:text-colors-secondaryColor transition-colors"
                    >
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/women" 
                      className="flex items-center py-2 hover:text-colors-secondaryColor transition-colors"
                    >
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/kids" 
                      className="flex items-center py-2 hover:text-colors-secondaryColor transition-colors"
                    >
                      Kids
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/sale" 
                      className="flex items-center py-2 hover:text-colors-secondaryColor transition-colors"
                    >
                      Sale
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/snkrs" 
                      className="flex items-center py-2 hover:text-colors-secondaryColor transition-colors"
                    >
                      SNKRS
                    </Link>
                  </li>
                  <li className="border-t mt-4 pt-4">
                    <Link 
                      href="/addTowishlist" 
                      className="flex items-center py-2 hover:text-colors-secondaryColor transition-colors"
                    >
                      <FaRegHeart className="mr-2" /> Wishlist
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
export default MobileNavbar; 