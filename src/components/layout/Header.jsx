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

const Header = () => {
  let [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  let [userDropDownShow, setUserDropDownShow] = useState(false);
  let categoryDropDownRef = useRef();
  let userDropDownRef = useRef();

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
    });
  });

  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown className="relative" dropref={categoryDropDownRef}>
              <p className="flex items-center gap-x-2.5 ">
                <FaBars />
                Shop by Category
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

          <div className="w-[600px]">
            <Search
              className="font-regular w-full  px-5 py-4 font-dm text-sm"
              placeholder="Search Products"
            />
          </div>

          <div className="flex items-center">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative" dropref={userDropDownRef}>
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
              <div>
                <BsCartFill />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
