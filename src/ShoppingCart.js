import React, { useState } from "react";
import { Modal, Button, ListGroup, Form, Alert } from "react-bootstrap";
import Checkout from "./pages/Checkout"; // Import the Checkout component

const ShoppingCart = ({
  cartItems,
  showCart,
  toggleCartVisibility,
  updateCartItemQuantity,
  removeCartItem,
}) => {
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleQuantityChange = (itemId, newQuantity) => {
    // Ensure that the quantity is greater than 0 before updating the cart item
    if (newQuantity > 0) {
      updateCartItemQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeCartItem(itemId);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  const handleProceedToCheckout = () => {
    setCheckoutMode(true);
  };

  const handlePurchaseComplete = () => {
    // Perform any necessary actions after the purchase is complete (e.g., clearing the cart)
    // In this example, we'll just close the checkout mode and show the alert.
    setCheckoutMode(false);
    setShowAlert(true);
  };

  return (
    <Modal show={showCart} onHide={toggleCartVisibility}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <strong>{item.name}</strong> - {item.description}
              <div>Price: ${item.price}</div>
              <div>Size: {item.size}</div> {/* Display selected size */}
              <Form.Control
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
              />
              <Button
                variant="danger"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="mt-3">
          <strong>Total Price: ${totalPrice}</strong>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {checkoutMode ? (
          <>
            {/* Render the Checkout component when in checkout mode */}
            <Checkout onPurchaseComplete={handlePurchaseComplete} />
          </>
        ) : (
          <>
            {/* Proceed to Checkout Button */}
            <Button variant="primary" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </Button>
            {/* Close Button */}
            <Button variant="secondary" onClick={toggleCartVisibility}>
              Close
            </Button>
          </>
        )}
      </Modal.Footer>
      {/* Alert for Purchase */}
      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        {`Thank you for your order! The total is $${totalPrice}`}
      </Alert>
    </Modal>
  );
};

export default ShoppingCart;
