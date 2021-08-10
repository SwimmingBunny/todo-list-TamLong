import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import Body from "./layout/Body";
import "./Css.css";
function App() {
  return (
    <div className="app">
      <Body />
    </div>
  );
}

export default App;
