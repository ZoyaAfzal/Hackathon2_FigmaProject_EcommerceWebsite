import MobileNavbar from '@/components/mobileNavbar';
import React from 'react';

function AddToCart() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">  
    <div className="md:hidden">
    <MobileNavbar/>
        </div>  
      <div className="w-full flex justify-center items-center px-6 mt-40">
        <div className="w-[304px] h-[422px]">
            <h2 className="text-xl text-gray-900 font-semibold mx-4">View or Manage Your Order</h2>
            <p className="text-sm text-gry-900 font-medium mt-4 gap-y-2 mx-2">To check the status of your order, or to start<br/> <span>a return, please enter your order number and</span><br/><span className='mx-24'>email address.</span></p>
            <input type="text" className="w-[304px] h-14 mt-8 rounded-lg text-[#757575] border-[1px] px-5 text-lg border-[#757575]" placeholder='Order Number*'/>
            <input type="text" className="w-[304px] h-14 mt-8 rounded-lg text-[#757575] border-[1px] px-5 text-lg border-[#757575]" placeholder='Email address*'/>
            <button className="w-[304px] h-14 rounded-3xl bg-[#E5E5E5] text-[16px] text-[#757575] font-semibold font-sans mt-10 hover:bg-gray-300 hover:text-white">Submit</button>
            <p className="flex mt-6 text-gray-900 mx-12">Already a member? <span className='text-[16px] font-semibold'>Sign in</span></p>
        </div>    
        </div>
    </div>
  )
}

export default AddToCart;