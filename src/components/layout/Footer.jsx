import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import Images from "./Images";
import FooterHeading from "./FooterHeading";
import FooterListItem from "./FooterListItem";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className=" xl:justify-normal flex flex-wrap justify-between xl:flex">
          <div className="xl:w-[10%]">
            <FooterHeading title="MENU" />
            <List>
              <FooterListItem itemname="Home" href="#" />
              <FooterListItem itemname="Shop" href="#" />
              <FooterListItem itemname="About" href="#" />
              <FooterListItem itemname="Contact" href="#" />
              <FooterListItem itemname="Journal1" href="#" />
            </List>
          </div>
          <div className="  xl:w-[10%]">
            <FooterHeading title="SHOP" />
            <List>
              <FooterListItem itemname="Category 1" href="#" />
              <FooterListItem itemname="Category 2" href="#" />
              <FooterListItem itemname="Category 3" href="#" />
              <FooterListItem itemname="Category 4" href="#" />
              <FooterListItem itemname="Category 5" href="#" />
            </List>
          </div>
          <div className="  xl:w-[10%]">
            <FooterHeading title="HELP" />
            <List>
              <FooterListItem itemname="Privacy Policy" href="#" />
              <FooterListItem itemname="Terms & Conditions" href="#" />
              <FooterListItem itemname="Special E-shop" href="#" />
              <FooterListItem itemname="Shipping" href="#" />
              <FooterListItem itemname="Secure Payments" href="#" />
            </List>
          </div>
          <div className="mt-14 flex justify-center sm:mt-0  xl:w-[30%]">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold text-[#262626]">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="mt-14 sm:mt-0 xl:ml-28 xl:w-[25%]">
            <Images imgsrc="assets/logo.png" />
          </div>
        </Flex>

        <Flex className="xl:jus mt-16 xl:flex xl:justify-between">
          <Flex className="mb-2 flex gap-x-5 text-[#373737] min-[375px]:max-xl:justify-center">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </Flex>

          <div className="flex text-center font-dm text-sm font-normal text-[#6D6D6D] min-[375px]:max-xl:justify-center">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
