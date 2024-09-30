import React from "react";
import "./Testimonial.scss";
import { Slider } from "infinite-react-carousel";
import TestCard from "../testCards/TestCard";
import { cards } from "../../utils/data";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";

const Testimonial = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1506px)");
  return (
    <div className="testimonial">
      <div className="container">
        <h1>
          What <i>They Say</i> About Us:
        </h1>
        {isLargeScreen ? (
          <Slider slidesToShow={3} arrowsScroll={3} >
            {cards.map((card) => (
              <TestCard item={card} key={card.id} />
            ))}
          </Slider>
        ) : (
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            {cards.map((card) => (
              <TestCard item={card} key={card.id} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
