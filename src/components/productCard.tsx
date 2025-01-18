import Image from "next/image";
import React from "react";

type Product = {
  _id: string;
  tag: string;
  name: string;
  category: string;
  color: string[];
  price: number;
  imageUrl: string;
  style: string;
  sizes:string[];
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border shadow-sm hover:shadow-lg transition-all ">
      {/* Product Image */}
      <Image
        src={product.imageUrl}
        alt={product.name || "Product"}
        width={348}
        height={348}
        className="w-[348px] h-[348px] object-cover rounded-t-sm hover:border-[1px] hover:border-gray-600"
      />
      {/* Product Details */}
      <div className="p-4">
        <h4 className="text-[#9E3500] font-semibold text-[16px]">{product.tag}</h4>
        <h3 className="text-[16px] font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-sm text-gray-500">{product.color}</p>
        <p className="text-base font-bold mt-2">MRP{" "}: ₹{product.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
