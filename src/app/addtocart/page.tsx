import MobileNavbar from '@/components/mobileNavbar';
import { FaRegHeart } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import React from 'react';
import Image from 'next/image';

const products = [
    {
      id: 1,
      image: "/images/nikeairmax1.png",
      name: "Nike Air Max Pulse",
      price: "₹13,995",
      category: "Women's Shoes",
    },
    {
      id: 2,
      image: "/images/nikeairmax2.png",
      name: "Nike Air Max Pulse",
      price: "₹13,995",
      category: "Men's Shoes",
    },
    {
      id: 3,
      image: "/images/nikeairmax3.png",
      name: "Nike Air Max Pulse",
      price: "₹13,995",
      category: "Men's Shoes",
    },
  ];
function AddToCartSection() {
  return (
    <div className="max-w-[1440px] w-full mx-auto flex justify-center items-center">  
    <div className="md:hidden">
    <MobileNavbar/>
    </div> 
    <div className="max-w-[1100px] w-full h-[940px] grid grid-cols-3 mt-14">
        <div className=" w-[733px] h-[547px]">
            <div className="flex flex-col justify-start items-start bg-colors-bgColor w-[717px] h-16 ml-2 gap-1 px-6 ">
                <h3 className='text-[16px] font-medium mt-2'>Free Delivery</h3>
                <p className="text-sm text-[#111111]">Applies to order of ₹14 000.00 or more. <span className="text-sm text-gray-800 font-medium underline underline-offset-1 ml-4">View details</span></p>
        </div>
        <h2 className="mt-6 text-2xl font-semibold mx-3">Bag</h2>
        <div className="w-[717px] h-[436px] mt-1 mx-2">
            <div className="w-[717px] h-[218px] mt-4">
                <div className="grid grid-cols-4">
                    <div className="w-[150px] h-[150px] border-[1px] text-center">Image</div>
                    <div className="flex flex-col space-y-12">
                     <div className="w-[235px] h-[112px] border-[1px] text-center">Product Details
                    </div>
                    <div className="flex w-[80px] h-7 gap-6">
                        <FaRegHeart className='text-2xl pt-1'/>
                        <AiTwotoneDelete className='text-2xl'/>
                    </div>
                    </div>
                    <div className="w-[155px] h-7 border-[1px] text-center ml-[204px]">Product Price</div>
                </div>
            </div>
            <div className="w-[717px] h-[218px] border-t">
            <div className="grid grid-cols-4">
                    <div className="w-[150px] h-[150px] border-[1px] text-center">Image</div>
                    <div className="flex flex-col space-y-12">
                     <div className="w-[235px] h-[112px] border-[1px] text-center">Product Details
                    </div>
                    <div className="flex w-[80px] h-7 gap-6">
                        <FaRegHeart className='text-2xl pt-1'/>
                        <AiTwotoneDelete className='text-2xl'/>
                    </div>
                    </div>
                    <div className="w-[155px] h-7 border-[1px] text-center ml-[204px]">Product Price</div>
                </div>
            </div>
            <div className="w-[1090px] h-20 flex flex-col">
                <h4 className="text-2xl font-semibold pt-6 mx-2">Favourites</h4>
                <p className="mx-2">There are no items saved to your favorites.</p>
            </div>
        </div>        
            </div>
            <div className="w-[350px] h-[295px] ml-[382px]">
                <h5 className="text-2xl font-semibold">Summary</h5>
                <div className="flex justify-between items-center w-[334px] h-7 mt-8 text-sm">
                    <p className="">Subtotal</p>
                    <p className="">Price</p>
                </div>
                <div className="flex justify-between items-center w-[334px] h-7 text-sm">
                    <p className="">Estimated Delivery & Handling</p>
                    <p className="">Free</p>
                </div>
                <div className="flex justify-between items-center w-[334px] h-16 text-sm border-t border-b mt-4">
                    <p className="">Total</p>
                    <p className="">TotalPrice</p>
                </div>
                <button className="flex justify-center items-center bg-black mt-8 w-[334px] h-14 text-white hover:text-gray-400 rounded-full">Member Checkout</button>
            </div>   
      </div>
            <div className="flex max-w-[1100px] h-auto w-full absolute mt-[420px]">
                <h1 className='absolute text-2xl font-medium mt-[540px]'>You Might Also Like</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[570px]">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative flex flex-col items-center h-[408px] w-[331px] hover:border-[2px]"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={441}
            height={441}
            className="w-full"
          />
          <div className="absolute bottom-0 w-full bg-white p-4">
            <div className="flex">
              <h2 className="text-sm font-semibold hover:text-colors-secondaryColor">
                {product.name}
              </h2>
            </div>
            <div>
              <span className="font-semibold text-sm hover:text-colors-secondaryColor text-gray-400">
                {product.category}
              </span>
            </div>
            <div>
            <span className="text-sm font-semibold">MRP: <span className='text-sm'>{product.price}</span></span>
            </div>
          </div>
        </div>
      ))}
    </div>
                
            </div>          
      </div>
       
    
       
  
     
 
  )
}

export default AddToCartSection;