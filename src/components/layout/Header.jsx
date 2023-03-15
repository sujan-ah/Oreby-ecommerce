import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { FaBars, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCartFill } from "react-icons/bs";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import Images from "./Images";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  let [userDropDownShow, setUserDropDownShow] = useState(false);
  let [cartDropdownShow, setCartDropdownShow] = useState(false);

  let categoryDropDownRef = useRef();
  let userDropDownRef = useRef();
  let cartDropdownRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryDropDownRef.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }

      if (userDropDownRef.current.contains(e.target)) {
        setUserDropDownShow(true);
      } else {
        setUserDropDownShow(false);
      }

      if (cartDropdownRef.current.contains(e.target)) {
        setCartDropdownShow(true);
      } else {
        setCartDropdownShow(false);
      }
    });
  });

  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown className="relative z-50" dropref={categoryDropDownRef}>
              <p className="flex items-center gap-x-2.5">
                <FaBars />
                <span className="hidden lg:inline-block">Shop by Category</span>
              </p>

              {categoryDropDownShow && (
                <List className="font-regular absolute top-10 left-0 w-[263px] bg-primary font-dm text-sm text-white text-opacity-70">
                  <ListItem
                    itemname="Accessories"
                    className="px-4 py-4 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                  ></ListItem>
                  <ListItem
                    itemname="Furniture"
                    className="px-4 py-4 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                  ></ListItem>
                  <ListItem
                    itemname="Electronics"
                    className="px-4 py-4 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                  ></ListItem>
                  <ListItem
                    itemname="Clothes"
                    className="px-4 py-4 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                  ></ListItem>
                  <ListItem
                    itemname="Bags"
                    className="px-4 py-4 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                  ></ListItem>
                  <ListItem
                    itemname="Home appliances"
                    className="px-4 py-4 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                  ></ListItem>
                </List>
              )}
            </Dropdown>
          </div>

          <div className="w-auto lg:w-[600px] ">
            <Search
              className="font-regular w-full px-5 py-4 font-dm text-sm "
              placeholder="Search Products"
            />
          </div>

          <div className="flex items-center">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative z-50" dropref={userDropDownRef}>
                <div className="flex">
                  <FaUser />
                  <IoMdArrowDropdown />
                </div>

                {userDropDownShow && (
                  <List className="font-regular absolute top-9 right-0 w-[200px] border border-solid border-[#F0F0F0] bg-white font-dm text-sm font-normal text-primary text-opacity-70  ">
                    <ListItem
                      itemname="My Account"
                      className="border-b border-solid border-[#F0F0F0]  px-4 py-4 duration-100 ease-in hover:bg-primary hover:font-bold hover:text-white "
                    ></ListItem>
                    <ListItem
                      itemname="Log Out"
                      className="px-4 py-4 duration-100 ease-in hover:bg-primary hover:font-bold hover:text-white"
                    ></ListItem>
                  </List>
                )}
              </Dropdown>

              <Dropdown className="relative z-50" dropref={cartDropdownRef}>
                <BsCartFill className="text-lg" />

                {cartDropdownShow && (
                  <div className="absolute top-10 right-0 w-[360px] border border-solid border-[#F0F0F0] bg-[#F5F5F3]">
                    <div className="bg-[#F5F5F3]  p-5">
                      <Flex className="flex ">
                        <div className=" w-[20%]">
                          <div className="h-20 w-20 bg-black">
                            <Images imgsrc="assets/cartImg.png" />
                          </div>
                        </div>
                        <div className="ml-10 flex w-[60%] flex-col justify-center font-dm text-sm font-bold">
                          <h4>Black Smart Watch</h4>
                          <h4>$44.00</h4>
                        </div>

                        <div className="ml-10 flex w-[10%] items-center text-base">
                          <RxCross2 />
                        </div>
                      </Flex>
                    </div>
                    <div className="text-extrabold  gap-x-1 bg-white p-5 font-dm font-bold text-primary">
                      <h3 className="text-[#767676] ">
                        Subtotal:{" "}
                        <span className="ml-1 text-primary">$44.00</span>
                      </h3>
                      <div className="mt-5">
                        <Link
                          to="#"
                          className="inline-block w-36 border border-solid border-primary py-4 px-5"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="#"
                          className="ml-5 inline-block w-36 border border-solid border-primary bg-primary py-4 px-5 text-white"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </Dropdown>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
