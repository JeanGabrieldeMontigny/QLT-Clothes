// PriceFilter.js
import React from "react";

const PriceFilter = ({
  minPrice,
  maxPrice,
  selectedMinPrice,
  selectedMaxPrice,
  onChange,
}) => {
  return (
    <div>
      <h5>Price</h5>
      <label>
        Min: ${" "}
        <input
          type="number"
          value={selectedMinPrice}
          min={minPrice}
          max={maxPrice}
          onChange={(e) => onChange("min", parseInt(e.target.value))}
        />
      </label>
      <label>
        Max: ${" "}
        <input
          type="number"
          value={selectedMaxPrice}
          min={minPrice}
          max={maxPrice}
          onChange={(e) => onChange("max", parseInt(e.target.value))}
        />
      </label>
    </div>
  );
};

export default PriceFilter;
