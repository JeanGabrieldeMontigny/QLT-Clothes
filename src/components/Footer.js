import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
          <Nav.Link href="#" className="nav-link text-muted">Home</Nav.Link>
          <Nav.Link href="#" className="nav-link text-muted">Men</Nav.Link>
          <Nav.Link href="#" className="nav-link text-muted">Women</Nav.Link>
          <Nav.Link href="#" className="nav-link text-muted">Collections</Nav.Link>
          <Nav.Link href="#" className="nav-link text-muted">Contact Us</Nav.Link>
          <Nav.Link href="#" className="nav-link text-muted">Support</Nav.Link>
          <Nav.Link href="#" className="nav-link text-muted">Cart</Nav.Link>
        </Nav>
      </Container>
    </footer>
  );
};

export default Footer;
