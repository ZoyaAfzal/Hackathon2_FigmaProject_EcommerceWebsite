import Image from 'next/image';
import React from 'react';
import banner from "../../public/images/banner.png";

function BannerBottom() {
  return (
        <div className="w-full absolute max-w-[1344px] h-[700px] flex items-center justify-center ml-32">
                <h3 className='text-black text-3xl font-semibold font-sans mt-[1300px] mr-[1210px]'>Featured</h3>
    <div className='w-full h-[977px] absolute flex justify-center items-center mt-[2060px]'>
                <Image src={banner} alt="banner2" width={1344} height={700} className='w-full h-auto mt-14'/>
                <h1 className='absolute text-7xl font-semibold font-sans mt-[950px] uppercase'>step into what feels good</h1>
                <p className='absolute text-sm font-semibold mt-[1140px]'>Cause everyone should know the feeling of runnung in that perfect pair.</p>
                <button className='absolute w-[152px] h-[39px] rounded-3xl text-white mt-[1270px] bg-black'>Find Your Shoe</button>
        </div>
    </div>
  )
}

export default BannerBottom;