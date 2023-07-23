// CategoryFilter.js
import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onChange }) => {
  return (
    <div>
      <h5>Category</h5>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => onChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
