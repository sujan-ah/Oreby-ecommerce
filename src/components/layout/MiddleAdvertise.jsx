import React from "react";
import Images from "./Images";
import Container from "./Container";
import { Link } from "react-router-dom";

const MiddleAdvertise = () => {
  return (
    <div className="mb-6 lg:mb-0 lg:mt-32">
      <Container>
        <Link to="#">
          <Images imgsrc="assets/MIddleAdvertise.png" />
        </Link>
      </Container>
    </div>
  );
};

export default MiddleAdvertise;
