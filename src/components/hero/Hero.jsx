import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="hero__header">
        <h1>Start Crafting Your</h1>
        <h1 className="hero__l2">Next Great Idea</h1>
      </div>
      <div className="hero__tagline">
        <p align="center">
          Simplifying the creation of landing pages, blog pages, application
          pages and so much more!
        </p>
      </div>
      <div className="hero__explore">
        <button>Purchase Now</button>
        <span>only $15/mo</span>
        <p>Learn More</p>
      </div>
    </div>
  );
}

export default Hero;
