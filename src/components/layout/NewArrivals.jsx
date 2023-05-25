import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import Flex from "./Flex";
import Product from "./Product";

const NewArrivals = () => {
  return (
    <div className="mt-32">
      <Container>
        <Heading title="New Arrivals" />
        <Flex className="mt-12 flex gap-x-10">
          <div className="max-w-[370px]">
            <Product src="assets/product1.png" badge={false} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assets/product2.png" badge={true} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assets/product3.png" badge={false} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assets/product4.png" badge={true} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default NewArrivals;
