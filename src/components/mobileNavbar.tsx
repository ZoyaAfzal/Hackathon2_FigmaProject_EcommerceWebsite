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
    <div className="md:hidden w-full flex justify-between items-center sticky top-0 bg-colors-bgColor h-14 px-8">
      {/* Nike Logo */}
      <div>
        <Image src={nike} alt="Nike Logo" width={38} height={30} />
      </div>

      {/* Hamburger Menu */}
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className="text-3xl" />
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col gap-4 text-[#111111]">
                <li>
                  <Link href="/news">News & Featured</Link>
                </li>
                <li>
                  <Link href="/men">Men</Link>
                </li>
                <li>
                  <Link href="/women">Women</Link>
                </li>
                <li>
                  <Link href="/kids">Kids</Link>
                </li>
                <li>
                  <Link href="/sale">Sale</Link>
                </li>
                <li>
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
