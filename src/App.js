import React, { Component } from "react";
import "./App.css";
import Nav from "./components/navbar";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
