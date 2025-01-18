'use client'
import MobileNavbar from '@/components/mobileNavbar';
import { FaRegHeart } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const products = [
    {
      id: 1,
      image: "/images/jordanwhynot.png",
      name: "Jordan Why Not .6 PF",
      price: "₹13,995",
      category: "Men's Shoes",
    },
    {
      id: 2,
      image: "/images/nikeairforce1.png",
      name: "Nike Air Force 1 Low Retro",
      price: "₹13,995",
      category: "Men's Shoes",
    },
    {
      id: 3,
      image: "/images/nikesuperrep.png",
      name: "Nike SuperRep Go 3 Next Nature Flyknit",
      price: "₹8,895",
      category: "Men's Training Shoes",
    },

  ];
  
  interface CartItem {
    _id: string;
    name: string;
    imageUrl: string;
    price:number;
    selectedSize: string;
    details:string;
    category:string;
    quantity:number;
  }
 
 function AddToCartSection() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
  }, []);

 
  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  const handleAddToWishlist = (item: CartItem) => {
    // Check if item already exists in the wishlist
    const isAlreadyInWishlist = wishlistItems.some((wishItem) => wishItem._id === item._id);
    if (!isAlreadyInWishlist) {
      const updatedWishlist = [...wishlistItems, item];
      setWishlistItems(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert(`${item.name} has been added to your wishlist!`);
    } else {
      alert(`${item.name} is already in your wishlist.`);
    }
  };


  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlistItems.filter((item) => item._id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };


  return (
    <div className="max-w-[1440px] w-full mx-auto h-auto">  
    <div className="md:hidden">
    <MobileNavbar/>
    </div> 
    <div className="max-w-[1440px] w-full h-auto grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mt-14">
        <div className=" w-[733px] h-[547px] md:ml-9 ">
            <div className="flex flex-col justify-start items-start bg-colors-bgColor w-[700px] lg:w-[660px] md:w-[700px] sm:w-[626px] xs:w-[472px] sm:ml-4 h-16 ml-2 gap-1 px-6 lg:ml-8">
                <h3 className='text-[16px] font-medium mt-2'>Free Delivery</h3>
                <p className="text-sm text-[#111111]">Applies to order of ₹14 000.00 or more. <span className="text-sm text-gray-800 font-medium underline underline-offset-1 ml-4">View details</span></p>
        </div>
        <h2 className="mt-6 text-2xl font-semibold mx-3 lg:ml-[38px] sm:ml-6 xs:ml-4">Bag</h2>
        <div className="w-[717px] md:h-[436px] mt-1 mx-2 xs:mx-4 h-auto">
            <div className="w-[717px] h-[218px] mt-4 lg:ml-6 lg:w-[600px] md:w-[670px] sm:w-[510px] xs:w-[240px] sm:ml-4 space-y-4">
        {cartItems.map((item) => (
                <div  key={item._id} className="grid grid-cols-4 h-auto">
                    <div className="w-[320px] xs:w-[120px] h-[170px] border-[1px] text-center">
                    <Image src={item.imageUrl} alt={item.name} className="w-[320px] h-[170px] object-cover" />
                    </div>
                    <div className="flex flex-col sm:ml-7 xs:ml-14 ">
                     <div className="w-[295px] h-[122px]  text-center font-semibold">{item.name}
                     <div className="w-[295px] h-[122px] text-[12px] text-center text-[#757575]">{item.category}
                     <div className="w-[295px] h-[122px] text-[12px] text-center text-[#757575]">Selected Size:{" "}{item.selectedSize}
                     <div className="w-[295px] h-[122px] text-[10px] text-center text-[#757575] px-2">{item.details}
                     <p>Price: {item.price}</p>
                     <p>Total: ₹{item.price * item.quantity}</p>
                     </div>
                     </div>
                     </div>
                    </div>
                    <div>
                      </div>
              
                    <div className="flex w-[80px] h-7 gap-4 lg:ml-28">
                        <FaRegHeart 
                         onClick={() => handleAddToWishlist(item)}
                        className='text-2xl pt-1 cursor-pointer'/>
                        <AiTwotoneDelete 
                          onClick={() => handleRemoveItem(item._id)}
                        className='text-2xl cursor-pointer'/>             
                    </div>
                    </div>
                    <div className="w-[155px] xs:w-[100px] h-7 border-[1px] text-center ml-[204px] xs:ml-60">{item.price}</div>
                </div>
        ))
      }
            </div>
        
            <div className="w-[1100px] h-auto flex flex-col lg:ml-14 md:mt-8 sm:ml-6 mt-40">
                <h4 className="text-2xl font-semibold pt-6 mx-2 mt-auto md:mt-40 h-auto">Favourites</h4>
      {wishlistItems.length === 0 ? (
        <p>There are no items saved to your favorites.</p>
      ) : (
        wishlistItems.map((item) => (
          <div key={item._id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center gap-4">
              <Image src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover" />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm">Size: {item.selectedSize}</p>
                <p className="text-sm">Price: {item.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveFromWishlist(item._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Remove from Wishlist
            </button>
          </div>
        ))
      )}
            </div>
        </div>        
            </div>
            <div className="max-w-[350px] h-[295px] ml-[460px] lg:ml-[420px] lg:mt-[8px] lg:w-[10px] md:mt-44 md:ml-[50px] xs:mt-40 sm:ml-10 xs:ml-6 sm:mt-44">
                <h5 className="text-2xl font-semibold">Summary</h5>
                <div className="flex justify-between items-center w-[334px] lg:w-[280px] h-7 mt-8 text-sm">
                    <p className="">Subtotal</p>
                    <p className="">Price</p>
                </div>
                <div className="flex justify-between items-center w-[334px] lg:w-[280px] h-7 text-sm">
                    <p className="">Estimated Delivery & Handling</p>
                    <p className="">Free</p>
                </div>
                <div className="flex justify-between items-center w-[334px] lg:w-[280px] h-16 text-sm border-t border-b mt-4">
                    <p className="">Total</p>
                    <p className="">TotalPrice</p>
                </div>
                <button className="flex justify-center items-center bg-black mt-8 w-[334px] lg:w-[280px] h-14 text-white hover:text-gray-400 rounded-full">Member Checkout</button>
            </div>   
      </div>
           <div className="flex  max-w-[1100px] lg:w-[1000px] md:w-[690px] sm:mt-72 sm:h-[420px] xs:h-[650px] w-full md:mt-72 md:mx-8 mt-auto lg:ml-12 sm:ml-10 xs:mt-64 xs:ml-8">
                <h1 className='flex absolute text-2xl font-semibold md:mt-26 '>You Might Also Like</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-16 md:mt-14 sm:mt-14 xs:mt-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center h-[441px] w-[340px] lg:w-[300px] hover:border-[2px] md:mr-[1400px]"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={441}
            height={441}
            className="w-full"
          />
          <div className=" bottom-0 w-full bg-white p-4">
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





