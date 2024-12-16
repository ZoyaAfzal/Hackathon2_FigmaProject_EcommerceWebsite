import Footer from '@/components/footer'
import MainNav from '@/components/mainNav'
import TopNavbar from '@/components/topNavbar'
import React from 'react'

function AddToCart() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <TopNavbar />
      <MainNav />

      <div className="w-full flex justify-center items-center px-6 mt-40">
        <div className="w-[304px] h-[422px]">
            <h2 className="text-lg text-gray-900 font-semibold mx-8">View or Manage Your Order</h2>
            <p className="text-sm text-gry-900 font-medium mt-4 gap-y-2 mx-2">To check the status of your order, or to start a return, please enter your order number and email address.</p>
            <input type="text" className="w-[304px] h-14 mt-8 rounded-lg text-[#757575] border-[1px] px-5 text-lg border-[#757575]" placeholder='Order Number*'/>
            <input type="text" className="w-[304px] h-14 mt-8 rounded-lg text-[#757575] border-[1px] px-5 text-lg border-[#757575]" placeholder='Email address*'/>
            <button className="w-[304px] h-14 rounded-3xl bg-[#E5E5E5] text-[16px] text-[#757575] font-semibold font-sans mt-10 hover:bg-gray-300 hover:text-white">Submit</button>
            <p className="flex mt-6 text-gray-900 mx-12">Already a member? <span className='text-[16px] font-semibold'>Sign in</span></p>
        </div>    
        </div>
        <div className="">
            <Footer />
        </div>
    </div>
  )
}

export default AddToCart;