import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Container from "./Container";
import Flex from "./Flex";
import Product from "./Product";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NewArrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <CgArrowLongLeft />,
    nextArrow: <CgArrowLongRight />,
  };

  return (
    <div className="md:mt-32">
      <Container>
        <Heading title="New Arrivals" />

        <Flex className="mt-3 gap-x-10 sm:flex sm:flex-wrap sm:justify-between	 md:mt-12 md:flex lg:flex-nowrap">
          <div className="sm:max-w-[295px] lg:hidden  lg:max-w-[370px]">
            <Product src="assets/product1.png" badge={false} />
          </div>
          <div className="sm:max-w-[295px] lg:hidden  lg:max-w-[370px]">
            <Product src="assets/product2.png" badge={false} />
          </div>
          <div className="sm:max-w-[295px] lg:hidden  lg:max-w-[370px]">
            <Product src="assets/product3.png" badge={false} />
          </div>
          <div className="sm:max-w-[295px] lg:hidden  lg:max-w-[370px]">
            <Product src="assets/product4.png" badge={false} />
          </div>
          <div className="sm:max-w-[295px] lg:hidden  lg:max-w-[370px]">
            <Product src="assets/product4.png" badge={false} />
          </div>
          <div className="sm:max-w-[295px] lg:hidden  lg:max-w-[370px]">
            <Product src="assets/product4.png" badge={false} />
          </div>
        </Flex>

        <div className="relative hidden  lg:block">
          <Slider {...settings} className="mt-12 ">
            <div className=" sm:max-w-[295px] lg:max-w-[90%] xl:max-w-[95%]">
              <Product src="assets/product1.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[90%] xl:max-w-[95%]">
              <Product src="assets/product2.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[90%] xl:max-w-[95%]">
              <Product src="assets/product3.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[90%] xl:max-w-[95%]">
              <Product src="assets/product4.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[90%] xl:max-w-[95%]">
              <Product src="assets/product3.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[90%] xl:max-w-[95%]">
              <Product src="assets/product3.png" badge={false} />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
