import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Navibar from "./components/Navibar";
import ClothingCard from "./ClothingCard";
import ShoppingCart from "./ShoppingCart";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import ProductsMen from "./pages/ProductsMen";
import ProductsWomen from "./pages/ProductsWomen";
import CarouselHome from "./components/CarouselHome";
import NewArrivalSection from "./components/NewArrivalHome";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Collections from "./pages/Collection";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");

  const addToCart = (product) => {
    // Check if the product with the same id and size already exists in the cart
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === product.size
    );

    if (existingItem) {
      // If the item already exists, update its quantity and total price
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === existingItem.id && item.size === existingItem.size
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
                totalPrice: (item.quantity + product.quantity) * item.price,
              }
            : item
        )
      );
    } else {
      // If the item doesn't exist in the cart, add it as a new item with total price
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, totalPrice: product.quantity * product.price },
      ]);
    }

    toggleCartVisibility();
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: newQuantity,
            totalPrice: item.price * newQuantity,
          }
        : item
    );
    setCartItems(updatedItems);
  };

  const removeCartItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const toggleCartVisibility = () => {
    setShowCart((prevValue) => !prevValue);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <Router>
      <div>
        <div className="App">
          <Navibar
            cartItemsCount={cartItems.reduce(
              (total, item) => total + item.quantity,
              0
            )}
            toggleCartVisibility={toggleCartVisibility}
          />

          <Routes>
            {/* Default route to Home.js */}
            <Route path="/" element={<Home />} />

            {/* Add the rest of your routes here */}
            <Route
              path="/men"
              element={<ProductsMen addToCart={addToCart} />}
            />
            <Route
              path="/women"
              element={<ProductsWomen addToCart={addToCart} />}
            />
            <Route
              path="/collections"
              element={<Collections addToCart={addToCart} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />

            {/* Add other routes as needed */}
          </Routes>

          <ShoppingCart
            cartItems={cartItems}
            showCart={showCart}
            toggleCartVisibility={toggleCartVisibility}
            updateCartItemQuantity={updateCartItemQuantity}
            removeCartItem={removeCartItem}
          />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
