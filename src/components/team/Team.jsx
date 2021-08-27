import React from "react";
import { teams } from "../../utils";
import "./team.css";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
function Team() {
  return (
    <div className="team">
      <p>OUT TEAM</p>
      <h1>An incredible team of amazing individuals</h1>
      <div className="team__members">
        {teams.map(({ img, name, position }) => (
          <div className="team__member">
            <div className="img_wrapper">
            <img className="team__member__img" src={img} alt="member" />
            </div>
            <p align="center" className="team__member__name">
              {name}
            </p>
            <p align="center" className="team__member__position">
              {position}
            </p>
            <span className="socials">
              <AiOutlineTwitter color={"#bcbace"} size={25} />
              <AiFillGithub color={"#bcbace"} size={22} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
