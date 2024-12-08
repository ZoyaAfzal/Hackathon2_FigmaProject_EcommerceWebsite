{ /* import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import nikeairmax1 from "../../public/images/nikeairmax1.png";
import nikeairmax2 from "../../public/images/nikeairmax2.png";
import nikeairmax3 from "../../public/images/nikeairmax3.png";


function NikeAir() {
  return (
    <div className='w-[1344px] absolute flex flex-col items-center justify-center mt-40 sm:mt-48 '>
    <div className='flex flex-col  w-[1344px] h-auto absolute justify-center items-center mt-10 '>
        <h3 className='flex text-lg font-semibold text-[#111111] sm:mt-20'>First Look</h3>
        <h1 className=' lg:text-6xl md:text-5xl text-4xl uppercase font-semibold font-sans text-[#111111] sm:mt-6'>Nike air max pulse</h1>
        <p className='font-semibold text-sm mt-8 px-4 sm:px-8 md:px-6'>Extreme Comfort. Hyper durable Max Volume. Introducing the Air Max Pulse
        <br />  <span>--designed to push you past your limits and help you go to the max.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-2 mr-28">
        <button className='w-[110px] h-[39px] bg-[#111111] text-white rounded-3xl ml-36'>Notify Me</button>
        <button className=' w-[138px] h-[39px] bg-[#111111] text-white rounded-3xl '>Shop Air Max</button>
        </div>
         
    
        <div className='w-[1344px] h-28 flex flex-col ml-10 '>
          <div className='absolute flex justify-between items-start '>
            <h1 className='md:text-2xl text-lg  sm:text-xl  font-semibold font-sans mt-[110px]'>Best of Air Max</h1>  
          </div> 
          <div className="flex ml-auto items-center gap-1">
            <p className='relative mt-[98px] font-semibold '>Shop</p>
        <div className="flex w-10 h-10 rounded-full  justify-center items-center mt-[100px] text-gray-500">
        <FaAngleRight className='text-gray-600 w-8 h-8 p-2 text-lg bg-gray-100 hover:bg-gray-300 rounded-full'/>
        </div>
        <div className="relative flex w-10 h-10 justify-center items-center mt-[100px] text-gray-500 ">
        <FaChevronLeft className='text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full'/>
        </div>
            </div>  
      <div className="w-[1344px] h-[510px] relative grid grid-cols-3 mr-80 gap-0.5  mt-10">
        <div className="flex grid-cols-1 w-[441px] h-[510px] gap-0.5">
          <Image src={nikeairmax1} alt="nikeairmax1" width={441} height={441}/>
          <div className="absolute w-[441px] h-[68px] mt-[462px] bg-white">
          <div className="flex justify-between items-center">
            <h2 className='flex relative text-sm font-semibold mt-6 '>Nike Air Max Pulse</h2>
            <span className='mt-3 font-semibold text-sm'>₹{" "}13.995</span>
            <span className='absolute text-gray-600 text-sm mt-20'>Women&apos;s Shoes</span>
          </div>
          </div>
          </div>
          <div className="flex grid-cols-1 w-[441px] h-[510px] gap-0.5">
          <Image src={nikeairmax2} alt="nikeairmax2" width={441} height={441}/>
          <div className="absolute w-[441px] h-[68px] mt-[462px] bg-white">
          <div className="flex justify-between items-center">
            <h2 className='flex relative text-sm font-semibold mt-6 '>Nike Air Max Pulse</h2>
            <span className='mt-3 font-semibold text-sm'>₹{" "}13.995</span>
            <span className='absolute text-gray-600 text-sm mt-20'>Men&apos;s Shoes</span>
          </div>
          </div>
          </div>
          <div className="flex grid-cols-1 w-[441px] h-[510px] gap-0.5">
          <Image src={nikeairmax3} alt="nikeairmax3" width={441} height={441}/>
          <div className="absolute w-[441px] h-[68px] mt-[462px] bg-white">
          <div className="flex justify-between items-center">
            <h2 className='flex relative text-sm font-semibold mt-6 '>Nike Air Max Pulse</h2>
            <span className='mt-3 font-semibold text-sm'>₹{" "}13.995</span>
            <span className='absolute text-gray-600 text-sm mt-20'>Men&apos;s Shoes</span>
          </div>
          </div>
          </div>
          </div>
          </div>      


              
              
</div>
    </div>
   
  )
}

export default NikeAir; */}

import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import nikeairmax1 from "../../public/images/nikeairmax1.png";
import nikeairmax2 from "../../public/images/nikeairmax2.png";
import nikeairmax3 from "../../public/images/nikeairmax3.png";

function NikeAir() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 sm:mt-32 px-4 sm:px-8">
      {/* Header Section */}
      <div className="text-center">
        <h3 className="text-base sm:text-lg font-semibold text-[#111111]">
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
          <button className="w-40 h-10 bg-[#111111] text-white rounded-3xl">
            Notify Me
          </button>
          <button className="w-44 h-10 bg-[#111111] text-white rounded-3xl">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="w-full mt-20">
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold font-sans">
            Best of Air Max
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Shop</p>
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
                <h2 className="text-sm font-semibold">Nike Air Max Pulse</h2>
                <span className="font-semibold text-sm">₹13,995</span>
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
                <h2 className="text-sm font-semibold">Nike Air Max Pulse</h2>
                <span className="font-semibold text-sm">₹13,995</span>
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
                <h2 className="text-sm font-semibold">Nike Air Max Pulse</h2>
                <span className="font-semibold text-sm">₹13,995</span>
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

