import React from "react";
import LiveChat from "./LiveChat";
import CardiologistInfo from "./CardiologistInfo";
import Testimonials from "./Testimonials";
import GoogleMap from "./GoogleMap";
import Services from "./Services";
import Accordian from "./Accordian";
import BooKApp from "./BookApp";
const Hero = () => {
  return (
    <div className="wrapper">
      <section className="outer-container">
        <section
          className="hero center"
          style={{
            color: "white",
          }}
        >
          <div className="title">
            <h1 style={{ marginLeft: "1rem" }}>
              Your Health Matters : <br />{" "}
              <span> Expert Cardiology Care For a Healthy Tomorrow </span>
            </h1>
            <button>Call Us</button>
          </div>
          <div className="hero-image">
            <img
              className="small-img"
              src="./src/assets/hero-image.webp"
              alt=""
            />
          </div>
        </section>
      </section>
      <LiveChat></LiveChat>
      <Services></Services>
      <CardiologistInfo></CardiologistInfo>
      <Testimonials></Testimonials>
      <GoogleMap></GoogleMap>
      <Accordian></Accordian>
      <BooKApp></BooKApp>
    </div>
  );
};

export default Hero;
