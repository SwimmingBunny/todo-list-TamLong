import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./layout/Main";
import "./Css.css";
function App() {
  return (
    <div className="app">
      <Main />
    </div>
  );
}

export default App;
