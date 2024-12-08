import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import nikeairmax1 from "../../public/images/nikeairmax1.png";
import nikeairmax2 from "../../public/images/nikeairmax2.png";
import nikeairmax3 from "../../public/images/nikeairmax3.png";


function NikeAir() {
  return (
    <div className='w-full h-[200px] relative flex flex-col items-center'>
    <div className='flex flex-col w-full max-w-[1440px] h-auto absolute justify-center items-center mt-10'>
        <h3 className='flex text-lg font-semibold text-[#111111] sm:mt-8 '>First Look</h3>
        <h1 className=' lg:text-6xl md:text-5xl text-4xl uppercase font-semibold font-sans text-[#111111] '>Nike air max pulse</h1>
        <p className='font-semibold text-sm mt-8 px-4 sm:px-8 md:px-6'>Extreme Comfort. Hyper durable Max Volume. Introducing the Air Max Pulse
        <br />  <span>--designed to push you past your limits and help you go to the max.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-2 mr-28">
        <button className='w-[110px] h-[39px] bg-[#111111] text-white rounded-3xl ml-36'>Notify Me</button>
        <button className=' w-[138px] h-[39px] bg-[#111111] text-white rounded-3xl '>Shop Air Max</button>
        </div>
         
    
        <div className='w-[1440px] h-28 flex flex-col ml-10 sm:mt-20'>
          <div className='absolute flex justify-between items-start '>
            <h1 className='md:text-2xl text-lg  sm:text-xl  font-semibold font-sans mt-[94px]'>Best of Air Max</h1>  
          </div> 
          <div className="flex ml-auto items-center gap-1 mr-12">
            <p className='relative mt-[98px] font-semibold mr-2'>Shop</p>
        <div className="flex w-10 h-10 rounded-full  justify-center items-center mt-[100px] text-gray-500">
        <FaAngleRight className='text-gray-600 w-8 h-8 p-2 text-lg bg-gray-100 hover:bg-gray-300 rounded-full'/>
        </div>
        <div className="relative flex w-10 h-10 justify-center items-center mt-[100px] text-gray-500 ">
        <FaChevronLeft className='text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full'/>
        </div>
            </div>  
      <div className="absolute w-[1440px] h-[510px] grid grid-cols-3 mr-80 gap-0.5 mt-40">
        <div className="flex col-span-1 w-[441px] h-[510px] gap-0.5">
          <Image src={nikeairmax1} alt="nikeairmax1" width={441} height={441}/>
          <div className="absolute w-[441px] h-[68px] mt-[462px] bg-white">
          <div className="flex justify-between items-center">
            <h2 className='flex relative text-sm font-semibold mt-6 '>Nike Air Max Pulse</h2>
            <span className='mt-3 font-semibold text-sm'>₹{" "}13.995</span>
            <span className='absolute text-gray-600 text-sm mt-20'>Women&apos;s Shoes</span>
          </div>
          </div>
          </div>
          <div className="flex col-span-1 w-[441px] h-[510px] gap-0.5">
          <Image src={nikeairmax2} alt="nikeairmax2" width={441} height={441}/>
          <div className="absolute w-[441px] h-[68px] mt-[462px] bg-white">
          <div className="flex justify-between items-center">
            <h2 className='flex relative text-sm font-semibold mt-6 '>Nike Air Max Pulse</h2>
            <span className='mt-3 font-semibold text-sm'>₹{" "}13.995</span>
            <span className='absolute text-gray-600 text-sm mt-20'>Men&apos;s Shoes</span>
          </div>
          </div>
          </div>
          <div className="flex col-span-1 w-[441px] h-[510px] gap-0.5">
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

export default NikeAir;
