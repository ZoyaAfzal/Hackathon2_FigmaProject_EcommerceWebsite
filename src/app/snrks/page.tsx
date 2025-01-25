import React from 'react';
import CustomNavbar from '@/components/customNavbar';
import CustomTopNavbar from '@/components/customTopNavbar';
import { client } from '@/sanity/lib/client';
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';



interface Product {
  name: string;
  image: string;
  price?: number;
  color: string;
} 

async function SNRKSsection() {
  const query = `*[_type == "product"]{
    name,
    color,
    image
  }`;
  const products: Product[] = await client.fetch(query);
  
  return (
    <div className='max-w-[1344px] w-full h-auto'>
      <div className="hidden xs:block">
   <CustomTopNavbar />
      </div>
   <CustomNavbar />
   <div className="max-w-[1344px] lg:w-[1222px] h-auto md:w-[740px] sm:w-[580px] xs:w-[420px] w-full  md:h-[1050px] sm:h-[1600px] bg-pink-300 mt-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 md:gap-y-6 mx-8">
    <div className="lg:w-[390px] md:w-[340px] sm:w-[360px] xs:w-[300px] h-[506px] sm:mx-28 xs:mx-16 lg:mx-0">
    {products.map((product) => (
        <div key={product.name} className="border p-4">
          <Image src={urlFor(product.image).url()} alt={product.name} width={500} height={500} className="w-full h-auto" />
          <h2 className="text-lg font-bold">{product.name}</h2>  
          <h3 className="text-lg font-bold">{product.color}</h3>     
        </div>
      ))}
    </div>
    <div className="lg:w-[390px] md:w-[340px] sm:w-[360px] xs:w-[300px] h-[506px] sm:mx-28 xs:mx-16 lg:mx-0 bg-red-400"></div>
    <div className="lg:w-[390px] md:w-[340px] sm:w-[360px] xs:w-[300px] h-[506px] sm:mx-28 xs:mx-16 lg:mx-0 bg-red-800"></div>
   </div>
    </div>
  )
}

export default SNRKSsection;