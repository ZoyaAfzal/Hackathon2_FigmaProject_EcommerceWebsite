'use client';
import { IoMdSwitch } from 'react-icons/io';
import { RiArrowDropUpLine } from 'react-icons/ri';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ProductCard from '@/components/productCard';
import MobileNavbar from '@/components/mobileNavbar';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';


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


const FeaturedProducts = () => {
  const [filters] = useState({
    priceRange: [0, 10000] as [number, number],
    inStockOnly: false,
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedKids, setSelectedKids] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>('');
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const productsPerPage = 10;

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const { value, checked } = e.target;
    setState((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const fetchProducts = async () => {
    setLoading(true);
    const query = `*[_type == "products"]{
      _id, name, "imageUrl": image.asset->url, description, price, sizes, rating,
      stock, discount, category, color, details, style, tag
    }`;
    try {
      const productsData: Product[] = await client.fetch(query);
      setProducts(
        productsData.map((product) => ({
          ...product,
          imageUrl: urlFor(product.imageUrl).url(),
        }))
      );
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        // Handle generic errors
        setError('Failed to fetch products. Please check your network connection.');
      } else if (typeof error === 'object' && error !== null && 'status' in error) {
        // Handle errors with a status property
        const statusError = error as { status: number };
        if (statusError.status === 500) {
          setError('Internal Server Error (500). Please try again later.');
        } else if (statusError.status === 404) {
          setError('Products not found (404).');
        } else {
          setError('Failed to fetch products. Please check your network connection.');
        }
      } else {
        setError('Failed to fetch products. Please check your network connection.');
      }
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        [product.name, product.tag, product.category]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .filter((product) => {
        const withinPriceRange =
          product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
        const stockMatch = !filters.inStockOnly || product.stock > 0;
        return withinPriceRange && stockMatch;
      });
  }, [products, searchQuery, filters]);

  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case 'priceLowHigh':
          return a.price - b.price;
        case 'priceHighLow':
          return b.price - a.price;
        case 'nameAZ':
          return a.name.localeCompare(b.name);
        case 'nameZA':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
    setSortedProducts(sorted);
  }, [sortOption, filteredProducts]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  return (
    <div className="lg:w-[1266px] max-w-[1320px] md:w-[940px] h-auto xs:h-[900px] sm:h-auto w-full">
      <div className="md:hidden">
        <MobileNavbar />
      </div>

    
      <div className="w-full lg:w-[1200px] max-w-[1320px] flex flex-col lg:flex-row justify-between items-center px-6 lg:pr-12 mt-16 lg:mt-8">
        <h1 className="text-2xl font-bold">New (500)</h1>
        <ul className="flex gap-6 mt-4 lg:mt-0 text-[16px] font-medium ml-40 xs:ml-0 lg:ml-20">
          <li>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="border border-gray-300 px-4 py-2 focus:outline-none focus:bg-gray-50 bg-[#f8f7f7] lg:ml-44 xs:ml-0"
            />
          </li>
        </ul>
        <ul className="flex gap-6 mt-4 lg:mt-0 text-[16px] font-medium ml-20">
          <li className="flex items-center ">
            Hide Filters <IoMdSwitch className="text-center" />
          </li>
          <li className="flex items-center">
            <label htmlFor="sort"></label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="border border-gray-300 px-4 py-2 focus:outline-none bg-[#f8f7f7] h-10"
            >
              <option value="" disabled className="text-gray-300">
                Sort By:
              </option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="nameAZ">Name: A to Z</option>
              <option value="nameZA">Name: Z to A</option>
            </select>
          </li>
        </ul>
      </div>

    
      <div className="flex flex-col lg:flex-row mt-8">
  
        <div className="w-full lg:w-[20%] px-6 space-y-6">
          <div className="hidden lg:block border-r-[8px] h-[390px] pr-6 border-gray-500">
            <div className="flex flex-col gap-4 font-semibold">
              {sidebarList.map((item, index) => (
                <Link key={index} href="#" className="hover:text-gray-500">
                  {item}
                </Link>
              ))}
            </div>
          </div>

       
          {[
            { label: 'Gender', options: ['Men', 'Women', 'Unisex'], state: selectedGender, setState: setSelectedGender },
            { label: 'Kids', options: ['Boys', 'Girls'], state: selectedKids, setState: setSelectedKids },
            { label: 'Shop by Price', options: ['Under ₹ 2,500.00', '₹ 2,501.00 - ₹'], state: selectedPrice, setState: setSelectedPrice },
          ].map(({ label, options, state, setState }, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mt-44 xs:mt-8 border-t md:mx-10 lg:mt-44 lg:w-52 lg:mx-4">
                <h3 className="font-semibold text-lg mb-2 pt-6">{label}</h3>
                <RiArrowDropUpLine className="text-3xl pt-2" />
              </div>
              <div className="flex flex-col gap-2 lg:mt-6 xs:mt-0 md:mx-10">
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

       
        {loading ? (
          <div className="text-center text-gray-500 my-4">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 font-bold my-4">{error}</div>
        ) : (
          <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-6 md:mt-12 mt-8 lg:mt-0">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <Link key={product._id} href={`/featuredProducts/${product._id}`}>
                  <ProductCard product={product} />
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No products available. Please try again later.
              </div>
            )}
          </div>
        )}
      </div>

 
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 ${
                currentPage === index + 1 ? 'bg-[#118693] text-white' : 'bg-gray-200'
              } rounded`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

     
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
            <span
              key={category}
              className="inline-block px-3 py-2 text-sm bg-gray-50 rounded-full hover:bg-gray-200 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts; 

