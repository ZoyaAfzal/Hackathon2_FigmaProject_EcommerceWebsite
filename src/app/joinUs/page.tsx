import Image from 'next/image';
import React from 'react';
import nike from "../../../public/images/nike.png";
import MobileNavbar from '@/components/mobileNavbar';

function SignIn() {
  return (
    <div className="max-w-[1344px] w-full mx-auto h-auto ">  
     <div className="md:hidden">
    <MobileNavbar/>
    </div>  
    <div className="flex justify-center items-center w-full h-auto">
    <div className="w-[380px] h-[540px] mt-8">
        <div className="flex justify-center items-end mt-6">
            <Image src={nike} alt="nikelogo2" width={59} height={20} />
        </div>
        <h1 className='uppercase text-3xl text-gray-900 font-semibold mt-6 font-sans gap-3 mx-16'>Your Account <span>For Everything</span> <span className='ml-20'>Nike</span></h1>
        <input type="text" className="w-[324px] h-10 border-[1px] bg-[#FFFFFF] border-[#E5E5E5] text-[#8D8D8D] text-sm mt-6 px-4 mx-7" placeholder='Email Address'/>
        <input type="text" className="w-[324px] h-10 border-[1px] bg-[#FFFFFF] border-[#E5E5E5] text-[#8D8D8D] text-sm mt-4 px-4 mx-7" placeholder='Password'/>
        <input type="text" className="w-[324px] h-10 border-[1px] bg-[#FFFFFF] border-[#E5E5E5] text-[#8D8D8D] text-sm mt-4 px-4 mx-7" placeholder='SavedAddress'/>
        <h3 className="text-2xl font-semibold uppercase text-gray-900 text-center mt-4 font-sans">Order History</h3>
        <input type="text" className="w-[324px] h-10 border-[1px] bg-[#FFFFFF] border-[#E5E5E5] text-[#8D8D8D] text-sm mt-4 px-4 mx-7" placeholder='Order ID'/>
        <input type="text" className="w-[324px] h-10 border-[1px] bg-[#FFFFFF] border-[#E5E5E5] text-[#8D8D8D] text-sm mt-4 px-4 mx-7" placeholder='Order Date'/>
        <input type="text" className="w-[324px] h-10 border-[1px] bg-[#FFFFFF] border-[#E5E5E5] text-[#8D8D8D] text-sm mt-4 px-4 mx-7" placeholder='Order Total'/>
         <div className="flex">
        <input type="checkbox" id="Keep me signed in" className='text-2xl text-[#8D8D8D] mt-8 ml-8 accent-gray-200' />
        <span className='mt-8 text-sm text-[#8D8D8D] ml-2'>Keep me signed in</span>
        <span className='mt-8 text-sm text-gray-300 ml-6'>Forgotten your password?</span>
         </div>
        <p className="mt-6 mx-10 text-[#8D8D8D] text-sm">By logging in, you agree to Nike&apos;s <span className='underline underline-offset-1'>Privacy Policy</span> <span >and</span> <span className='underline underline-offset-1'>Terms of Use</span>.</p>
        <button className="w-[324px] h-[40px] text-white mt-8 font-medium uppercase bg-black mx-7 text-sm">sign in</button>  
        <p className="text-[#8D8D8D] text-sm mt-6 mx-28">Not a member?{" "}<span className='text-gray-700 underline underline-offset-1'>Join Us.</span></p> 
    </div>
    </div>
      </div>
  )
}

export default SignIn;