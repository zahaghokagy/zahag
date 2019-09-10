import React from "react";
import main from "./SVG/main.svg";
import Sec from "./mainsec";
import Third from "./mainthird";
import Portfolio from "./portfolio";
const Main = () => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row row-expand-sm text-sm-left text-center mx-md-5">
          <div class="col-sm-6 my-auto " style={{ padding: "10px" }}>
            <h2 class="txtdark  ">
              A Freelance <br /> Ui Designer & <br /> Front-end Developer
            </h2>
            <p class="text-secondary para">
              I design and code beautifully simple things,
              <br /> and I love what I do
            </p>
            <button class="btn btn-primary btn-me px-sm-4 py-sm-1 px-5 py-1">
              see work
            </button>
          </div>
          <div class="col-sm-6 m-auto p-2 main">
            <img class="m-auto " src={main} alt="main" />
          </div>
        </div>
      </div>
      <Sec />
      <Third />
      <Portfolio />
    </React.Fragment>
  );
};
export default Main;
