import React from "react";
import img1 from "../img/1.png";
import img3 from "../img/3.png";
import img6 from "../img/6.png";
import img8 from "../img/8.png";

const Portfolio = props => {
  return (
    <React.Fragment>
      <div
        id="portfolio"
        className="row txt mt-5 mb-4 mx-auto   justify-content-center"
      >
        <hr />
        <p className="my-auto mx-3">some of my last work</p>
        <hr />
      </div>
      <div className="row flex-wrap justify-content-center my-3  mx-auto">
        <img src={img1} className="m-2  por " alt="img" />
        <img
          onMouseEnter={() => props.handlemouseenter(0)}
          onMouseOut={() => props.handlemouseout(0)}
          src={props.block(0)}
          className="m-2  por "
          alt="img"
        />
        <img src={img3} className="m-2  por " alt="img" />
        <img
          onMouseEnter={() => props.handlemouseenter(1)}
          onMouseOut={() => props.handlemouseout(1)}
          src={props.block(1)}
          className="m-2  por "
          alt="img"
        />
        <img
          onMouseEnter={() => props.handlemouseenter(2)}
          onMouseOut={() => props.handlemouseout(2)}
          src={props.block(2)}
          className="m-2  por "
          alt="img"
        />
        <img src={img6} className="m-2  por " alt="img" />
        <img
          onMouseEnter={() => props.handlemouseenter(3)}
          onMouseOut={() => props.handlemouseout(3)}
          src={props.block(3)}
          className="m-2  por "
          alt="img"
        />
        <img src={img8} className="m-2  por " alt="img" />
        <img
          onMouseEnter={() => props.handlemouseenter(4)}
          onMouseOut={() => props.handlemouseout(4)}
          src={props.block(4)}
          className="m-2  por "
          alt="img"
        />
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
