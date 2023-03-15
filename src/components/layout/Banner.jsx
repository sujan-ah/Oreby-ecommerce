import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./Images";
import { Link } from "react-router-dom";

const Banner = () => {
  let [slickDotActive, setSlickDotActive] = useState("");

  var settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setSlickDotActive(next);
    },
    Infinity: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          display: "inline-block",
          position: "absolute",
          top: "58%",
          left: "8%",
          transform: "translateY(-50%)",
          width: "3%",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === slickDotActive
            ? {
                fontSize: "10px",
                fontWeight: 400,
                width: "30px",
                color: "#000",
                borderRight: "3px #262626 solid",
              }
            : {
                width: "30px",
                color: "#000",
                borderRight: "3px white solid",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <Link to="#">
        <div>
          <Images imgsrc="assets/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Images imgsrc="assets/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Images imgsrc="assets/banner.png" />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
