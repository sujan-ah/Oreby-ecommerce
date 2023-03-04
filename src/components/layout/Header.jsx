import React, { useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { FaBars } from "react-icons/fa";
import List from "./List";
import ListItem from "./ListItem";

const Header = () => {
  let [show, setShow] = useState(false);

  let handleDropdown = () => {
    console.log("aci");
    setShow(!show);
  };

  return (
    <div className="bg-[#F5F5F3]">
      <Container>
        <Flex className="flex justify-between">
          <div>
            <Dropdown>
              <p
                onClick={handleDropdown}
                className="flex items-center gap-x-2.5"
              >
                <FaBars />
                Shop by Category
              </p>

              {show && (
                <List className="absolute">
                  <ListItem itemname="kdjfdk"></ListItem>
                  <ListItem itemname="kdk"></ListItem>
                  <ListItem itemname="kdk"></ListItem>
                </List>
              )}
            </Dropdown>
          </div>
          <h1>ami</h1>
          <h1>ami</h1>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
