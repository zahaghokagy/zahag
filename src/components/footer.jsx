import React from "react";
import freepick from "./SVG/freepik.svg";
const Footer = () => {
  return (
    <footer className="mt-5">
      <hr id="hr" className="m-auto" />
      <div id="contact" className="contact text-center pt-4 pb-3">
        <h1>
          Have a project, idea or problem <br /> you'd like to discuss?
        </h1>
        <button className="btn-dark py-2 my-3 px-5">Start conversation</button>
        <h2>
          or you can find me on{" "}
          <a href="https://www.upwork.com" target="_blank">
            Upwork
          </a>{" "}
          or{" "}
          <a href="https://www.github.com/zahaghokagy" id="git" target="_blank">
            Github
          </a>
        </h2>
      </div>
      <hr id="hr" className="m-auto" />
      <div className="row m-auto justify-content-center py-3 foot">
        Copyright ©{new Date().getFullYear() + ""} <b>&nbsp;Zahag Design</b>
        &nbsp;| Illustration by
        <a href="https://www.freepik.com/pikisuperstar" target="_blank">
          <img src={freepick} width="60px" className="mx-2 " alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
