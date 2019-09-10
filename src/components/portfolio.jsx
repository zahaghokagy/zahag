import React from "react";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
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
        <img src={img3} className="m-2  por " alt="img" />
        <img src={img1} className="m-2  por " alt="img" />
        <img src={img2} className="m-2  por " alt="img" />
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
