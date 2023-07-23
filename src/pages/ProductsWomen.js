import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ClothingCard from "../ClothingCard";

import wTop1 from "../img/wTop1.avif";
import wTop2 from "../img/wTop2.avif";
import wTop3 from "../img/wTop3.avif";
import wBottoms1 from "../img/wBottoms1.avif";
import wBottoms2 from "../img/wBottoms2.avif";
import wBottoms3 from "../img/wBottoms3.avif";
import wJackets1 from "../img/wJackets1.avif";
import wJackets2 from "../img/wJackets2.avif";
import wJackets3 from "../img/wJackets3.avif";

const ProductsWomen = ({ addToCart }) => {
  // Your existing product data for women
  const productsData = [
    {
      category: "Tops",
      products: [
        {
          id: uuidv4(),
          name: "T-Shirt",
          description: "A comfortable and casual t-shirt for everyday wear.",
          imageSrc: wTop1,
          price: 25,
          sizes: ["S", "M", "L"], // Available sizes for Women's Top 1
        },
        // Add more products for Tops category here...
        {
          id: uuidv4(),
          name: "Long Sleeves Shirt",
          description: "A stylish long sleeves shirt for a chic look.",
          imageSrc: wTop2,
          price: 30,
          sizes: ["S", "M", "L"], // Available sizes for Women's Top 2
        },
        {
          id: uuidv4(),
          name: "Shirt",
          description: "A versatile shirt that goes well with any outfit.",
          imageSrc: wTop3,
          price: 28,
          sizes: ["S", "M", "L"], // Available sizes for Women's Top 3
        },
      ],
    },
    {
      category: "Bottoms",
      products: [
        {
          id: uuidv4(), // Generate unique id for product 2
          name: "Cargo Pants",
          description: "Stylish cargo pants with multiple pockets.",
          imageSrc: wBottoms1,
          price: 35,
          sizes: ["S", "M", "L"], // Available sizes for Women's Bottom 1
        },
        // Add more products for Bottoms category here...
        {
          id: uuidv4(), // Generate unique id for product 2
          name: "Ankle Pants",
          description: "Trendy ankle pants for a polished look.",
          imageSrc: wBottoms2,
          price: 40,
          sizes: ["S", "M", "L"], // Available sizes for Women's Bottom 2
        },
        {
          id: uuidv4(), // Generate unique id for product 2
          name: "Pleated Wide Pants",
          description: "Elegant pleated wide pants for a sophisticated style.",
          imageSrc: wBottoms3,
          price: 38,
          sizes: ["S", "M", "L"], // Available sizes for Women's Bottom 3
        },
      ],
    },
    {
      category: "Jackets & Blazers",
      products: [
        {
          id: uuidv4(), // Generate unique id for product 3
          name: "Light Jacket",
          description: "A lightweight jacket for a comfortable outer layer.",
          imageSrc: wJackets1,
          price: 50,
          sizes: ["S", "M", "L"], // Available sizes for Women's Jacket 1
        },
        // Add more products for Outerwear category here...
        {
          id: uuidv4(), // Generate unique id for product 3
          name: "Fluffy Yarn Fleece Jacket",
          description: "Cozy and fluffy yarn fleece jacket for colder days.",
          imageSrc: wJackets2,
          price: 55,
          sizes: ["S", "M", "L"], // Available sizes for Women's Jacket 2
        },
        {
          id: uuidv4(), // Generate unique id for product 3
          name: "Tailored Jacket",
          description: "A tailored jacket for a professional and stylish look.",
          imageSrc: wJackets3,
          price: 60,
          sizes: ["S", "M", "L"], // Available sizes for Women's Jacket 3
        },
      ],
    },
  ];

  const [productQuantities, setProductQuantities] = useState({});

  // State to handle selected filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  // Function to update quantity for a product
  const handleQuantityChange = (productId, quantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  // Function to handle radio button changes for filters
  const handleRadioChange = (event, filterType) => {
    const filterValue = event.target.value;
    switch (filterType) {
      case "category":
        setSelectedCategory(filterValue);
        break;
      case "size":
        setSelectedSize(filterValue);
        break;
      case "price":
        setSelectedPriceRange(filterValue);
        break;
      default:
        break;
    }
  };

  // Function to filter products based on selected filters
  const filteredProducts = productsData.flatMap((categoryData) =>
    categoryData.products.filter(
      (product) =>
        (selectedCategory === "All" ||
          categoryData.category === selectedCategory) &&
        (selectedSize === "All" || product.sizes.includes(selectedSize)) &&
        (selectedPriceRange === "All" ||
          (selectedPriceRange === "Under $40" && product.price < 40) ||
          (selectedPriceRange === "$40 - $60" &&
            product.price >= 40 &&
            product.price <= 60) ||
          (selectedPriceRange === "Over $60" && product.price > 60))
    )
  );

  return (
    <div>
      <Row>
        <Col md={3}>
          {/* Filter options */}
          <Form>
            <Form.Group>
              <Form.Label>Category:</Form.Label>
              <Form.Check
                type="radio"
                label="All"
                name="category"
                value="All"
                checked={selectedCategory === "All"}
                onChange={(e) => handleRadioChange(e, "category")}
              />
              {productsData.map((categoryData) => (
                <Form.Check
                  key={categoryData.category}
                  type="radio"
                  label={categoryData.category}
                  name="category"
                  value={categoryData.category}
                  checked={selectedCategory === categoryData.category}
                  onChange={(e) => handleRadioChange(e, "category")}
                />
              ))}
            </Form.Group>
            <Form.Group>
              <Form.Label>Size:</Form.Label>
              <Form.Check
                type="radio"
                label="All"
                name="size"
                value="All"
                checked={selectedSize === "All"}
                onChange={(e) => handleRadioChange(e, "size")}
              />
              {["S", "M", "L"].map((size) => (
                <Form.Check
                  key={size}
                  type="radio"
                  label={size}
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={(e) => handleRadioChange(e, "size")}
                />
              ))}
            </Form.Group>
            <Form.Group>
              <Form.Label>Price Range:</Form.Label>
              <Form.Check
                type="radio"
                label="All"
                name="price"
                value="All"
                checked={selectedPriceRange === "All"}
                onChange={(e) => handleRadioChange(e, "price")}
              />
              <Form.Check
                type="radio"
                label="Under $30"
                name="price"
                value="Under $30"
                checked={selectedPriceRange === "Under $30"}
                onChange={(e) => handleRadioChange(e, "price")}
              />
              <Form.Check
                type="radio"
                label="$30 - $50"
                name="price"
                value="$30 - $50"
                checked={selectedPriceRange === "$30 - $50"}
                onChange={(e) => handleRadioChange(e, "price")}
              />
              <Form.Check
                type="radio"
                label="Over $50"
                name="price"
                value="Over $50"
                checked={selectedPriceRange === "Over $50"}
                onChange={(e) => handleRadioChange(e, "price")}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={9}>
          {/* Your filtered product rendering */}
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, productIndex) => (
                <Col key={productIndex} md={4}>
                  {/* Use the modified ClothingCard component here */}
                  <ClothingCard
                    product={product}
                    addToCart={addToCart}
                    quantity={productQuantities[product.id] || 1}
                    handleQuantityChange={handleQuantityChange}
                  />
                </Col>
              ))
            ) : (
              <p>No products match the selected filters.</p>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsWomen;
