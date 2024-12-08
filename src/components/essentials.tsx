import Image from 'next/image';
import React from 'react';
import essential from "../../public/images/essential.png";

function Essentials() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4">
      {/* Section Heading */}
      <h3 className="text-black text-xl md:text-3xl font-semibold font-sans self-start md:self-center mb-4 sm:mt-8 md:mr-[62%]">
        Don&apos;t Miss
      </h3>

      <div className="relative flex flex-col items-center">
        {/* Image */}
        <div className="relative w-full max-w-[1344px] h-auto">
          <Image
            src={essential}
            alt="Flight Essentials"
            width={1344}
            height={700}
            className="w-full h-auto"
          />
        </div>

        {/* Heading Text */}
        <h1 className=" bottom-[20%] text-3xl md:text-5xl lg:text-7xl font-semibold font-sans text-center uppercase sm:mt-[40%] md:mt-[3%]">
          Flight Essentials
        </h1>

        {/* Subheading Text */}
        <p className="bottom-[10%] text-xs md:text-sm lg:text-base font-medium text-center px-4 sm:mt-[22%] md:mt-[2%]">
          Your built-to-last, all-week wears -- but with style only Jordan Brand can deliver.
        </p>

        {/* Shop Button */}
        <button className="bottom-[5%] w-[120px] h-[40px] lg:w-[150px] lg:h-[50px] rounded-3xl bg-black text-white text-sm md:text-base sm:mt-[20%] md:mt-[2%]">
          Shop
        </button>
      </div>
    </div>
  );
}

export default Essentials;