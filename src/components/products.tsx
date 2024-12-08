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
    <div className='w-[1344px] h-[561px] flex justify-start items-start mt-[132%] ml-28'>
        <h3 className="text-3xl flex font-semibold font-sans">Gear Up</h3>
        <div className="flex gap-1 justify-center items-center ml-[26%]">
            <p className='relative font-semibold flex justify-center items-center mt-16'>Shop Men&apos;s</p>
        <div className="flex relative w-10 h-10 rounded-full  justify-center items-center mt-14 text-gray-500 ">
        <FaAngleRight className='text-gray-600 w-8 h-8 p-2 text-lg bg-gray-100 hover:bg-gray-300 rounded-full'/>
        </div>
        <div className="relative flex w-10 h-10 justify-center items-center mt-14 text-gray-500  ">
        <FaChevronLeft className='text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full'/>
        </div>
            </div> 
            <div className="flex gap-1 justify-center items-center ml-[26%]">
            <p className='relative font-semibold flex justify-center items-center mt-16 ml-28'>Shop Women&apos;s</p>
        <div className="flex relative w-10 h-10 rounded-full  justify-center items-center mt-14 text-gray-500 ">
        <FaAngleRight className='text-gray-600 w-8 h-8 p-2 text-lg bg-gray-100 hover:bg-gray-300 rounded-full'/>
        </div>
        <div className="relative flex w-10 h-10 justify-center items-center mt-14 text-gray-500  ">
        <FaChevronLeft className='text-gray-600 w-8 h-8 p-2 bg-gray-100 hover:bg-gray-300 rounded-full'/>
        </div>
       <div className="absolute w-[1388px] h-[447px] flex justify-start items-start gap-10 mr-[58%] mt-[38%]">
       {/* <div className="w-[666px] h-[447px] grid grid-cols-4 bg-pink-200">
          <div className=" w-[300px] h-[393px] grid grid-cols-2 gap-x-2 bg-purple-300 border-[1px] border-gray-200">
           

          </div>
          <div className="relative w-[300px] h-[393px] grid col-span-2 gap-2 bg-purple-300 border-[1px] border-gray-200">
           


           </div> 
        </div> */}
         <div className="w-[1388px] h-[393px] grid grid-cols-4">
       
        <div className="w-[300px] h-[393px] grid grid-cols-1 gap-2 border-[1px] border-gray-200 ">
          <Image src={menshorts} alt="menshorts" height={300} width={300} className='hover:border-[2px] hover:border-gray-600'/>
          <div className="absolute w-[300px] h-[32px] mt-[282px] bg-white">
          <div className="flex justify-between items-center">
            <h2 className='flex relative text-sm font-semibold mt-8 '>Nike Dri-FIT ADV TechKnit Ultra</h2>
            <span className='mt-8 font-semibold text-sm'>₹{" "}3.895</span>
            <span className='absolute text-gray-600 text-sm mt-[80px]'>Men&apos;s Short Sleeve</span>
            <span className='absolute text-gray-600 text-sm mt-32'>Running Top</span>
          </div>
          </div>
        </div>
        <div className="w-[300px] h-[393px] grid grid-cols-1 border-[1px] border-gray-200">
        <Image src={nikeshorts} alt="nikeshorts" height={300} width={300} className='hover:border-[2px] hover:border-gray-600'/>
        <div className="absolute w-[300px] h-[32px] mt-[282px] bg-white">
          <div className="flex justify-between items-center">
            <h2 className='flex relative text-sm font-semibold mt-8 '>Nike Dri-FIT Challenger</h2>
            <span className='mt-8 font-semibold text-sm'>₹{" "}2.495</span>
            <span className='absolute text-gray-600 text-sm mt-[80px]'>Men&apos;s 18cm(approx.)2-</span>
            <span className='absolute text-gray-600 text-sm mt-32'>in-{" "} 1 Versatile Shorts</span>
          </div>
          </div>
        </div>
         
       
        <div className="w-[300px] h-[393px] grid grid-cols-1 gap-2 border-[1px] border-gray-200 ">
        <Image src={womentop} alt="womentop" height={300} width={300} className='hover:border-[2px] hover:border-gray-600'/>
        <div className="absolute w-[300px] h-[32px] mt-[282px] bg-white">
          <div className="flex justify-between items-center">
            <h2 className='flex relative text-sm font-semibold mt-8 '>Nike Dri-FIT ADV Run Division</h2>
            <span className='mt-8 font-semibold text-sm'>₹{" "}5.295</span>
            <span className='absolute text-gray-600 text-sm mt-[80px]'>Women&apos;s Long-Sleeve</span>
            <span className='absolute text-gray-600 text-sm mt-32'>Running Top</span>
          </div>
          </div>
        </div>
        <div className="w-[300px] h-[393px] grid grid-cols-1 border-[1px] border-gray-200 ">
        <Image src={leggings} alt="leggings" height={300} width={300} className='hover:border-[2px] hover:border-gray-600'/>
        <div className="absolute w-[300px] h-[32px] mt-[282px] bg-white">
          <div className="flex justify-between items-center">
            <h2 className='flex relative text-sm font-semibold mt-8 '>Nike Fast</h2>
            <span className='mt-8 font-semibold text-sm'>₹{" "}3.795</span>
            <span className='absolute text-gray-600 text-sm mt-[80px]'>Women&apos;s Mid-Rise 7/8 Running</span>
            <span className='absolute text-gray-600 text-sm mt-32'>Leggings with Pockets</span>
          </div>
          </div>
        </div>
        
</div>
         </div>
         </div>
      
    </div>
  )
}

export default Products;