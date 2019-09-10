import React from "react";
import xd from "./icons/xd.svg";
import psd from "./icons/psd.svg";
import ai from "./icons/ai.svg";
import html from "./icons/html.svg";
import bootstrap from "./icons/Boostrap.svg";
import css from "./icons/css.svg";
import sass from "./icons/sass.svg";
import js from "./icons/js.svg";
import jquery from "./icons/jquery.svg";
import react from "./icons/React.svg";
const Third = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="mx-5 mb-0 mt-3 skill" style={{ fontWeight: "bold" }}>
          Skills
        </h1>
        <div className="row justify-content-center  flex-wrap ">
          <img
            width="60px "
            className="m-3 do"
            src={xd}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Adobe xd"
          />
          <img
            width="60px "
            className="m-3 do"
            src={psd}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Adobe Photoshop"
          />
          <img
            width="60px "
            className="m-3 do"
            src={ai}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Adobe Illustrator"
          />
          <img
            width="60px "
            className="m-3 do"
            src={html}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Html"
          />
          <img
            width="60px "
            className="m-3 do"
            src={bootstrap}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Bootstrap"
          />
          <img
            width="60px "
            className="m-3 do"
            src={css}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Css"
          />
          <img
            width="60px "
            className="m-3 do"
            src={sass}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Sass"
          />

          <img
            width="60px "
            className="m-3 do"
            src={js}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Javascript"
          />
          <img
            width="60px "
            className="m-3 do"
            src={jquery}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Jquery"
          />
          <img
            width="70px "
            className="do"
            src={react}
            alt="img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="React"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Third;
