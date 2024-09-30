import React from "react";
import "./Hero.scss";
import pinPoint from "../../assets/pinPoint.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const currentUser = {
    id: 1,
    username: "Prince Oteri",
    email: "test@gmail.com",
  };

  const handleGetStarted = () => {
    if (currentUser) {
      navigate("/list");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1>
            PinPoint Hub - Map Your <i>Customers</i> with Precision
          </h1>
          <p>
            Easily mark and manage customer locations on an interactive map!.
          </p>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="right">
          <img src={pinPoint} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
