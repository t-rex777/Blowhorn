import React from "react";
import "./navbar.css";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="lnav">
      <div className="nav__item logo">nullBrains.</div>
      <div className="nav__items">
        <div className="nav__item">Home</div>
        <div className="nav__item">Features</div>
        <div className="nav__item">Blog</div>
        <div className="nav__item">Contact</div>
        <div className="nav__item">
          <BsSearch size={15} style={{ marginTop: "10px" }} />
        </div>
      </div>
      <div className="nav__items">
        <div className="nav__item">
          <button className="nav__item__btn1">Sign In</button>
        </div>
        <div className="nav__item">
          <button className="nav__item__btn2">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
