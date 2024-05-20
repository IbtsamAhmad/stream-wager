import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer-container container">
      <Row align="middle" justify="space-between">
        <Col lg={12} sm={24}>
          <Logo />
        </Col>
        <Col lg={12} sm={24} style={{textAlign:"right"}}>
          <Link to="/">Home</Link>
          <Link to="/">List bets</Link>
          <Link to="/">FAQs</Link>
        </Col>
      </Row>
      <Row align="middle" justify="space-between" style={{marginTop:"10px", textAlign:"right"}}>
        <Col lg={12} sm={24} style={{textAlign:"left"}}>
          <p>©Stream Wagger. All rights reserved.</p>
        </Col>
        <Col lg={12} sm={24}>
          <span>Terms</span>
          <span>Privacy</span>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
