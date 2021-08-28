import React from "react";
import "./project.css";
import designImg from "../../images/design.svg";
import healthyImg from "../../images/healthy.svg";
import gameImg from "../../images/game.svg";
import workImg from "../../images/workstation.jpg";
import foodImg from "../../images/food.jpg";
import deisgnmindImg from "../../images/designmind.jpg";

function Project() {
  return (
    <div className="paint" id="blog">
      <div className="project">
        <h1 align="center">The Project Blog</h1>
        <p align="center">Designs and layouts to help you with your app.</p>
        <div className="bigcards">
          <div className="bigcard card1">
            <img src={designImg} alt="bigcard" className="bigcard__img img1" />
            <span className="bigcard__tag c1">RESOURCES</span>
            <h1 className="bigcard__header">Refreshing Designs</h1>
            <p className="bigcard__info">
              Quench satisfying designs to help you stir up emotion and tell a
              story.
            </p>
          </div>

          <div className="bigcard card2">
            <img src={healthyImg} alt="bigcard" className="bigcard__img img2" />
            <span className="bigcard__tag c2">LIFESTYLE</span>
            <h1 className="bigcard__header">Healthier Lifestyle</h1>
            <p className="bigcard__info">
              Living a healthier lifestyle will help with your productivity and
              your mind-set.
            </p>
          </div>

          <div className="bigcard card3">
            <img src={gameImg} alt="bigcard" className="bigcard__img img3" />
            <span className="bigcard__tag c3">ENTERTAINMENT</span>
            <h1 className="bigcard__header">Gaming Evolution</h1>
            <p className="bigcard__info">
              Learn about the evolution of gaming and how it started a
              revolution.
            </p>
          </div>
        </div>

        <div className="smallcards">
          <div className="smallcard">
            <img src={workImg} alt="smallcard" className="smallcard__img" />
            <span className="smallcard__tag card1 ">INSPIRATION</span>
            <h4 className="smallcard__header">Best workstations of the year</h4>
            <p className="smallcard__info">
              Check out these inspiring workstations to get ideas on how to
              level-up your workstation.
            </p>
          </div>

          <div className="smallcard">
            <img src={foodImg} alt="smallcard" className="smallcard__img" />
            <span className="smallcard__tag card2 ">FOOD</span>
            <h4 className="smallcard__header">Eating for Productivity</h4>
            <p className="smallcard__info">
              Learn how to be more disciplined in your diet and how you can eat
              to maximize productivity.
            </p>
          </div>

          <div className="smallcard">
            <img
              src={deisgnmindImg}
              alt="smallcard"
              className="smallcard__img"
            />
            <span className="smallcard__tag card3 ">RESOURCES</span>
            <h4 className="smallcard__header">A Design Mind-Set</h4>
            <p className="smallcard__info">
              What does it mean to have a design mind-set? Learn how to improve
              your eye for design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
