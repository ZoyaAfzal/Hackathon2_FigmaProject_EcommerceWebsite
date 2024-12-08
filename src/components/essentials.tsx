import Image from 'next/image';
import React from 'react';
import essential from "../../public/images/essential.png";

function Essentials() {
  return (
        <div className="w-full absolute max-w-[1344px] h-[700px] flex items-center justify-center ml-32">
                <h3 className='text-black flex whitespace-nowrap text-3xl font-semibold  font-sans mr-[1200px] mb-[434px]'>Don&apos;t Miss</h3>
    <div className='w-full h-[977px] absolute flex justify-center items-center mt-72'>
                <Image src={essential} alt="banner3" width={1344} height={700} className='w-full h-auto mt-14'/>
                <h1 className='absolute text-7xl font-semibold font-sans mt-[950px] uppercase'>Flight Essentials</h1>
                <p className='absolute text-sm font-semibold mt-[1140px]'>Your built-to-last, all week wears -- but with style only Jordan Brand can deliver.</p>
                <button className='absolute w-[80px] h-[39px] rounded-3xl text-white mt-[1270px] bg-black'>shop</button>
        </div>
    </div>
  )
}

export default Essentials;