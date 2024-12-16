'use client';
import TopNavbar from '@/components/topNavbar';
import { products } from '../../data/productsData';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import MainNav from '@/components/mainNav';
import Footer from '@/components/footer';
import Image from 'next/image';


type Product = {
  id: string;
  title: string;
  category: string;
  color: string;
  price: string;
  image: string;
  tag: string;
  description: string;
  details: string;
  style: string;
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = products.find((p) => p.id === params.id);
      setProduct(foundProduct || null);
    };

    fetchProduct();
  }, [params.id]);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-[1440px] w-full h-auto mx-auto">
    {/* Top Navigation */}
    <TopNavbar />
    <MainNav />
     

    <div className="w-full px-6 lg:pr-12 mt-2">
    <h2 className='flex font-semibold text-lg font-sans'>Member Access</h2>
    <div className="max-w-[1200px] w-full h-[580px] grid grid-cols-2 ">
      <div className="w-[600px] grid grid-cols-1  ">
      <div>
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
      </div>
      </div>
      <div className="w-[376px] h-auto grid grid-cols-1 ml-48">
      <div className='flex gap-2'>
        <Image
          src={product.image}
          alt={product.title}
          className="w-[144px] h-[144px] object-contain"
        />
         <Image
          src={product.image}
          alt={product.title}
          className="w-[144px] h-[144px] object-contain"
        />
      </div>
      <p className="text-gray-900 mt-14">{product.description}</p>
         <div className='mt-10 ml-8 text-sm font-medium text-gray-900 gap-2'>
            <p className="text-gray-900">{product.title}</p>
            <p className="text-gray-900">{product.details}</p>
            <p className="text-gray-900">{product.style}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 mt-12 text-sm underline underline-offset-1">View Product Details:</h3>
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
            <h3 className="font-bold mb-2 mt-6">Sie & Fit</h3>
            <span className='text-3xl mt-6'><RiArrowDropDownLine /></span>    
            </div>
          </div>

      </div>
    </div>  
    </div>
    <div className="mt-0">
    <Footer />
    </div>
     </div>

  );
}
   