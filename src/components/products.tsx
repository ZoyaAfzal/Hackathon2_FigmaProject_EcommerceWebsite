import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import menshorts from "../../public/images/menshorts.png";
import womentop from "../../public/images/womentop.png";
import leggings from "../../public/images/leggings.png";
import nikeshorts from "../../public/images/nikeshorts.png";
import Image from 'next/image';

function Products() {
  return (
    <div className="max-w-[1344px] mx-auto p-4 mt-[50%] sm:mt-[90%] lg:mt-[10%] md:mt-[10%]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-sans sm:mt-[40%] md:mt-48">
          Gear Up
        </h3>
        <div className="flex flex-col gap-4  justify-center items-center">
          {/* Men's Section */}
          <div className="flex items-center md:mt-36">
            <p className="font-semibold">Shop Men&apos;s</p>
            <FaAngleRight className="ml-2 text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer" />
            <FaChevronLeft className="ml-2 text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer" />
          </div>
          {/* Women's Section */}
          <div className="flex items-center md:mr-6">
            <p className="font-semibold">Shop Women&apos;s</p>
            <FaAngleRight className="ml-2 text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer" />
            <FaChevronLeft className="ml-2 text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-8">
        {/* Product Card 1 */}
        <div className=" border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src={menshorts}
            alt="menshorts"
            height={300}
            width={300}
            className="hover:border-2 hover:border-gray-600 rounded-lg md:ml-10 "
          />
          <div className="mt-4 md:ml-10">
            <h2 className="text-sm md:text-base font-semibold">
              Nike Dri-FIT ADV TechKnit Ultra
            </h2>
            <p className="text-gray-600 text-sm">Men&apos;s Short Sleeve</p>
            <p className="text-gray-600 text-sm">Running Top</p>
            <span className="font-semibold text-sm">₹ 3,895</span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src={nikeshorts}
            alt="nikeshorts"
            height={300}
            width={300}
            className="hover:border-2 hover:border-gray-600 rounded-lg md:ml-10"
          />
          <div className="mt-4 md:ml-10">
            <h2 className="text-sm md:text-base font-semibold">
              Nike Dri-FIT Challenger
            </h2>
            <p className="text-gray-600 text-sm">Men&apos;s 18cm (approx.) 2-in-1</p>
            <p className="text-gray-600 text-sm">Versatile Shorts</p>
            <span className="font-semibold text-sm">₹ 2,495</span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src={womentop}
            alt="womentop"
            height={300}
            width={300}
            className="hover:border-2 hover:border-gray-600 rounded-lg md:ml-10"
          />
          <div className="mt-4 md:ml-10">
            <h2 className="text-sm md:text-base font-semibold">
              Nike Dri-FIT ADV Run Division
            </h2>
            <p className="text-gray-600 text-sm">Women&apos;s Long-Sleeve</p>
            <p className="text-gray-600 text-sm">Running Top</p>
            <span className="font-semibold text-sm">₹ 5,295</span>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src={leggings}
            alt="leggings"
            height={300}
            width={300}
            className="hover:border-2 hover:border-gray-600 rounded-lg md:ml-10"
          />
          <div className="mt-4 md:ml-10">
            <h2 className="text-sm md:text-base font-semibold">Nike Fast</h2>
            <p className="text-gray-600 text-sm">
              Women&apos;s Mid-Rise 7/8 Running
            </p>
            <p className="text-gray-600 text-sm">Leggings with Pockets</p>
            <span className="font-semibold text-sm">₹ 3,795</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
