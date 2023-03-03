import Flex from "./components/layout/Flex.jsx";
import Images from "./components/layout/Images.jsx";
import List from "./components/layout/List.jsx";
import ListItem from "./components/layout/ListItem.jsx";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    function displayWindowSize() {
      if (window.innerWidth < 1024) {
        console.log("ami");
        setShow(false);
      } else {
        setShow(true);
      }
    }
    window.addEventListener("resize", displayWindowSize);
  }, []);

  return (
    <nav>
      <div className="max-w-container mx-auto p-2.5">
        <Flex className="lg:flex ">
          <div className="lg:w-3/12">
            <Images imgsrc="assets/logo.png" />
          </div>

          <div className="lg:w-9/12  w-full">
            <FaBars
              className="block lg:hidden ml-auto  absolute top-2.5 right-2.5"
              onClick={() => setShow(!show)}
            />

            {show && (
              <List className="lg:flex justify-end gap-x-10 mt-2.5 lg:mt-0 mt-5">
                <ListItem
                  className="font-dm text-sm font-bold hover:font-bold my-2.5 lg:my-0"
                  itemname="Home"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0 "
                  itemname="About"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0 "
                  itemname="Service"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0 "
                  itemname="Contact"
                />
              </List>
            )}
          </div>
        </Flex>
      </div>
    </nav>
  );
}

export default App;
