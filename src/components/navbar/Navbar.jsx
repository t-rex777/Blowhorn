import React, { useState } from "react";
import "./navbar.css";
import { BsSearch } from "react-icons/bs";

function Navbar({ setSignin, setSignup, setContact }) {
  return (
    <nav className="lnav">
      <div className="nav__item logo">nullBrains.</div>
      <div className="nav__items">
        <div className="nav__item">
          <a href="#home">Home</a>
        </div>
        <div className="nav__item">
          <a href="#feature">Features</a>
        </div>
        <div className="nav__item">
          <a href="#blog">Blog</a>
        </div>
        <div className="nav__item" onClick={() => setContact(true)}>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav__item" >
          <BsSearch size={15} style={{ marginTop: "10px" }} />
        </div>
      </div>
      <div className="nav__items">
        <div className="nav__item">
          <button className="nav__item__btn1" onClick={() => setSignin(true)}>
            Sign In
          </button>
        </div>
        <div className="nav__item">
          <button className="nav__item__btn2" onClick={() => setSignup(true)}>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
