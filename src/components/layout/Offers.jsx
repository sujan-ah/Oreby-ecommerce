import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import Flex from "./Flex";
import Product from "./Product";

const Offers = () => {
  return (
    <div className="md:mt-32">
      <Container>
        <Heading title="Special Offers" />
        <Flex className="mt-3 gap-x-10 sm:flex sm:flex-wrap sm:justify-between md:mt-12	 md:flex lg:flex-nowrap ">
          <div className="sm:max-w-[295px] lg:max-w-[370px]">
            <Product src="assets/specialPic1.png" badge={false} />
          </div>
          <div className="sm:max-w-[295px] lg:max-w-[370px]">
            <Product src="assets/specialPic2.png" badge={true} />
          </div>
          <div className="sm:max-w-[295px] lg:max-w-[370px]">
            <Product src="assets/specialPic3.png" badge={false} />
          </div>
          <div className="sm:max-w-[295px] lg:max-w-[370px]">
            <Product src="assets/specialPic4.png" badge={true} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Offers;
