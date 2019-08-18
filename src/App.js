import React, { Component } from "react";
import "./App.css";
import Chatbox from './chatbox'
import Back from './back'
class App extends Component {
  //  Rendring the thing in page
  render() {
    return (
      <div>
        <Back />
        <Chatbox/>
      </div>
    );
  }
}
export default App;
