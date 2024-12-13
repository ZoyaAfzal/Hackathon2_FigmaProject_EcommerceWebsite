import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import nikeairmax1 from "../../public/images/nikeairmax1.png";
import nikeairmax2 from "../../public/images/nikeairmax2.png";
import nikeairmax3 from "../../public/images/nikeairmax3.png";

function NikeAir() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 lg:mt-18 px-4 sm:px-8 ">
      {/* Header Section */}
      <div className="text-center">
        <h3 className="text-base sm:text-lg font-semibold text-[#111111] hover:text-colors-secondaryColor">
          First Look
        </h3>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase font-semibold font-sans text-[#111111] mt-4">
          Nike Air Max Pulse
        </h1>
        <p className="font-semibold text-sm sm:text-base mt-6 leading-relaxed sm:px-16 md:px-20">
          Extreme Comfort. Hyper durable Max Volume. Introducing the Air Max
          Pulse
          <br />
          <span>--designed to push you past your limits and help you go to the max.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
          <button className="w-40 h-10 bg-[#111111] text-white rounded-3xl hover:bg-colors-secondaryColor">
            Notify Me
          </button>
          <button className="w-44 h-10 bg-[#111111] text-white rounded-3xl hover:bg-colors-secondaryColor">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="w-full mt-20">
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-3xl font-semibold font-sans hover:text-colors-secondaryColor">
            Best of Air Max
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold hover:text-colors-secondaryColor">Shop</p>
            <FaAngleRight className="text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full" />
            <FaChevronLeft className="text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Product Card 1 */}
          <div className="relative flex flex-col items-center">
            <Image
              src={nikeairmax1}
              alt="Nike Air Max Pulse"
              width={441}
              height={441}
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-0 w-full bg-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold hover:text-colors-secondaryColor">Nike Air Max Pulse</h2>
                <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹13,995</span>
              </div>
              <span className="text-gray-600 text-sm">Women&apos;s Shoes</span>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="relative flex flex-col items-center">
            <Image
              src={nikeairmax2}
              alt="Nike Air Max Pulse"
              width={441}
              height={441}
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-0 w-full bg-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold hover:text-colors-secondaryColor">Nike Air Max Pulse</h2>
                <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹13,995</span>
              </div>
              <span className="text-gray-600 text-sm">Men&apos;s Shoes</span>
            </div>
          </div>

        
                   {/* Product Card 3 */}
          <div className="relative flex flex-col items-center">
            <Image
              src={nikeairmax3}
              alt="Nike Air Max Pulse"
              width={441}
              height={441}
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-0 w-full bg-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold hover:text-colors-secondaryColor">Nike Air Max Pulse</h2>
                <span className="font-semibold text-sm hover:text-colors-secondaryColor">₹13,995</span>
              </div>
              <span className="text-gray-600 text-sm">Men&apos;s Shoes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NikeAir;

