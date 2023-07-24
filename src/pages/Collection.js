import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ClothingCard from "../ClothingCard";

import cShirt1 from "../img/cShirt1.avif";
import cShirt2 from "../img/cShirt2.avif";
import cShirt3 from "../img/cShirt3.avif";
import cShirt4 from "../img/cShirt4.avif";
import cShirt5 from "../img/cShirt5.avif";
import cT1 from "../img/cT1.jpg";
import cT2 from "../img/cT2.jpg";
import cT3 from "../img/cT3.jpg";
import cT4 from "../img/cT4.jpg";
import cT5 from "../img/cT5.jpg";

import "../Products.css";

const Collections = ({ addToCart }) => {
  const productsData = [
    {
      category: "T-Shirts",
      products: [
        {
          id: uuidv4(),
          name: "T-Shirt 1",
          description: "A comfortable and casual T-shirt for everyday wear.",
          imageSrc: cT1,
          price: 25,
          sizes: ["S", "M", "L"],
        },
        {
          id: uuidv4(),
          name: "T-Shirt 2",
          description: "A stylish T-shirt for a chic look.",
          imageSrc: cT2,
          price: 30,
          sizes: ["S", "M", "L"],
        },
        {
          id: uuidv4(),
          name: "T-Shirt 3",
          description: "A versatile T-shirt that goes well with any outfit.",
          imageSrc: cT3,
          price: 28,
          sizes: ["S", "M", "L"],
        },
        {
          id: uuidv4(),
          name: "T-Shirt 4",
          description: "A comfortable and casual T-shirt for everyday wear.",
          imageSrc: cT4,
          price: 25,
          sizes: ["S", "M", "L"],
        },
        {
          id: uuidv4(),
          name: "T-Shirt 5",
          description: "A comfortable and casual T-shirt for everyday wear.",
          imageSrc: cT5,
          price: 25,
          sizes: ["S", "M", "L"],
        },
      ],
    },
    {
      category: "Dress Shirts",
      products: [
        {
          id: uuidv4(),
          name: "Dress Shirt 1",
          description: "Stylish dress shirt for a polished look.",
          imageSrc: cShirt1,
          price: 35,
          sizes: ["S", "M", "L"],
        },
        {
          id: uuidv4(),
          name: "Dress Shirt 2",
          description: "Trendy dress shirt for a professional style.",
          imageSrc: cShirt2,
          price: 40,
          sizes: ["S", "M", "L"],
        },
        {
          id: uuidv4(),
          name: "Dress Shirt 3",
          description: "Elegant dress shirt for a sophisticated style.",
          imageSrc: cShirt3,
          price: 38,
          sizes: ["S", "M", "L"],
        },
        {
          id: uuidv4(),
          name: "Dress Shirt 4",
          description: "Stylish dress shirt for a polished look.",
          imageSrc: cShirt4,
          price: 35,
          sizes: ["S", "M", "L"],
        },
        {
          id: uuidv4(),
          name: "Dress Shirt 5",
          description: "Stylish dress shirt for a polished look.",
          imageSrc: cShirt5,
          price: 35,
          sizes: ["S", "M", "L"],
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
  const filteredProducts = productsData.flatMap((categoryData) => {
    const productsInCategory = categoryData.products.filter(
      (product) =>
        (selectedSize === "All" || product.sizes.includes(selectedSize)) &&
        (selectedPriceRange === "All" ||
          (selectedPriceRange === "Under $30" && product.price < 30) ||
          (selectedPriceRange === "$30 - $50" &&
            product.price >= 30 &&
            product.price <= 50) ||
          (selectedPriceRange === "Over $50" && product.price > 50))
    );

    if (selectedCategory === "All") {
      return productsInCategory;
    } else {
      return productsInCategory.filter(
        (product) => product.category === selectedCategory
      );
    }
  });

  return (
    <div>
      <Row>
        <Col md={3}>
          {/* Filter options */}
          <Form>
            <Form.Group></Form.Group>
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
          {productsData.map((categoryData) => (
            <div key={categoryData.category}>
              <div className="d-flex justify-content-center">
                <h2>{categoryData.category}</h2>
              </div>
              <Row>
                {categoryData.products
                  .filter((product) =>
                    selectedCategory === "All"
                      ? true
                      : product.category === selectedCategory
                  )
                  .filter((product) =>
                    selectedSize === "All"
                      ? true
                      : product.sizes.includes(selectedSize)
                  )
                  .filter((product) => {
                    switch (selectedPriceRange) {
                      case "All":
                        return true;
                      case "Under $30":
                        return product.price < 30;
                      case "$30 - $50":
                        return product.price >= 30 && product.price <= 50;
                      case "Over $50":
                        return product.price > 50;
                      default:
                        return false;
                    }
                  })
                  .map((product, productIndex) => (
                    <Col key={productIndex} md={4}>
                      {/* Use the modified ClothingCard component here */}
                      <ClothingCard
                        product={product}
                        addToCart={addToCart}
                        quantity={productQuantities[product.id] || 1}
                        handleQuantityChange={handleQuantityChange}
                      />
                    </Col>
                  ))}
              </Row>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Collections;
