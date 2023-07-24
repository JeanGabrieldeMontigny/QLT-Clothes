import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import contact1 from "../img/contact1.avif";
import contact2 from "../img/contact2.avif";
import contact3 from "../img/contact3.avif";
import "../FAQ.css";

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
            <address>
              <p>1234 Rideau Street, Ottawa, ON, Canada</p>
              <p>Postal Code: K1N 1K1</p>
              <p>
                Operating Hours: <br /> Mon-Fri: 9:00 AM - 6:00 PM <br />{" "}
                Sat-Sun: 10:00 AM - 4:00 PM
              </p>
            </address>
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
            <address>
              <p>5678 Yonge Street, Toronto, ON, Canada</p>
              <p>Postal Code: M2M 4G4</p>
              <p>
                Operating Hours: <br /> Mon-Fri: 8:30 AM - 7:00 PM <br />{" "}
                Sat-Sun: 9:00 AM - 5:00 PM
              </p>
            </address>
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
            <address>
              <p>9876 Saint Catherine Street, Montréal, QC, Canada</p>
              <p>Postal Code: H3B 4L6</p>
              <p>
                Operating Hours: <br /> Mon-Fri: 9:30 AM - 5:30 PM <br />{" "}
                Sat-Sun: Closed
              </p>
            </address>
          </Col>
        </Row>
      </Container>

      {/* Contact info */}
      <ListGroup>
        <ListGroup.Item>
          <strong>Email:</strong>{" "}
          <a href="mailto:qltclothes@email.com">qltclothes@email.com</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Phone number:</strong>{" "}
          <a href="tel:+16134556788">613-455-6788</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Twitter:</strong>{" "}
          <a href="https://twitter.com/qltclothes">@qltclothes</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Instagram:</strong>{" "}
          <a href="https://www.instagram.com/qltclothes">@qltclothes</a>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Contact;
