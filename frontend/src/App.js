import logo from "./logo.svg";
import "./App.css";
import "./component/MenuList.js"
import MenuList from "./component/MenuList.js";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md" className="App">
        <MenuList />
    </Container>
  );
}

export default App;
