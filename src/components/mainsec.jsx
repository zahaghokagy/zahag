import React from "react";
import s1 from "./img/s1.png";
import s2 from "./img/s2.png";
import s3 from "./img/s3.png";
const Sec = () => {
  return (
    <section class="features_area bg-light text-center mx-auto">
      <div class="container">
        <div class="row justify-content-center ">
          <div class="col-lg-8 text-center">
            <div class="main_title my-5 ">
              <h2 style={{ fontWeight: "bold" }}>Hi there, I'm Salah</h2>
              <p className="parab">
                Hi, I’m Salah. Nice to meet you. I am an experienced design &{" "}
                <br />
                code lover, with online and self-learning. i create websites and{" "}
                <br />
                web applications and i design user interfaces.
              </p>
            </div>
          </div>
        </div>
        <div class="row feature_inner pb-3 justify-content-center">
          <div class="col-lg-3 col-md-6 ">
            <div class="feature_item">
              <img src={s1} className="m-2" alt="" />
              <h4>Wp developing</h4>
              <p>
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 ">
            <div class="feature_item">
              <img src={s2} className="m-2" alt="" />
              <h4>UI/ux design</h4>
              <p>
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 ">
            <div class="feature_item">
              <img src={s3} className="m-2" alt="" />
              <h4>Web design</h4>
              <p>
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec;
