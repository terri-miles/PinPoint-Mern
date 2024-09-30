import React from "react";
import "./Save.scss";
import savePic from "../../assets/save.png";
import { useNavigate } from "react-router-dom";

const Save = () => {
  const currentUser = {
    id: 1,
    username: "Prince Oteri",
    email: "test@gmail.com",
  };

  const navigate = useNavigate();

  const handleSave = () => {
    if (currentUser) {
      navigate("/add");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="save">
      <div className="container">
        <div className="left">
          <img src={savePic} alt="" />
        </div>
        <div className="right">
          <h1>
            Save Your <i>Customer's</i> Details with Ease
          </h1>
          <p>
            Quickly add customer information and pin their location on the map.
            Keep track of all your contacts in one convenient place.
          </p>
          <button onClick={handleSave}>Save Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Save;
