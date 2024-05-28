import React from "react";
import { Carousel } from "antd";
import Group1 from "../../assets/group1.png";
import BG from "../../assets/BG.png";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="hero-container container">
      <div className="carousel-content">
      <div className="circle-bg">
      <img src={BG} alt="" />
      </div>
        <Carousel>
          <div>
            <img src={Group1} alt="" className="carousel-img" />
          </div>
          <div>
            <img src={Group1} alt="" className="carousel-img" />
          </div>
          <div>
            <img src={Group1} alt="" className="carousel-img"/>
          </div>
          <div>
            <img src={Group1} alt="" className="carousel-img"/>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
