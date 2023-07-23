import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ClothingCard from "../ClothingCard";

import menTop1 from "../img/menTop1.jpg";
import menTop2 from "../img/menTop2.jpg";
import menTop3 from "../img/menTop3.jpg";
import menBottoms1 from "../img/menBottoms1.jpg";
import menBottoms2 from "../img/menBottoms2.jpg";
import menBottoms3 from "../img/menBottoms3.jpg";
import menJackets1 from "../img/menJackets1.jpg";
import menJackets2 from "../img/menJackets2.jpg";
import menJackets3 from "../img/menJackets3.jpg";

const ProductsMen = ({ addToCart }) => {
  // Your existing product data
  const productsData = [
    {
      category: "Tops",
      products: [
        {
          id: uuidv4(),
          name: "T-Shirt",
          description: "A comfortable and casual t-shirt for everyday wear.",
          imageSrc: menTop1,
          price: 15,
          sizes: ["S", "M", "L"], // Available sizes for Product 1
        },
        // Add more products for Tops category here...
        {
          id: uuidv4(),
          name: "Shirt",
          description: "A stylish shirt for a sophisticated look.",
          imageSrc: menTop2,
          price: 32,
          sizes: ["S", "M", "L"], // Available sizes for Product 1.1
        },
        {
          id: uuidv4(),
          name: "Hoodie",
          description: "A cozy hoodie for colder days.",
          imageSrc: menTop3,
          price: 46,
          sizes: ["S", "M", "L"], // Available sizes for Product 1.2
        },
      ],
    },
    {
      category: "Bottoms",
      products: [
        {
          id: uuidv4(), // Generate unique id for product 2
          name: "Sweatpants",
          description: "Comfortable sweatpants for a relaxed look.",
          imageSrc: menBottoms1,
          price: 25,
          sizes: ["S", "M", "L"], // Available sizes for Product 2
        },
        // Add more products for Bottoms category here...
        {
          id: uuidv4(), // Generate unique id for product 2
          name: "Chino",
          description: "Stylish chino pants for a smart-casual outfit.",
          imageSrc: menBottoms2,
          price: 37,
          sizes: ["S", "M", "L"], // Available sizes for Product 2.1
        },
        {
          id: uuidv4(), // Generate unique id for product 2
          name: "Dress pants",
          description: "Elegant dress pants for formal occasions.",
          imageSrc: menBottoms3,
          price: 53,
          sizes: ["S", "M", "L"], // Available sizes for Product 2.2
        },
      ],
    },
    {
      category: "Jackets & Blazers",
      products: [
        {
          id: uuidv4(), // Generate unique id for product 3
          name: "Bomber Jacket",
          description: "A trendy bomber jacket for a cool and stylish look.",
          imageSrc: menJackets1,
          price: 95,
          sizes: ["S", "M", "L"], // Available sizes for Product 3
        },
        // Add more products for Outerwear category here...
        {
          id: uuidv4(), // Generate unique id for product 3
          name: "Suit Blazer",
          description: "A classic suit blazer for formal events.",
          imageSrc: menJackets2,
          price: 60,
          sizes: ["S", "M", "L"], // Available sizes for Product 3.1
        },
        {
          id: uuidv4(), // Generate unique id for product 3
          name: "Casual Blazer",
          description: "A versatile casual blazer for various occasions.",
          imageSrc: menJackets3,
          price: 120,
          sizes: ["S", "M", "L"], // Available sizes for Product 3.2
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
          (selectedPriceRange === "Under $30" && product.price < 30) ||
          (selectedPriceRange === "$30 - $50" &&
            product.price >= 30 &&
            product.price <= 50) ||
          (selectedPriceRange === "Over $50" && product.price > 50))
    )
  );

  return (
    <div style={{ padding: "1% 5%" }}>
      <Row>
        <Col
          md={3}
          style={{ width: "10%", backgroundColor: "var(--secondary-color)" }}
        >
          {/* Filter options */}
          <Form>
            <Form.Group>
              <Form.Label>
                {" "}
                <h5>Category:</h5>
              </Form.Label>
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
              <Form.Label>
                {" "}
                <h5>Size:</h5>
              </Form.Label>
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
              <Form.Label>
                {" "}
                <h5>Price Range:</h5>{" "}
              </Form.Label>
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
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, productIndex) => (
                <Col key={productIndex} md={4}>
                  {/* Use the modified ClothingCard component here */}
                  <Card style={{ backgroundColor: "var(--primary-color)" }}>
                    <Card.Img variant="top" src={product.imageSrc} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text>Price: ${product.price}</Card.Text>
                      <Button
                        style={{
                          backgroundColor: "var(--action-color)",
                          color: "var(--primary-color)",
                          borderColor: "var(--action-color)",
                        }}
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p style={{ color: "var(--primary-color)" }}>
                No products match the selected filters.
              </p>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsMen;
