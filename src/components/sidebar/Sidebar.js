import React from "react";
import "./sidebar.css";
function Sidebar({ toggle, setSignin, setSignup, setContact }) {
  return (
    <div className={`${!!toggle && "sidebar__off"} sidebar`}>
      <div className="sidebar__item">
        <a href="#home">Home</a>
      </div>
      <div className="sidebar__item">
        <a href="#feature">Features</a>
      </div>
      <div className="sidebar__item">
        <a href="#blog">Blog</a>
      </div>
      <div className="sidebar__item" onClick={() => setContact(true)}>
        <a href="#contact">Contact</a>
      </div>
      <div className="sidebar__item">Search</div>
      <div className="sidebar__item" onClick={() => setSignin(true)}>
        Sign In
      </div>
      <div className="sidebar__item" onClick={() => setSignup(true)}>
        Sign Up
      </div>
    </div>
  );
}

export default Sidebar;
