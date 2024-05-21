import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import Join from "../Components/Join/Join";
import Faq from "../Components/FAQ/Faq";
import Information from "../Components/Information/Information";

const Home = () => {

  return (
    <div className="home-container">
    <Information/>
    <Faq/>
    <Join/>
    </div>
  );
};

export default Home;
