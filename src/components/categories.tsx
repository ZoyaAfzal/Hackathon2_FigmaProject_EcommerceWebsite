import React from "react";

function Categories() {
  return (
    <div className="lg:w-[1200px] max-w-[1320px] xs:h-[340px] xxs:h-[360px] md:h-[240px] w-full flex justify-center items-center sm:mt-[60%] md:mt-0 lg:mt-20 xs:mt-8 px-4 xs:mx-8 xxs:ml-6">
      <div className="w-[880px] h-[190px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 lg:mr-32 sm:ml-8">
        {/* Icons Section */}
        <div className="w-full">
          <h3 className="h-6 text-lg font-semibold font-sans">Icons</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm md:text-base font-medium text-[#757575]">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>
        {/* Shoes Section */}
        <div className="w-full">
          <h3 className="h-6 text-lg font-semibold font-sans">Shoes</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm md:text-base font-medium text-[#757575]">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        {/* Clothing Section */}
        <div className="w-full">
          <h3 className="h-6 text-lg font-semibold font-sans">Clothing</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm md:text-base font-medium text-[#757575]">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>
        {/* Kids Section */}
        <div className="w-full">
          <h3 className="h-6 text-lg font-semibold font-sans">Kids&apos;</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm md:text-base font-medium text-[#757575]">
            <li>Infant & Toddler Shoes</li>
            <li>Kids&apos; Shoes</li>
            <li>Kids&apos; Jordan Shoes</li>
            <li>Kids&apos; Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Categories;