import React from "react";
import "./sidebar.css";
function Sidebar({ toggle }) {
  return (
    <div className={`${!!toggle && "sidebar__off"} sidebar`}>
      <div className="sidebar__item">Home</div>
      <div className="sidebar__item">Features</div>
      <div className="sidebar__item">Blog</div>
      <div className="sidebar__item">Contact</div>
      <div className="sidebar__item">Search</div>
      <div className="sidebar__item">Sign In</div>
      <div className="sidebar__item">Sign Up</div>
    </div>
  );
}

export default Sidebar;
