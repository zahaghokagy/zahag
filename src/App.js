import React, { Component } from "react";
import "./App.css";
import Nav from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
