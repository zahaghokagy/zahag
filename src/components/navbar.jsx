import React, { Component } from "react";
import img from "./SVG/ggf.svg";

class Nav extends Component {
 
 

  render() {


    return (
      <nav
        id="navbarb"
        className="navbar  navbar-expand-md bg-me  "
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src={img} alt="Logo" />
          </a>
          <button
            className="navbar-toggler navbar-light  "
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse   d-md-flex justify-content-md-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ">
              <li className="navbar-item mx-sm-2">
                <a href="#aboutg" className="nav-link">
                  About
                </a>
              </li>
              <li className="navbar-item mx-sm-2">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="navbar-item mx-sm-2">
                <a href="#portfolio" className="navme nav-link">
                  Portfolio
                </a>
              </li>
              <li className="navbar-item mx-sm-2">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
