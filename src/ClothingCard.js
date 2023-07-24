import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./ClothingCard.css"; // Import the CSS file for styling

const ClothingCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]); // Set the default selected size to the first available size

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize, quantity: quantity });
    setQuantity(1); // Reset the quantity after adding to cart
  };

  return (
    <Card style={{ width: "23rem" }}>
      <Card.Img variant="top" src={product.imageSrc} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <p>Price: ${product.price}</p>
        <div className="size-selector">
          <strong>Sizes:</strong>
          {product.sizes.map((size) => (
            <Button
              key={size}
              variant="outline-primary"
              className={`size-btn ${selectedSize === size ? "selected" : ""} ${
                !product.sizes.includes(size) ? "unavailable" : ""
              }`}
              onClick={() => handleSizeSelect(size)}
              disabled={!product.sizes.includes(size)}
            >
              {size}
            </Button>
          ))}
        </div>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ClothingCard;
