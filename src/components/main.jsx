import React from "react";
import main from "./SVG/main.svg";
import Sec from "./mainsec";
import Third from "./mainthird";
const Main = () => {
  return (
    <React.Fragment>
      <div className="container" id="about">
        <div className="row row-expand-sm text-sm-left text-center mx-md-5">
          <div className="col-sm-6 my-auto " style={{ padding: "10px" }}>
            <h2 className="txtdark  ">
              A Freelance <br /> Ui Designer & <br /> Front-end Developer
            </h2>
            <p className="text-secondary para">
              I design and code beautifully simple things,
              <br /> and I love what I do
            </p>
            <a
              href="#portfolio"
              className="btn btn-primary btn-me px-sm-4 py-sm-1 px-5 py-1"
            >
              see work
            </a>
          </div>
          <div className="col-sm-6 m-auto p-2 main">
            <img className="m-auto " src={main} alt="main" />
          </div>
        </div>
      </div>
      <Sec />
      <Third />
    </React.Fragment>
  );
};
export default Main;
