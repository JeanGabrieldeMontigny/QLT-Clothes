import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import newMen from "../img/newMen.jpg";
import newWomen from "../img/newWomen.jpg";
import "../App.css";

const NewArrivalSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "space-between",
        padding: "15px",
        gap: "20%",
      }}
    >
      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={newMen} />
        <Card.Body>
          <Card.Title>For Men</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* Step 2: Wrap the button with Link and set the to prop to the path for men products */}
          <Link to="/men">
            <Button variant="primary" className="red-button">
              See more
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={newWomen} />
        <Card.Body>
          <Card.Title>For Women</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* Step 2: Wrap the button with Link and set the to prop to the path for women products */}
          <Link to="/women">
            <Button variant="primary" className="red-button">
              See more
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewArrivalSection;
