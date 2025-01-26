import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import nike from "../../public/images/nike.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

function MobileNavbar() {
  return (
    <div className="md:hidden w-full sm:w-[640px] xs:w-[410px] max-w-[700px] flex justify-between items-center sticky top-0 bg-colors-bgColor h-14 px-8">
      {/* Nike Logo */}
      <div>
        <Image src={nike} alt="Nike Logo" width={38} height={30} />
      </div>

      {/* Hamburger Menu */}
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className="text-3xl hover:text-colors-secondaryColor" />
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col gap-4 text-[#111111] justify-start items-start">
                <li className="hover:text-colors-secondaryColor">
                  <Link href="/featuredProducts">News & Featured</Link>
                </li>
                <li className="hover:text-colors-secondaryColor">
                  <Link href="/men">Men</Link>
                </li>
                <li className="hover:text-colors-secondaryColor">
                  <Link href="/women">Women</Link>
                </li>
                <li className="hover:text-colors-secondaryColor">
                  <Link href="/kids">Kids</Link>
                </li>
                <li className="hover:text-colors-secondaryColor">
                  <Link href="/sale">Sale</Link>
                </li>
                <li className="hover:text-colors-secondaryColor">
                  <Link href="/snrks">SNRKS</Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
