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
    <div className="max-w-[1344px] w-full h:auto absolute mx-auto md:mt-[20%] lg:mt-7 mt-60 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row lg:justify-between  items-center lg:mt-[7%] sm:mt-2">
        <h3 className="absolute flex  text-2xl sm:text-3xl lg:text-4xl font-semibold font-sans md:mt-14 mt-4 md:ml-9  hover:text-colors-secondaryColor">
          Gear Up
        </h3>
        <div className="flex flex-col lg:ml-[350px] justify-center items-center">
        <div className="flex flex-col justify-center items-center md:ml-[530px] sm:ml-[380px] sm:justify-center sm:items-center ">
          {/* Men's Section */}
          <div className="flex items-center lg:mt-24 md:mt-34 lg:mr-[590%] sm:mt-1 md:mr-40 mr-36">
            <p className="font-semibold absolute lg:mt-[370px] md:mt-[260px] mt-[256px] lg:ml-[300px] hover:text-colors-secondaryColor">Shop Men&apos;s</p>
            <FaAngleRight className="ml-[100px] absolute text-gray-600 flex w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer lg:ml-[394px] lg:mt-[370px] md:mt-[260px] md:ml-[100px] mt-[252px]" />
            <FaChevronLeft className="ml-[140px] absolute  text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer lg:mt-[370px] lg:ml-[430px] md:mt-[260px] md:ml-[140px] mt-[252px]" />
          </div>
          {/* Women's Section */}
          <div className="flex items-center mt-36 md:mr-12 ">
            <p className="flex font-semibold absolute md:mt-5 md:ml-9 mr-12 lg:mr-0 lg:ml-[60px] hover:text-colors-secondaryColor lg:mt-8">Shop Women&apos;s</p>
            <FaAngleRight className="lg:ml-[180px] ml-[126px] text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer md:mt-4 md:ml-[162px] lg:mt-7"/>
            <FaChevronLeft className="lg:ml-2 ml-2 text-gray-600 w-8 h-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer md:mt-4 lg:mt-7" />
          </div>
        </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1344px] h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-8 ml-auto sm:ml-10">
        {/* Product Card 1 */}
        <div className=" border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src={menshorts}
            alt="menshorts"
            height={300}
            width={300}
            className="hover:border-2 hover:border-gray-600 rounded-lg md:ml-10 lg:ml-0"
          />
          <div className="mt-4 md:ml-10 lg:ml-0">
            <h2 className="text-sm md:text-base font-semibold hover:text-colors-secondaryColor">
              Nike Dri-FIT ADV TechKnit Ultra
            </h2>
            <p className="text-gray-600 text-sm">Men&apos;s Short Sleeve</p>
            <p className="text-gray-600 text-sm">Running Top</p>
            <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹ 3,895</span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src={nikeshorts}
            alt="nikeshorts"
            height={300}
            width={300}
            className="hover:border-2 hover:border-gray-600 rounded-lg md:ml-10 lg:ml-0"
          />
          <div className="mt-4 md:ml-10 lg:ml-0">
            <h2 className="text-sm md:text-base font-semibold hover:text-colors-secondaryColor">
              Nike Dri-FIT Challenger
            </h2>
            <p className="text-gray-600 text-sm">Men&apos;s 18cm (approx.) 2-in-1</p>
            <p className="text-gray-600 text-sm">Versatile Shorts</p>
            <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹ 2,495</span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src={womentop}
            alt="womentop"
            height={300}
            width={300}
            className="hover:border-2 hover:border-gray-600 rounded-lg md:ml-10 lg:ml-0"
          />
          <div className="mt-4 md:ml-10 lg:ml-0">
            <h2 className="text-sm md:text-base font-semibold hover:text-colors-secondaryColor">
              Nike Dri-FIT ADV Run Division
            </h2>
            <p className="text-gray-600 text-sm">Women&apos;s Long-Sleeve</p>
            <p className="text-gray-600 text-sm">Running Top</p>
            <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹ 5,295</span>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
          <Image
            src={leggings}
            alt="leggings"
            height={300}
            width={300}
            className="hover:border-2 hover:border-gray-600 rounded-lg md:ml-10 lg:ml-0"
          />
          <div className="mt-4 md:ml-10 lg:ml-0">
            <h2 className="text-sm md:text-base font-semibold hover:text-colors-secondaryColor">Nike Fast</h2>
            <p className="text-gray-600 text-sm">
              Women&apos;s Mid-Rise 7/8 Running
            </p>
            <p className="text-gray-600 text-sm">Leggings with Pockets</p>
            <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹ 3,795</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
