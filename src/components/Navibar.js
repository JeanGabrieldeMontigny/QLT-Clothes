import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Navibar.css"; // Import the CSS file for additional styling

const Navibar = ({ cartItemsCount, toggleCartVisibility }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <span className="brand-text">QLT Clothes</span>
      </Navbar.Brand>{" "}
      {/* Use Link for Home */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>{" "}
          {/* Use Link for other routes */}
          <Nav.Link as={Link} to="/men">
            Men
          </Nav.Link>
          <Nav.Link as={Link} to="/women">
            Women
          </Nav.Link>
          <Nav.Link as={Link} to="/collections">
            Collections
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
          <Nav.Link as={Link} to="/support">
            Support
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={toggleCartVisibility}>
            Cart <Badge variant="primary">{cartItemsCount}</Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
