import React from "react";
import img from "./SVG/ggf.svg";

const Nav = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-md bg-me  ">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img src={img} alt="Logo" />
        </a>
        <button
          class="navbar-toggler navbar-light  "
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon "></span>
        </button>
        <div
          class="collapse navbar-collapse   d-md-flex justify-content-md-end"
          id="collapsibleNavbar"
        >
          <ul class="navbar-nav ">
            <li class="navbar-item mx-sm-2">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
            <li class="navbar-item mx-sm-2">
              <a href="#" class="nav-link">
                Services
              </a>
            </li>
            <li class="navbar-item mx-sm-2">
              <a href="#" class="navme nav-link">
                Portfolio
              </a>
            </li>
            <li class="navbar-item mx-sm-2">
              <a href="#" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
