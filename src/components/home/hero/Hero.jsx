import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO LEARN ETHIOPIAN LANGUAGES"
              title=" all 84 Ethiopian Languages at one place"
            />
            <p>LEARN LANGUAGES. SPEAK WITH HEARTS.</p>
            <div className="button">
              <button className="primary-btn">
                LEARN LANGUAGES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                EXPLORE CULTURES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
