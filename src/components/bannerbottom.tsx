import Image from 'next/image';
import React from 'react';
import banner from "../../public/images/banner.png";

function BannerBottom() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[1344px] mx-auto px-4 mt-8 sm:mt-0">
      {/* Featured Title */}
      <h3 className="text-black text-3xl font-semibold font-sans mt-20 md:mt-16 md:text-4xl xl:text-5xl self-start md:ml-2 xl:ml-16">
        Featured
      </h3>

      {/* Banner Content */}
      <div className="relative flex flex-col items-center justify-center w-full h-auto mt-6">
        {/* Banner Image */}
        <Image
          src={banner}
          alt="banner"
          width={1344}
          height={700}
          className="w-full h-auto object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute top-[104%] md:top-[105%] lg:top-[30%] text-center px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold uppercase">
            Step into what feels good
          </h1>
          <p className="text-xs md:text-sm lg:text-base font-semibold lg:mt-4 sm:mb-10 md:mt-3">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
        </div>

        {/* Button */}
        <button className="absolute top-[166%] md:top-[126%] lg:top-[45%] w-[140px] h-[40px] md:w-[152px] md:h-[42px] rounded-3xl text-white bg-black hover:bg-gray-800 transition">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
}

export default BannerBottom;