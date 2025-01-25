import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { IoLocation } from "react-icons/io5";

function Footer() {
  return (
    <div className='lg:w-[1266px] max-w-[1320px] w-full h-auto flex justify-center items-center lg:mt-20 md:mt-[26%] mt-[160%] xs:mt-0 bg-black text-white'>
        <div className=" w-full h-auto grid  grid-cols-1 md:grid-cols-2 mt-16 mr-6 gap-8 ">
        <div className="max-w-[832px] w-full h-[23] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-44 md:gap-4 gap-y-20 mx-4 sm:mx-10">
          <div className="w-[225px] h-[169px] flex flex-col bg-black ">
            <ul className='space-y-4 flex flex-col text-white font-medium font-sans text-[16px]'>
              <li className='uppercase'>Find a Store</li>
              <li className='uppercase'>Become a Member</li>
              <li className='uppercase'>Sign up for email</li>
              <li>Send Us Feedback</li>
              <li className='uppercase'>Student discounts</li>
            </ul>
          </div>
          <div className="w-[255px] h-[213px] flex justify-start items-start md:ml-52 lg:ml-0 ml-0">
            <ul className="gap-y-4 flex flex-col font-medium font-sans text-[16px]">
              <li className='text-white uppercase'>Get help</li>
              <li className='text-[#7E7E7E]'>Order Status</li>
              <li className='text-[#7E7E7E]'>Delivery</li>
              <li className='text-[#7E7E7E]'>Returns</li>
              <li className='text-[#7E7E7E]'>Payment Options</li>
              <li className='text-[#7E7E7E]'>Contact Us On Nike.com Inquiries</li>
              <li className='text-[#7E7E7E]'>Contact Us On All Other Inquiries</li>
            </ul>
          </div>
          <div className="w-[225px] h-[148px] flex justify-start items-start md:mt-4 lg:mt-0 mt-0 lg:ml-8">
          <div className="w-[225px] h-[169px] flex justify-start items-start">
            <ul className="gap-y-4 flex flex-col font-medium font-sans text-[16px]">
              <li className='text-white uppercase'>About me</li>
              <li className='text-[#7E7E7E]'>News</li>
              <li className='text-[#7E7E7E]'>Comments</li>
              <li className='text-[#7E7E7E]'>Investors</li>
              <li className='text-[#7E7E7E]'>Sustainability</li>
            </ul>      
          </div>
        </div>
      </div>
    
          <div className="w-[337px] h-[37px] flex  flex-wrap lg:justify-end lg:items-end lg:ml-[240px] justify-start items-start lg:gap-x-7 ml-[20px] pt-16 md:pt-[386px] lg:pt-1 gap-x-10 sm:mx-10">
            <div className="w-10 h-10 rounded-full bg-[#7E7E7E] flex justify-center items-center">
            <FaTwitter className='text-black text-[22px]'/>
            </div> 
            <div className="w-10 h-10 rounded-full bg-[#7E7E7E] flex justify-center items-center">
            <FaFacebookF className='text-black text-[22px]'/>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#7E7E7E] flex justify-center items-center">
            <TfiYoutube className='text-black text-[24px]'/>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#7E7E7E] flex justify-center items-center">
            <TiSocialInstagram className='text-black text-[24px]'/>
            </div>
          </div>
         
          <div className="flex w-full h-auto flex-wrap justify-between items-center border-t border-gray-800 lg:w-[1200px] bg-gray-260 mt-20 md:w-[768px] md:p-2">
            <div className="flex justify-start gap-4 sm:mx-10 xs:mx-6">
           <IoLocation className='text-white text-lg mt-6' />
           <p className='text-white text-[16px] mt-6 '>India
           <span className="ml-8 text-[#7E7E7E] text-sm">© 2023 Nike, Inc. All Rights Reserved.</span>
           </p>
            </div>
            <div className="flex flex-wrap justify-end sm:flex-col">
              <ul className='flex text-[#7E7E7E] text-sm lg:gap-8 gap-8 mt-6 mr-4 md:gap-32 sm:mx-12 xs:mx-6 sm:gap-10'>
               <li>Guides</li>
               <li>Terms of Sale</li>
               <li>Terms of Use</li>
               <li>Nike Privacy Policy</li>
              </ul>
            </div>   
          </div>
          </div>
          </div>
  )
}




export default Footer; 




