import React from "react";
import "./DownLoad.scss";
import downLogo from "../../assets/downLogo.png";

const Download = () => {
  return (
    <div className="download">
      <div className="container">
        <h1>
          Get the <i>App</i> on Your Favorite Device
        </h1>
        <div className="right">
          <img src={downLogo} alt="" />
          <p>
            Download PinPoint Hub on the App Store or Google Play and manage
            your customer locations on the go. Stay connected and in control,
            wherever you are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;
