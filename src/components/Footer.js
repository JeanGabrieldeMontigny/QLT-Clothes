import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const links = [
  { label: "Home", path: "/" },
  { label: "Men", path: "/men" },
  { label: "Women", path: "/women" },
  { label: "Collections", path: "/collections" },
  { label: "Contact Us", path: "/contact" },
  { label: "Support", path: "/support" },
  { label: "Cart", path: "/cart" },
];

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <Container className="d-flex justify-content-between align-items-center">
        <p className="mb-0 text-muted">&copy; 2023 Company, Inc</p>

        <Navbar className="mb-0 me-md-auto">
          <Navbar.Brand href="/">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
          </Navbar.Brand>
        </Navbar>

        <Nav className="nav">
          {links.map((link, index) => (
            <Nav.Link
              key={index}
              href={link.path}
              className="nav-link text-muted"
            >
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </footer>
  );
};

export default Footer;
