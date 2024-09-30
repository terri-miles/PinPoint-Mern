import React from "react";
import Hero from "../../components/hero/Hero";
import Save from "../../components/save/Save";
import Testimonial from "../../components/testimonials/Testimonial";
import Download from "../../components/download/Download";

const Home = () => {
  return <div className="home">
    <Hero />
    <Save />
    <Testimonial />
    <Download />
  </div>;
};

export default Home;
