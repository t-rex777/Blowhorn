import React from "react";
import Rocket from "../../images/rocket.svg";
import Ai from "../../images/ai.svg";
import "./content.css";
import { FiSmartphone } from "react-icons/fi";
function Content() {
  return (
    <div className="content">
      <div className="content__box">
        <div className="content__image">
          <img src={Rocket} alt="rocket" />
        </div>
        <div className="content__box__text">
          <h2>Boost Productivity</h2>
          <p>
            Build an atmosphere that creates productivity in your organisation
            and your company
          </p>
          <div>
            <p className="content__feat">
              <FiSmartphone className="bullet" /> Maximize produictivity
            </p>
            <p className="content__feat">
              <FiSmartphone className="bullet" />
              Speed past your competition
            </p>
            <p className="content__feat">
              <FiSmartphone className="bullet" />
              Learn the top techniques
            </p>
          </div>
        </div>
      </div>
      <div className="content__box">
        <div className="content__box__text">
          <h2>Automated Tasks</h2>
          <p>
            Save time and money with our revolutionary services. We are the
            leaders in the industry.
          </p>
          <div>
            <p className="content__feat">
              <FiSmartphone className="bullet" /> Automated task management
              workflow
            </p>
            <p className="content__feat">
              <FiSmartphone className="bullet" />
              Detailed analytics for your data
            </p>
            <p className="content__feat">
              <FiSmartphone className="bullet" />
              Some awesome integrations
            </p>
          </div>
        </div>
        <div className="content__image">
          <img src={Ai} alt="rocket" />
        </div>
      </div>
     
    </div>
  );
}

export default Content;
