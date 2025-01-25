import Image from 'next/image';
import React from 'react';
import essential from "../../public/images/essential.png";
import essential1 from "../../public/images/essential1.png";
import essential2 from "../../public/images/essential2.png";
import essential3 from "../../public/images/essential3.png";


function Essentials() {
  return (
    <div className="lg:w-[1240px] max-w-[1320px] w-full xs:h-[1950px] lg:h-[1400px] xs:mt-20 h-auto flex flex-col items-center justify-center px-4 md:mt-[620px] lg:mt-2 sm:mt-[186%] ">
      {/* Section Heading */}
      <h3 className="text-black flex text-xl md:text-3xl font-semibold font-sans self-start mb-4 md:mr-[62%] lg:ml-8 hover:text-colors-secondaryColor sm:ml-4">
        Don&apos;t Miss
      </h3>

      <div className="w-auto h-auto flex flex-col items-center mt-4 ml-8 sm:ml-4 xs:ml-4">
        {/* Image */}
        <div>
          <Image
            src={essential}
            alt="Flight Essentials"
            width={1180}
            height={700}
            priority
          />
        </div>

        {/* Heading Text */}
        <h1 className=" bottom-[20%] text-3xl md:text-5xl lg:text-5xl font-semibold font-sans text-center uppercase mt-2 md:mt-[3%] lg:mt-[3%]">
          Flight Essentials
        </h1>

        {/* Subheading Text */}
        <p className="bottom-[10%] text-xs md:text-sm lg:text-base font-medium text-center px-4 mt-[2%] lg:mt-[2%]">
          Your built-to-last, all-week wears -- but with style only Jordan Brand can deliver.
        </p>

        {/* Shop Button */}
        <button className="bottom-[110%] w-[110px] h-[40px]  md:w-[130px] lg:w-[140px] rounded-3xl bg-black text-white hover:bg-colors-secondaryColor text-sm md:text-base mt-4 md:mt-[2%] lg:mt-[2%]">
          Shop
        </button>
      </div>
    
<div className="lg:w-[1220px] max-w-[1320px] relative w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-4 xs:gap-0 mx-auto mt-20 px-4">
  <h3 className="text-black absolute text-xl sm:text-2xl md:text-3xl font-bold font-sans top-0 left-4 sm:left-6 mb-4 hover:text-colors-secondaryColor">
    The Essentials
  </h3>
  
  {/* Image 1 */}
  <div className="relative w-full h-auto mt-20">
    <Image
      src={essential1}
      alt="Flight Essentials - Men's"
      width={480}
      height={540}
      className="w-full h-auto"
    />
    <button className="absolute bottom-6 left-1/4 transform -translate-x-1/2  w-20 sm:w-24 h-8 sm:h-10 rounded-3xl bg-white text-xs sm:text-sm font-semibold border border-gray-500 hover:bg-colors-primaryColor hover:text-white">
      Men&apos;s
    </button>
  </div>

  {/* Image 2 */}
  <div className="relative w-full h-auto mt-20">
    <Image
      src={essential2}
      alt="Flight Essentials - Women's"
      width={480}
      height={540}
      className="w-full h-auto"
    />
    <button className="absolute bottom-6 left-1/4 transform -translate-x-1/2 w-24 sm:w-28 h-8 sm:h-10 rounded-3xl bg-white text-xs sm:text-sm font-semibold border border-gray-500 hover:bg-colors-primaryColor hover:text-white">
      Women&apos;s
    </button>
  </div>

  {/* Image 3 */}
  <div className="relative w-full h-auto mt-20">
    <Image
      src={essential3}
      alt="Flight Essentials - Kid's"
      width={480}
      height={540}
      className="w-full h-auto"
    />
    <button className="absolute bottom-6 left-1/4 transform -translate-x-1/2 w-20 sm:w-24 h-8 sm:h-10 rounded-3xl bg-white text-xs sm:text-sm font-semibold border border-gray-500 hover:bg-colors-primaryColor hover:text-white">
      Kid&apos;s
    </button>
  </div>
</div>
</div>
  )
}
export default Essentials;