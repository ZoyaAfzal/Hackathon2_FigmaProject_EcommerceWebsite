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
    <div className="lg:w-[1174px] max-w-[1320px] md:w-[700px] sm:w-[600px] xs:w-[360px] xxs:w-[260px] w-full h-auto xs:mt-[20%] px-4 md:mt-[14%] sm:mt-[18%] mt-[20%] sm:h-[700px] lg:mt-28 ml-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <h3 className="text-3xl md:text-4xl font-semibold font-sans hover:text-colors-secondaryColor">
          Gear Up
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-6 lg:mt-20">
          {/* Men's Section */}
          <div className="flex items-center gap-3 lg:mr-[400px]">
            <p className="font-semibold hover:text-colors-secondaryColor text-base">
              Shop Men&apos;s
            </p>
            <FaAngleRight className="text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer" />
            <FaChevronLeft className="text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer" />
          </div>
          {/* Women's Section */}
          <div className="flex items-center gap-3 xs:mr-6 xxs:mr-6">
            <p className="font-semibold hover:text-colors-secondaryColor text-base">
              Shop Women&apos;s
            </p>
            <FaAngleRight className="text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer" />
            <FaChevronLeft className="text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* Product Card 1 */}
        <div className="border border-gray-200 rounded-lg hover:shadow-lg transition">
          <Image
            src={menshorts}
            alt="Men's Shorts"
            height={300}
            width={300}
            className="rounded-lg xs:w-[400px]"
          />
          <div className="p-4">
            <h2 className="text-base font-semibold hover:text-colors-secondaryColor">
              Nike Dri-FIT ADV TechKnit Ultra
            </h2>
            <p className="text-gray-600 text-sm">Men&apos;s Short Sleeve</p>
            <p className="text-gray-600 text-sm">Running Top</p>
            <span className="font-semibold text-sm hover:text-colors-secondaryColor">
              ₹ 3,895
            </span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="border border-gray-200 rounded-lg hover:shadow-lg transition">
          <Image
            src={nikeshorts}
            alt="Nike Shorts"
            height={300}
            width={300}
            className="rounded-lg xs:w-[400px]"
          />
          <div className="p-4">
            <h2 className="text-base font-semibold hover:text-colors-secondaryColor">
              Nike Dri-FIT Challenger
            </h2>
            <p className="text-gray-600 text-sm">Men&apos;s 18cm (approx.) 2-in-1</p>
            <p className="text-gray-600 text-sm">Versatile Shorts</p>
            <span className="font-semibold text-sm hover:text-colors-secondaryColor">
              ₹ 2,495
            </span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="border border-gray-200 rounded-lg hover:shadow-lg transition">
          <Image
            src={womentop}
            alt="Women's Top"
            height={300}
            width={300}
            className="rounded-lg xs:w-[400px]"
          />
          <div className="p-4">
            <h2 className="text-base font-semibold hover:text-colors-secondaryColor">
              Nike Dri-FIT ADV Run Division
            </h2>
            <p className="text-gray-600 text-sm">Women&apos;s Long-Sleeve</p>
            <p className="text-gray-600 text-sm">Running Top</p>
            <span className="font-semibold text-sm hover:text-colors-secondaryColor">
              ₹ 5,295
            </span>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="border border-gray-200 rounded-lg hover:shadow-lg transition">
          <Image
            src={leggings}
            alt="Leggings"
            height={300}
            width={300}
            className="rounded-lg xs:w-[400px]"
          />
          <div className="p-4">
            <h2 className="text-base font-semibold hover:text-colors-secondaryColor">
              Nike Fast
            </h2>
            <p className="text-gray-600 text-sm">Women&apos;s Mid-Rise 7/8 Running</p>
            <p className="text-gray-600 text-sm">Leggings with Pockets</p>
            <span className="font-semibold text-sm hover:text-colors-secondaryColor">
              ₹ 3,795
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
