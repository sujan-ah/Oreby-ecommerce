import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Container from "./Container";
import Flex from "./Flex";
import Product from "./Product";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NewArrivals = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrowLeft: true,
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
            <div className=" sm:max-w-[295px] lg:max-w-[370px]">
              <Product src="assets/product1.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[370px]">
              <Product src="assets/product2.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[370px]">
              <Product src="assets/product3.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[370px]">
              <Product src="assets/product4.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[370px]">
              <Product src="assets/product3.png" badge={false} />
            </div>
            <div className="sm:max-w-[295px] lg:max-w-[370px]">
              <Product src="assets/product3.png" badge={false} />
            </div>
          </Slider>

          <HiOutlineArrowLongLeft className="absolute top-44 left-0 h-10 w-10 rounded-full bg-[#979797] p-3 text-white" />
          <HiOutlineArrowLongRight className="absolute top-44 right-0 h-10 w-10  rounded-full bg-[#979797] p-3 text-white" />
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
