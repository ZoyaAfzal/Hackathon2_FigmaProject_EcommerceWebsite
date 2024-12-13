import Image from 'next/image';
import React from 'react';
import banner from "../../public/images/banner.png";

function BannerBottom() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[1344px] mx-auto px-4 md:mt-12 sm:mt-0">
      {/* Featured Title */}
      <h3 className="text-black text-3xl font-semibold font-sans mt-20 md:mt-16 md:text-3xl xl:text-4xl self-start md:mr-2 sm:mt-0 hover:text-colors-secondaryColor">
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
          className="w-full h-[600px] object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute top-[108%] md:top-[105%] lg:top-[105%] text-center px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold uppercase">
            Step into what feels good
          </h1>
          <p className="text-xs md:text-sm lg:text-base font-semibold lg:mt-4 sm:mb-6 md:mt-3">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
        </div>

        {/* Button */}
        <button className="absolute top-[124%] sm:mt-2 bg-black hover:bg-colors-secondaryColor md:top-[126%] lg:top-[124%] w-[140px] h-[40px] md:w-[152px] md:h-[42px] rounded-3xl text-white cursor-pointer">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
}

export default BannerBottom;