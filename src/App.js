import Flex from "./components/layout/Flex.jsx";
import Images from "./components/layout/Images.jsx";
import List from "./components/layout/List.jsx";
import ListItem from "./components/layout/ListItem.jsx";

function App() {
  return (
    <nav className="max-w-container mx-auto bg-green-500 px-2.5">
      <Flex>
        <div className="w-1/3">
          <Images imgsrc="assets/logo.png" />
        </div>

        <div className="w-2/3">
          <List className="flex justify-end gap-x-10	">
            <ListItem itemname="Home" />
            <ListItem itemname="About" />
            <ListItem itemname="Service" />
            <ListItem itemname="Contact" />
          </List>
        </div>
      </Flex>
    </nav>
  );
}

export default App;
