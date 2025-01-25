import React, { useState } from 'react';

interface FilterPanelProps {
  onFilterChange: (filters: {
    priceRange?: [number, number];
    inStockOnly?: boolean;
  }) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [inStockOnly, setInStockOnly] = useState(false);


  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedRange = [...priceRange];
    updatedRange[index] = parseInt(e.target.value, 10);
    setPriceRange(updatedRange as [number, number]);
    onFilterChange({ priceRange: updatedRange as [number, number],  inStockOnly });
  };


  const handleStockToggle = () => {
    const updatedInStockOnly = !inStockOnly;
    setInStockOnly(updatedInStockOnly);
    onFilterChange({ priceRange, inStockOnly: updatedInStockOnly });
  };

  return (
    <div className="space-y-6">
      {/* Price Range Filter */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Price Range</h3>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={priceRange[0]}
            min={0}
            max={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="border border-gray-300 px-2 py-1 w-20 rounded-md"
          />
          <span>-</span>
          <input
            type="number"
            value={priceRange[1]}
            min={priceRange[0]}
            max={10000}
            onChange={(e) => handlePriceChange(e, 1)}
            className="border border-gray-300 px-2 py-1 w-20 rounded-md"
          />
        </div>
      </div>


      {/* Availability Toggle */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Availability</h3>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={handleStockToggle}
            className="w-4 h-4 accent-gray-300"
          />
          In Stock Only
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
