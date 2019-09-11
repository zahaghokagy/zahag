import React, { Component } from "react";
import img from "./SVG/ggf.svg";
import $ from "jquery";
import Logo from "./logo";
class Nav extends Component {
  ref = React.createRef();
  render() {
    $(window).on("scroll", function() {
      if ($(window).scrollTop() > 60) {
        $("nav").addClass(" scrollnav");
        $(".cls-2").css("animation", "logohide 500ms ease forwards");
      } else {
        $("nav").removeClass(" scrollnav");
        $(".cls-2").css("animation", "logoshow 500ms ease forwards");
      }
    });

    return (
      <nav
        id="nav"
        ref={this.ref}
        className="navbar sticky-top navbar-expand-md bg-me  "
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            <Logo />
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
                <a href="#" className="nav-link">
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
