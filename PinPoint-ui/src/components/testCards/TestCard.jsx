import React from "react";
import "./TestCard.scss";
import { FaBriefcase } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const TestCard = ({ item }) => {
  return (
    <div className="testCard">
      <div className="details">
        <img src={item.image} alt="" />
        <div className="info">
          <h4>{item.name}</h4>
          <div className="occupation">
            <span>
              <FaBriefcase />
            </span>{" "}
            <span>{item.occupation}</span>
          </div>
        </div>
      </div>
      <div className="review">
        <span><FaQuoteLeft /></span>
        <p> {item.review}</p>
        <span className="right"><FaQuoteRight /></span>
        </div>
    </div>
  );
};

export default TestCard;
