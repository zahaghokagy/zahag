import React from "react";
import freepick from "./SVG/freepik.svg";
const Footer = () => {
  return (
    <footer className="mt-5">
      <div id="contact" className="contact text-center p-4">
        <h1>
          Have a project, idea or problem <br /> you'd like to discuss?
        </h1>
        <button className="btn  my-3 px-5">Start conversation</button>
        <h2>
          or you can find me on <a href="#">Upwork</a>
        </h2>
      </div>
      <div className="row m-auto justify-content-center pt-3 foot">
        Copyright ©{new Date().getFullYear()} All rights reserved
        <p>Zahag Design</p>. Illustration by
        <a href="https://www.freepik.com/pikisuperstar" target="_blank">
          <img src={freepick} width="60px" className="mx-2 " alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
