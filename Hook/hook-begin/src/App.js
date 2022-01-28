import "./App.css";
import ListItem from "./hookEx/listItem";
import AddSing from "./hookEx/addSing";
import DisplayText from "./hookEx/displayText";

function App() {
  return (
    <div className="App">
      <ListItem />
      <AddSing />
      <DisplayText />
    </div>
  );
}

export default App;
