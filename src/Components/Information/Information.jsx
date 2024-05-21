import React from "react";
import Artboard from "../../assets/Artboard.png";
import Play from "../../assets/Play.png";
import { Row, Col } from "antd";
import "./info.scss";
const Faq = () => {
  return (
    <div className="info-container container">
      <div className="info-content">
        <h2>
          <span>Why us?</span>
        </h2>
        <h1>Why Stream Wager Stands Out</h1>
        <img src={Artboard} alt="info" className="info-img" />
        <Row align="top" gutter={[32, 32]}>
          <Col lg={8} sm={24}>
            <div className="info-card">
              <h3>User-Friendly Interface</h3>
              <p>
                Navigate our platform with ease. Whether you’re on desktop or
                mobile, placing your bet is simple and quick.
              </p>
            </div>
          </Col>
          <Col lg={8} sm={24}>
            <div className="info-card">
              <h3>Live Betting</h3>
              <p>
                Immerse yourself in the intensity of live sports betting. Place
                your bets as the game unfolds and never miss a chance to win.
              </p>
            </div>
          </Col>
          <Col lg={8} sm={24}>
            <div className="info-card">
              <h3>Security You Can Trust</h3>
              <p>
                We employ state-of-the-art security measures to protect your
                transactions and ensure your privacy.
              </p>
            </div>
          </Col>
        </Row>

        <h2 style={{marginTop:"60px", width:"150px"}}>
          <span>How to play?</span>
        </h2>
        <h1>Easy to play on Stream Wager</h1>
        <img src={Play} alt="play" className="info-img" />

      </div>
    </div>
  );
};

export default Faq;
