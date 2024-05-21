import { Button } from "antd";
import "./join.scss";

const Join = () => {
  return (
    <div className="join-container container">
      <div className="join-content">
        <h1>
          Join Our <br /> Community
        </h1>
        <p className="info">
        Join Stream Wager today and transform the way you watch and bet on
        sports. With our advanced platform, every match you watch could be a win
        waiting to happen. 
        
        <br/>Sign up now and start your winning streak!
      </p>
      <Button
        type="primary"
        htmlType="submit"
        shape="round"
        className="submit-btn"
      >
        Join with Us
      </Button>
      </div>
     
    </div>
  );
};

export default Join;
