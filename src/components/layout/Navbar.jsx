import React from "react";
import Flex from "./Flex.jsx";
import Images from "./Images.jsx";
import List from "./List.jsx";
import ListItem from "./ListItem.jsx";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import Container from "./Container.jsx";

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    function displayWindowSize() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    displayWindowSize();
    window.addEventListener("resize", displayWindowSize);
  }, []);

  return (
    <nav className="py-8">
      <Container>
        <Flex className=" lg:flex">
          <div className=" lg:w-3/12">
            <Images imgsrc="assets/logo.png" />
          </div>

          <div className="w-full lg:w-9/12">
            <FaBars
              className="absolute top-9 right-2.5  ml-auto block lg:hidden"
              onClick={() => setShow(!show)}
            />

            {show && (
              <List className="mt-10 justify-end gap-x-10 lg:mt-0 lg:flex">
                <ListItem
                  className="my-4 font-dm text-sm font-bold hover:font-bold lg:my-0"
                  itemname="Home"
                />
                <ListItem
                  className="font-regular my-4 font-dm text-sm hover:font-bold lg:my-0 "
                  itemname="About"
                />
                <ListItem
                  className="font-regular my-4 font-dm text-sm hover:font-bold lg:my-0 "
                  itemname="Service"
                />
                <ListItem
                  className="font-regular my-4 font-dm text-sm hover:font-bold lg:my-0 "
                  itemname="Contact"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
