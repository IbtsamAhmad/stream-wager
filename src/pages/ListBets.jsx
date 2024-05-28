import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import Join from "../Components/Join/Join";
import Faq from "../Components/FAQ/Faq";
import Wages from "../Components/Wages/Wages";
import Information from "../Components/Information/Information";
import Hero from "../Components/Hero/Hero";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Wages />
      <Information />
      <Faq />
      <Join />
    </div>
  );
};

export default Home;
