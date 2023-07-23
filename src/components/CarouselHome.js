import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import homeCarousel1 from "../img/homeCarousel1.avif";
import homeCarousel2 from "../img/homeCarousel2.avif";
import homeCarousel3 from "../img/homeCarousel3.avif";

function CarouselHome() {
  return (
    <div style={{ width: "100%", maxHeight: "80vh" }}>
      {/* Adjust the maxHeight value as per your requirement */}
      <Carousel style={{ height: "100%" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeCarousel1}
            alt=""
            style={{ maxHeight: "80vh" }}
          />
          {/* Adjust the maxHeight value to control the image height */}
          <Carousel.Caption>
            <h3>Welcome to QLT Clothes</h3>
            <p>
              Where you can find high quality clothes for an affordable price.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* Step 2: Wrap the image with Link and set the "to" prop to the path for Collection.js */}
          <Link to="/collections">
            <img
              className="d-block w-100"
              src={homeCarousel2}
              alt=""
              style={{ maxHeight: "80vh" }}
            />
          </Link>
          {/* Adjust the maxHeight value to control the image height */}
          <Carousel.Caption>
            <h3>Our T-Shirts Collection</h3>
            <p>Explore our T-Shirts Collection to find the perfect fit.</p>
            <h6>Click the Image to See More</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* Step 2: Wrap the image with Link and set the "to" prop to the path for Collection.js */}
          <Link to="/collections">
            <img
              className="d-block w-100"
              src={homeCarousel3}
              alt=""
              style={{ maxHeight: "80vh" }}
            />
          </Link>
          {/* Adjust the maxHeight value to control the image height */}
          <Carousel.Caption>
            <h3>Dress Shirts Collection.</h3>
            <p>
              Discover our variety of dress shirts for a stylish look in the
              office.
            </p>
            <h6>Click the Image to See More</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
