import React from 'react';
import { Form } from 'react-bootstrap';

const Sidebar = ({ priceRangeOptions, selectedPriceRange, setSelectedPriceRange }) => {
  const handlePriceRangeChange = (event) => {
    const selectedValue = event.target.value;
    // Update the selected price range when the user selects a new option
    setSelectedPriceRange(selectedValue);
  };

  return (
    <div className="sidebar">
      <h4>Price Range</h4>
      <Form.Select value={selectedPriceRange} onChange={handlePriceRangeChange}>
        {priceRangeOptions.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
      {/* Add other filter elements */}
    </div>
  );
};

export default Sidebar;
