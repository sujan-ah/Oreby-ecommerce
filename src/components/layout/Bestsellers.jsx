import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import Flex from "./Flex";
import Product from "./Product";

const Bestsellers = () => {
  return (
    <div className="md:mt-32">
      <Container>
        <Heading title="Our Bestsellers" />
        <Flex className="mt-3 gap-x-10 sm:flex sm:flex-wrap sm:justify-between md:mt-12	 md:flex lg:flex-nowrap ">
          <div className="sm:max-w-[295px] lg:max-w-[370px]">
            <Product src="assets/bestsellerPic1.png" badge={false} />
          </div>
          <div className="sm:max-w-[295px] lg:max-w-[370px]">
            <Product src="assets/bestsellerPic2.png" badge={true} />
          </div>
          <div className="sm:max-w-[295px] lg:max-w-[370px]">
            <Product src="assets/bestsellerPic3.png" badge={false} />
          </div>
          <div className="sm:max-w-[295px] lg:max-w-[370px]">
            <Product src="assets/bestsellerPic4.png" badge={true} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Bestsellers;
