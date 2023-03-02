import Flex from "./components/layout/Flex.jsx";
import Images from "./components/layout/Images.jsx";
import List from "./components/layout/List.jsx";
import ListItem from "./components/layout/ListItem.jsx";

function App() {
  return (
    <nav>
      <div className="max-w-container mx-auto bg-green-500 px-2.5">
        <Flex>
          <div className="w-1/3">
            <Images imgsrc="assets/logo.png" />
          </div>

          <div className="w-2/3">
            <List className="flex justify-end gap-x-10 ">
              <ListItem
                className="font-dm text-sm font-bold hover:font-bold"
                itemname="Home"
              />
              <ListItem
                className="font-dm text-sm font-regular hover:font-bold"
                itemname="About"
              />
              <ListItem
                className="font-dm text-sm font-regular hover:font-bold"
                itemname="Service"
              />
              <ListItem
                className="font-dm text-sm font-regular hover:font-bold"
                itemname="Contact"
              />
            </List>
          </div>
        </Flex>
      </div>
    </nav>
  );
}

export default App;
