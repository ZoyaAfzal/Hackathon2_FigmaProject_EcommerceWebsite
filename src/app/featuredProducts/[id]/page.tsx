'use client'
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import MobileNavbar from '@/components/mobileNavbar';



interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  sizes: string[];
  rating: number;
  stock: number;
  discount: number;
  category: string;
  color: string[];
  details: string;
  style: string;
  tag: string;
  id: string;
}

interface ProductDetailsProps {
  params: { id: string };
  
}

const ProductDetails =  ({ params }: ProductDetailsProps) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
 
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
  const query = `*[_type == "product" &&  _id == $id][0]{
    _id, name, "imageUrl": image.asset->url, description, price, sizes, rating,
    stock, discount,
    category, color, details, style, tag  
  }`;
 
   const fetchedProduct: Product = await client.fetch(query, { id });
   setProduct(fetchedProduct);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [id]);

const handleSizeSelect = (size: string) => {
  setSelectedSize(size); // Update the selected size
};

const handleAddToBag = () => {
  if (!selectedSize) {
    alert("Please select a size before adding to the bag.");
    return;
  }
  const cartItem = {
    ...product,
    selectedSize,
  }


  const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
  localStorage.setItem("cart", JSON.stringify([...currentCart, cartItem]));

alert("Product added to bag!");
  // Redirect to Add to Bag page if needed
  window.location.href = "/addToCart"; // Replace with your route
}; 

const increaseQuantity = () => {
  setQuantity((prev) => prev + 1); 
};

const decreaseQuantity = () => {
  setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); 
};



if (loading) {
  return <div>Loading product details...</div>;
}

if (!product) {
  return <div>Product not found</div>;
}



  return (
    <div className="max-w-[1440px] w-full h-auto mx-auto md:px-8">
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    <div className="w-full h-auto md:h-[1880px] lg:h-[1130px] sm:h-[1050px] xs:h-[1230px] px-6 lg:pr-12 mt-2 xs:w-[400px] sm:w-[650px]">
    <h2 className='flex font-semibold text-lg font-sans text-center md:text-left mt-4'>Member Access</h2>
    <div className="max-w-[1200px] w-full h-[580px] grid grid-cols-1 lg:grid-cols-2 xs:w-[400px] sm:w-[700px]">
      <div className="w-[700px] h-auto grid grid-cols-2 sm:mt-4 lg:mt-0 xs:w-[350px] sm:w-[700px] ">
        <div className="md:space-y-4 flex-col">
      <div className='gap-4 flex'>
      <Image
          src={product.imageUrl}
          alt={product.name}
          width={349}
          height={414}
          className="w-[250px] h-[250px] md:w-[349px] md:h-[414px] sm:w-[280px] sm:h-[400px] object-contain"
          /> 
         <Image
          src={product.imageUrl}
          alt={product.name}
          width={349}
          height={414}
          className="w-[250px] h-[250px] md:w-[349px] md:h-[414px] sm:w-[280px] sm:h-[400px] object-contain"
          /> 
 </div>
 
 <div className='gap-4 flex'>
      <Image
          src={product.imageUrl}
          alt={product.name}
          width={349}
          height={414}
          className="w-[250px] h-[250px] md:w-[349px] md:h-[414px] sm:w-[280px] sm:h-[400px] object-contain"
          /> 
         <Image
          src={product.imageUrl}
          alt={product.name}
          width={349}
          height={414}
          className="w-[250px] h-[250px] md:w-[349px] md:h-[414px] sm:w-[280px] sm:h-[400px] object-contain"
          /> 
          </div>      
      </div>
      </div>    
      <div className="w-[376px] h-auto grid grid-cols-1 lg:ml-[400px] md:mt-6 xs:mt-2">
      <div className='flex flex-col'>
      <p className="text-gray-900 text-2xl font-semibold">{product.name}</p>
      <p className="text-gray-900 text-[16px] font-semibold">{product.category}</p>
      <p className="text-[16px] font-semibold mt-4">MRP: {" "}{product.price}</p>
      <p className="text-sm text-[#757575]">incl. of taxes</p>
      <p className="text-sm text-[#757575]">(Also includes all applicable duties)</p>
          <div className="flex justify-between items-end mt-2 px-2 xs:w-[340px]  lg:w-[356px] sm:mt-4 ">
            <label className="block text-[16px] font-semibold">Select Size:</label>
            <label className="block text-sm  font-medium ">Select Guide</label>
          </div>
         <div className="mt-1 lg:w-[356px] xs:w-[340px]  h-auto p-2">
            <div className="grid  grid-cols-2 md:grid-cols-3 gap-2 ">
            {product.sizes && product.sizes.length > 0 ? (
  product.sizes.map((size) => (
    <button key={size} 
    onClick={() => handleSizeSelect(size)}
    className={`py-2 px-4 border-[1px] rounded-lg cursor-pointer${
                        selectedSize === size
                          ? "bg-red-200 border-black"
                          : "hover:border-black hover:bg-gray-100"
                      }`}>{size}</button>
  ))
) : (
  <p>No sizes available</p>
)}
    </div>
  <div className="mt-8 flex items-center gap-3 font-semibold text-[16px]">Quantity: 
              <button
                onClick={decreaseQuantity}
                className="w-8 h-8  border-[1px] flex items-center justify-center text-lg"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="w-8 h-8  border-[1px] flex items-center justify-center text-lg"
              >
                +
              </button>
            </div>
          
            <button   onClick={handleAddToBag} className="w-[336px] h-14 rounded-3xl bg-black text-[16px] text-white font-semibold font-sans mt-10 hover:bg-gray-300 ">Add to Bag</button>
            <button className="w-[336px] h-14 rounded-3xl bg-black text-lg text-white font-semibold font-sans mt-2 hover:bg-gray-300 ">Favourite</button>
            </div>
      <p className="text-gray-900 mt-10 sm:text-left  md:mr-0 lg:mr-28  sm:mr-0 sm:ml-0 lg:w-[356px]">{product.description}</p>
         <div className='mt-10 ml-8 xs:ml-14 text-sm font-medium text-gray-900 gap-2 text-center md:text-left md:mr-0 mr-28'>
         <p className="text-gray-900">Color Shown: {" "}{product.color}</p>
            <p className="text-gray-900">{product.details}</p>
            <p className="text-gray-900">{product.style}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 mt-12 text-sm underline underline-offset-1 md:mr-0 mr-40">View Product Details:</h3>
            <div className="flex  justify-between w-[376px] h-[80px] border-t mt-6">
            <h3 className="font-bold mb-2 mt-6">Delivery & Returns</h3>
            <span className='text-3xl mt-6'><RiArrowDropDownLine /></span>        
            </div>
            <div className="flex  justify-between w-[376px] h-[80px] border-t ">
            <h3 className="font-bold mb-2 mt-6">Reviews (49)</h3>
            <span className='text-3xl mt-6'><RiArrowDropDownLine /></span>        
            </div>
            <div className="flex  justify-between w-[376px] h-[80px] border-t ">
            <h3 className="font-bold mb-2 mt-6">Product Informtion</h3>
            <span className='text-3xl mt-6'><RiArrowDropDownLine /></span>        
            </div>
            <div className="flex  justify-between w-[376px] h-[80px] border-t ">
            <h3 className="font-bold mb-2 mt-6">More Info</h3>
            <span className='text-3xl mt-6'><RiArrowDropUpLine /></span>        
            </div>
            <div className="flex  justify-between w-[376px] h-[80px] border-t "> 
            <h3 className="font-bold mb-2 mt-6">Size & Fit</h3>
            <span className='text-3xl mt-6'><RiArrowDropDownLine /></span>    
            </div>
          </div>

      </div>
    </div>  
    </div>
    </div>
</div>


);
}


export default ProductDetails; 
