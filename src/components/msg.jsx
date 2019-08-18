import React, { Component } from "react";

class Msg extends Component {
  render() {
    return (
      <React.Fragment>
        <p style={this.props.anime} className={this.props.class}>
          {this.props.msg}
        </p>
        <p class={this.props.dateclass} style={this.props.anime}>
          {this.props.date}
        </p>
      </React.Fragment>
    );
  }
}

export default Msg;
