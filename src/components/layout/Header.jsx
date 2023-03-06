import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { FaBars } from "react-icons/fa";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";

const Header = () => {
  let [show, setShow] = useState(false);
  let ref = useRef();

  let handleDropdown = () => {
    setShow(!show);
  };

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown dropref={ref}>
              <p
                onClick={handleDropdown}
                className="flex items-center gap-x-2.5 "
              >
                <FaBars />
                Shop by Category
              </p>

              {show && (
                <List className="font-regular absolute w-[263px] bg-primary font-dm text-sm text-white text-opacity-70">
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
            <h1>ami</h1>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
