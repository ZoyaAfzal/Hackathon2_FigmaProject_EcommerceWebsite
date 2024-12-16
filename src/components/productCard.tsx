import React from "react";

type Product = {
  id: number;
  tag: string;
  title: string;
  category: string;
  color: string;
  price: string;
  image: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border shadow-sm hover:shadow-lg transition-all ">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-[348px] h-[348px] object-cover rounded-t-sm hover:border-[1px] hover:border-gray-600"
      />
      {/* Product Details */}
      <div className="p-4">
        <h4 className="text-[#9E3500] font-semibold text-[16px]">{product.tag}</h4>
        <h3 className="text-[16px] font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-sm text-gray-500">{product.color}</p>
        <p className="text-base font-bold mt-2">MRP{" "}: {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
