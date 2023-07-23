import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import contact1 from "../img/contact1.avif";
import contact2 from "../img/contact2.avif";
import contact3 from "../img/contact3.avif";

const Contact = () => {
  return (
    <>
      {/* Store locations */}
      <Container className="text-center" style={{ padding: "15px" }}>
        <Row>
          <Col>
            <div>
              {/* Picture for Ottawa */}
              <img
                src={contact1}
                alt="Picture of Ottawa"
                style={{ width: "100%", marginBottom: "10px" }}
              />
            </div>
            <h3>Our Ottawa Store Location</h3>
            <p>1234 Rideau Street, Ottawa, ON, Canada</p>
            <p>Postal Code: K1N 1K1</p>
            <h5>
              Operating Hours: <br /> Mon-Fri: 9:00 AM - 6:00 PM <br /> Sat-Sun:
              10:00 AM - 4:00 PM
            </h5>
          </Col>
          <Col>
            <div>
              {/* Picture for Toronto */}
              <img
                src={contact2}
                alt="Picture of Toronto"
                style={{ width: "100%", marginBottom: "10px" }}
              />
            </div>
            <h3>Our Toronto Store Location</h3>
            <p>5678 Yonge Street, Toronto, ON, Canada</p>
            <p>Postal Code: M2M 4G4</p>
            <h5>
              Operating Hours: <br /> Mon-Fri: 8:30 AM - 7:00 PM <br /> Sat-Sun:
              9:00 AM - 5:00 PM
            </h5>
          </Col>
          <Col>
            <div>
              {/* Picture for Montréal */}
              <img
                src={contact3}
                alt="Picture of Montréal"
                style={{ width: "100%", marginBottom: "10px" }}
              />
            </div>
            <h3>Our Montréal Store Location</h3>
            <p>9876 Saint Catherine Street, Montréal, QC, Canada</p>
            <p>Postal Code: H3B 4L6</p>
            <h5>
              Operating Hours: <br /> Mon-Fri: 9:30 AM - 5:30 PM <br /> Sat-Sun:
              Closed
            </h5>
          </Col>
        </Row>
      </Container>

      {/* Contact info */}
      <ListGroup>
        <ListGroup.Item>email: qltclothes@email.com</ListGroup.Item>
        <ListGroup.Item>phone number: 613-455-6788</ListGroup.Item>
        <ListGroup.Item>twitter: @qltclothes</ListGroup.Item>
        <ListGroup.Item>instagram: @qltclothes</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Contact;
