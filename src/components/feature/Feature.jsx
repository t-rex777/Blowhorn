import React from "react";
import "./feature.css";
import { features } from "../../utils";

function Feature() {
  return (
    <div className="feature">
      <h1 align="center">Our Features</h1>
      <p align="center">Check out out list of awesome features below</p>
      <div className="feature__boxes">
        {features.map(({ img, header, info }) => (
          <div className="feature__box">
            {img}
            <h2 align="center">{header}</h2>
            <p align="center">{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
