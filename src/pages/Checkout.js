import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../Checkout.css";

const Checkout = ({ onPurchaseComplete }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    creditCardNumber: "",
    ccv: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform form validation and submit the data to a server for processing.

    // In this example, we'll just simulate a successful submission and show a "Thank You" message.
    setShowThankYou(true);

    // Notify the parent component that the purchase is complete (this would be used to clear the shopping cart, for example)
    onPurchaseComplete();
  };

  return (
    <div>
      {showThankYou ? (
        <Alert
          variant="success"
          onClose={() => setShowThankYou(false)}
          dismissible
        >
          Thank you for your purchase!
        </Alert>
      ) : (
        <>
          <h3>Checkout Form</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="creditCardNumber">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                type="text"
                name="creditCardNumber"
                placeholder="Enter your credit card number"
                value={formData.creditCardNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="ccv">
              <Form.Label>CCV</Form.Label>
              <Form.Control
                type="number"
                name="ccv"
                placeholder="Enter your CCV (3 digits)"
                value={formData.ccv}
                onChange={(e) => {
                  // Restrict input to 3 digits only
                  const ccvValue = e.target.value;
                  if (/^\d{0,3}$/.test(ccvValue)) {
                    setFormData((prevData) => ({
                      ...prevData,
                      ccv: ccvValue,
                    }));
                  }
                }}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Purchase
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default Checkout;
