// SizeFilter.js
import React from "react";

const SizeFilter = ({ sizes, selectedSize, onChange }) => {
  return (
    <div>
      <h5>Size</h5>
      <ul>
        {sizes.map((size) => (
          <li key={size}>
            <label>
              <input
                type="checkbox"
                checked={selectedSize === size}
                onChange={() => onChange(size)}
              />
              {size}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeFilter;
