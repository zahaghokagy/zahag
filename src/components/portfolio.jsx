import React from "react";
import img1 from "../img/1.png";
import img2 from "../img/2.gif";
import img3 from "../img/3.png";
import img4 from "../img/4.gif";
import img5 from "../img/5.gif";
import img6 from "../img/6.png";
import img7 from "../img/7.gif";
import img8 from "../img/8.png";
import img9 from "../img/9.gif";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="row txt mt-5 mb-4 mx-auto  justify-content-center">
        <hr />
        <p className="my-auto mx-3">some of my last work</p>
        <hr />
      </div>
      <div className="row flex-wrap justify-content-center my-3  mx-auto">
        <img src={img1} className="m-2  por " alt="img" />
        <img src={img2} className="m-2  por " alt="img" />
        <img src={img3} className="m-2  por " alt="img" />
        <img src={img4} className="m-2  por " alt="img" />
        <img src={img5} className="m-2  por " alt="img" />
        <img src={img6} className="m-2  por " alt="img" />
        <img src={img7} className="m-2  por " alt="img" />
        <img src={img8} className="m-2  por " alt="img" />
        <img src={img9} className="m-2  por " alt="img" />
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
