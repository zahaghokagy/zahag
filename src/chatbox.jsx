import React, { Component } from "react";
import Top from './components/top';
import Chat from './components/chat'
class Chatbox extends Component {
  render() {
    return (
        <div className="mainback">
        <Top />
        <Chat />
        </div>
    )
    ;
  }
}

export default Chatbox;
