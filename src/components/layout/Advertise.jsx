import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Images";
import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <div className="mt-5 mb-5 md:mb-0 xl:mt-36">
      <Container>
        <Flex className="flex gap-x-5 md:gap-x-10">
          <div className="max-w-2/4">
            <Link to="#">
              <Image imgsrc="assets/ad-1.png">dfdfd</Image>
            </Link>
          </div>
          <div className="max-w-2/4">
            <Link
              to="#"
              className="mb-2 block sm:mb-4 md:mb-4 lg:mb-6 xl:mb-10"
            >
              <Image imgsrc="assets/ad-2.png">dfdfd</Image>
            </Link>
            <Link to="#">
              <Image imgsrc="assets/ad-2.png">dfdfd</Image>
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;
