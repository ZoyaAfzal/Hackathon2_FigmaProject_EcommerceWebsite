'use client'
import React, { useState, useEffect } from 'react';
import CustomNavbar from '@/components/customNavbar';
import CustomTopNavbar from '@/components/customTopNavbar';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';

interface Snrk {
  _id: string;
  name: string;
  image: string;
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
}

const SNRKSsection = () => {
  const [snrks, setSnrks] = useState<Snrk[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "snrks"]{
        _id,
        name,
        "image": image.asset->url,
        description,
        price,
        sizes,
        rating,
        stock,
        discount,
        category,
        color,
        details,
        style,
        tag
      }`;

      try {
        const data = await client.fetch(query);
        console.log("Fetched Snrks:", data); // ✅ Log the response
        setSnrks(data);
      } catch (error) {
        console.error("Error fetching Snrks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-[1344px] lg:w-[1262px] w-full h-auto">
      <div className="hidden xs:block">
        <CustomTopNavbar />
      </div>
      <CustomNavbar />

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-lg font-semibold mt-6">Loading Snrks...</p>
      ) : snrks.length === 0 ? (
        <p className="text-center text-lg font-semibold mt-6">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1320px] lg:w-[1200px] h-auto md:w-[740px] sm:w-[580px] xs:w-[420px] w-full mt-6 md:gap-y-6 mx-8">
          {snrks.map((snrk) => (
            <Link key={snrk._id} href={`/snrks/${snrk._id}`}>
              <div className="border border-gray-200 hover:shadow-lg transition p-4 cursor-pointer">
                <div className="lg:w-[360px] h-[420px] relative">
                  <Image src={snrk.image} alt={snrk.name} width={360} height={420} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-lg font-medium text-center mt-2">{snrk.name}</h2>
                <h3 className="text-lg font-bold text-center text-gray-700">{snrk.tag}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SNRKSsection;

