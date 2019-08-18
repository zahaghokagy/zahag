import React, { Component } from "react";

class Bottom extends Component {
  render() {
    return (
        <textarea
          type="text"
          placeholder="Type in some thing"
          onChange={this.props.onchange}
          value={this.props.value}
          onKeyPress={this.props.onkey}
        />
    );
  }
}

export default Bottom;
