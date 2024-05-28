import React from "react";

import { Row, Col, Tabs, Radio, Button } from "antd";
import { ReactComponent as Baseball } from "../../assets/Baseball.svg";
import { ReactComponent as Basketball } from "../../assets/Basketball.svg";
import { ReactComponent as FootBall } from "../../assets/FootBall.svg";
import { ReactComponent as Golf } from "../../assets/Golf.svg";
import { ReactComponent as Soccer } from "../../assets/Soccer.svg";
import { ReactComponent as NBA } from "../../assets/NBA.svg";

import Rectangle from "../../assets/Rectangle.png";
import Team1 from "../../assets/Team1.png";
import Team2 from "../../assets/Team2.png";
import "./wages.scss";
const Faq = () => {
  const items = [
    {
      key: "1",
      label: "Popular",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Live",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "CBB Tournament",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <div className="wages-container container">
      <div className="wages-content">
        <Tabs defaultActiveKey="1" items={items} />
        <Radio.Group
          defaultValue="a"
          buttonStyle="solid"
          className="wages-radio"
        >
          <Radio.Button value="all"> All Bets</Radio.Button>
          <Radio.Button value="FootBall">
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <FootBall />
              <span>FootBall</span>
            </div>
          </Radio.Button>
          <Radio.Button value="Baseball">
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Baseball />
              <span>Baseball</span>
            </div>
          </Radio.Button>
          <Radio.Button value="Basketball">
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Basketball />
              <span>Basketball</span>
            </div>
          </Radio.Button>
          <Radio.Button value="Golf">
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Golf />
              <span>Golf</span>
            </div>
          </Radio.Button>
          <Radio.Button value="Soccer">
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Soccer />
              <span>Soccer</span>
            </div>
          </Radio.Button>
        </Radio.Group>
       <h1><NBA/><span>National Basketball Association</span> </h1>

        <Row align="top" gutter={[48, 48]} style={{marginTop:"30px"}}>
          <Col lg={12} md={24}>
            <div className="bet-card">
              <div className="bet-card-info">
                <img src={Rectangle} alt="" />
                <div>
                  <div className="date-row">
                    <p>Wed, May 07, 7:00 PM EST</p>
                    <span>Spread</span>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team1} alt="" />
                    <p>Cleveland Cavaliers </p>
                  </div>
                   
                    <p className="point">+12.5</p>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team2} alt="" />
                  <p> Boston Celtics</p>
                  </div>
                   
                 
                    <p className="point red">-12.5</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div>
                  <label>Wager</label>
                  <div className="text">$1</div>
                </div>
                <div>
                  <label>To Win</label>
                  <div className="text">$1</div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  className="wager-btn"
                >
                  Place Wager
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={12} md={24}>
            <div className="bet-card">
              <div className="bet-card-info">
                <img src={Rectangle} alt="" />
                <div>
                  <div className="date-row">
                    <p>Wed, May 07, 7:00 PM EST</p>
                    <span>Spread</span>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team1} alt="" />
                    <p>Cleveland Cavaliers </p>
                  </div>
                   
                    <p className="point">+12.5</p>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team2} alt="" />
                  <p> Boston Celtics</p>
                  </div>
                   
                 
                    <p className="point red">-12.5</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div>
                  <label>Wager</label>
                  <div className="text">$1</div>
                </div>
                <div>
                  <label>To Win</label>
                  <div className="text">$1</div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  className="wager-btn"
                >
                  Place Wager
                </Button>
              </div>
            </div>
          </Col>

        </Row>
        <Row align="top" gutter={[48, 48]} style={{marginTop:"30px"}}>
          <Col lg={12} md={24}>
            <div className="bet-card">
              <div className="bet-card-info">
                <img src={Rectangle} alt="" />
                <div>
                  <div className="date-row">
                    <p>Wed, May 07, 7:00 PM EST</p>
                    <span>Spread</span>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team1} alt="" />
                    <p>Cleveland Cavaliers </p>
                  </div>
                   
                    <p className="point">+12.5</p>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team2} alt="" />
                  <p> Boston Celtics</p>
                  </div>
                   
                 
                    <p className="point red">-12.5</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div>
                  <label>Wager</label>
                  <div className="text">$1</div>
                </div>
                <div>
                  <label>To Win</label>
                  <div className="text">$1</div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  className="wager-btn"
                >
                  Place Wager
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={12} md={24}>
            <div className="bet-card">
              <div className="bet-card-info">
                <img src={Rectangle} alt="" />
                <div>
                  <div className="date-row">
                    <p>Wed, May 07, 7:00 PM EST</p>
                    <span>Spread</span>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team1} alt="" />
                    <p>Cleveland Cavaliers </p>
                  </div>
                   
                    <p className="point">+12.5</p>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team2} alt="" />
                  <p> Boston Celtics</p>
                  </div>
                   
                 
                    <p className="point red">-12.5</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div>
                  <label>Wager</label>
                  <div className="text">$1</div>
                </div>
                <div>
                  <label>To Win</label>
                  <div className="text">$1</div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  className="wager-btn"
                >
                  Place Wager
                </Button>
              </div>
            </div>
          </Col>

        </Row>
        <Row align="top" gutter={[48, 48]} style={{marginTop:"30px"}}>
          <Col lg={12} md={24}>
            <div className="bet-card">
              <div className="bet-card-info">
                <img src={Rectangle} alt="" />
                <div>
                  <div className="date-row">
                    <p>Wed, May 07, 7:00 PM EST</p>
                    <span>Spread</span>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team1} alt="" />
                    <p>Cleveland Cavaliers </p>
                  </div>
                   
                    <p className="point">+12.5</p>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team2} alt="" />
                  <p> Boston Celtics</p>
                  </div>
                   
                 
                    <p className="point red">-12.5</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div>
                  <label>Wager</label>
                  <div className="text">$1</div>
                </div>
                <div>
                  <label>To Win</label>
                  <div className="text">$1</div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  className="wager-btn"
                >
                  Place Wager
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={12} md={24}>
            <div className="bet-card">
              <div className="bet-card-info">
                <img src={Rectangle} alt="" />
                <div>
                  <div className="date-row">
                    <p>Wed, May 07, 7:00 PM EST</p>
                    <span>Spread</span>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team1} alt="" />
                    <p>Cleveland Cavaliers </p>
                  </div>
                   
                    <p className="point">+12.5</p>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team2} alt="" />
                  <p> Boston Celtics</p>
                  </div>
                   
                 
                    <p className="point red">-12.5</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div>
                  <label>Wager</label>
                  <div className="text">$1</div>
                </div>
                <div>
                  <label>To Win</label>
                  <div className="text">$1</div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  className="wager-btn"
                >
                  Place Wager
                </Button>
              </div>
            </div>
          </Col>

        </Row>
        <Row align="top" gutter={[48, 48]} style={{marginTop:"30px"}}>
          <Col lg={12} md={24}>
            <div className="bet-card">
              <div className="bet-card-info">
                <img src={Rectangle} alt="" />
                <div>
                  <div className="date-row">
                    <p>Wed, May 07, 7:00 PM EST</p>
                    <span>Spread</span>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team1} alt="" />
                    <p>Cleveland Cavaliers </p>
                  </div>
                   
                    <p className="point">+12.5</p>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team2} alt="" />
                  <p> Boston Celtics</p>
                  </div>
                   
                 
                    <p className="point red">-12.5</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div>
                  <label>Wager</label>
                  <div className="text">$1</div>
                </div>
                <div>
                  <label>To Win</label>
                  <div className="text">$1</div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  className="wager-btn"
                >
                  Place Wager
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={12} md={24}>
            <div className="bet-card">
              <div className="bet-card-info">
                <img src={Rectangle} alt="" />
                <div>
                  <div className="date-row">
                    <p>Wed, May 07, 7:00 PM EST</p>
                    <span>Spread</span>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team1} alt="" />
                    <p>Cleveland Cavaliers </p>
                  </div>
                   
                    <p className="point">+12.5</p>
                  </div>
                  <div className="teams-row">
                  <div style={{display:"flex", gap:"8px"}}>
                  <img src={Team2} alt="" />
                  <p> Boston Celtics</p>
                  </div>
                   
                 
                    <p className="point red">-12.5</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div>
                  <label>Wager</label>
                  <div className="text">$1</div>
                </div>
                <div>
                  <label>To Win</label>
                  <div className="text">$1</div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  className="wager-btn"
                >
                  Place Wager
                </Button>
              </div>
            </div>
          </Col>

        </Row>

      </div>
    </div>
  );
};

export default Faq;
