import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <div className='w-full h-[700px] flex justify-center items-center '>
        <Image src="/images/nikebanner.png" alt="nikebanner" width={1344} height={700}   
        className=' lg:w-[1344px] lg:h-[700px]  w-full h-full object-cover md:w-[968px] md:h-[700px] sm:w-[320px] sm:h-[500px]'
         />
    </div>
  )
}

export default Banner;
