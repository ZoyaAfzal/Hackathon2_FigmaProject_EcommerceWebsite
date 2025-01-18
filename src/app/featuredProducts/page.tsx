'use client'

import { IoMdSwitch } from 'react-icons/io';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ProductCard from '@/components/productCard';
import MobileNavbar from '@/components/mobileNavbar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

const NewsandFeatured: React.FC = () => {
  const sidebarList = [
    'Shoes',
    'Sports Bras',
    'Tops & T-Shirts',
    'Hoodies & Sweatshirts',
    'Jackets',
    'Trousers & Tights',
    'Shorts',
    'Tracksuits',
    'Jumpsuits & Rompers',
    'Skirts & Dresses',
    'Socks',
    'Accessories & Equipment',
  ];

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedKids, setSelectedKids] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"]{
        _id, name, "imageUrl": image.asset->url, description, price, sizes, rating,
        stock, discount, category, color, details, style, tag, id
      }`;
      try {
        const productsData: Product[] = await client.fetch(query);
        setProducts(productsData.map((product) => ({
          ...product,
          imageUrl: urlFor(product.imageUrl).url(),
        })));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const { value, checked } = e.target;
    setState((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)));
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <div className="md:hidden">
        <MobileNavbar />
      </div>

      {/* Header */}
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row justify-between items-center px-6 lg:pr-12 mt-16 lg:mt-8">
        <h1 className="text-2xl font-bold">New (500)</h1>
        <ul className="flex gap-6 mt-4 lg:mt-0 text-[16px] font-medium">
          <li className="flex items-center">
            Hide Filters <IoMdSwitch className="ml-2 text-xl" />
          </li>
          <li className="flex items-center">
            Sort <RiArrowDropDownLine className="text-3xl" />
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row mt-8">
        {/* Sidebar Section */}
        <div className="w-full lg:w-[20%] px-6 space-y-6">
          <div className="hidden lg:block border-r-[8px] h-[390px] pr-6 border-gray-500">
            <div className="flex flex-col gap-4 font-semibold">
              {sidebarList.map((item, index) => (
                <Link key={index} href="#" className="hover:text-blue-500">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Filters */}
          {[
            { label: 'Gender', options: ['Men', 'Women', 'Unisex'], state: selectedGender, setState: setSelectedGender },
            { label: 'Kids', options: ['Boys', 'Girls'], state: selectedKids, setState: setSelectedKids },
            { label: 'Shop by Price', options: ['Under ₹ 2,500.00', '₹ 2,501.00 - ₹'], state: selectedPrice, setState: setSelectedPrice },
          ].map(({ label, options, state, setState }, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mt-44 border-t">
                <h3 className="font-semibold text-lg mb-2 pt-6">{label}</h3>
                <RiArrowDropUpLine className="text-3xl pt-2" />
              </div>
              <div className="flex flex-col gap-2 lg:mt-6">
                {options.map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={option}
                      checked={state.includes(option)}
                      onChange={(e) => handleCheckboxChange(e, setState)}
                      className="w-4 h-4 accent-gray-300"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-6 md:mt-12 mt-8 lg:mt-0">
          {products.map((product) => (
            <Link key={product._id} href={`/featuredProducts/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>

      {/* Related Categories */}
      <section className="w-full max-w-[1092px] px-4 py-6 border-t mt-16 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Related Categories</h2>
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            'Best Selling Products',
            'Best Shoes',
            'New Basketball Shoes',
            'New Football Shoes',
            'New Men\'s Shoes',
            'New Running Shoes',
            'Best Men\'s Shoes',
            'New Jordan Shoes',
            'Best Women\'s Shoes',
            'Best Training & Gym',
          ].map((category) => (
            <span key={category} className="inline-block px-3 py-2 text-sm bg-gray-50 rounded-full hover:bg-gray-200 cursor-pointer">
              {category}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsandFeatured;
