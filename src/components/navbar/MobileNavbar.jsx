import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./../sidebar/Sidebar";
function MobileNavbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="mnavbar">
      <div className="logo">nullBrains.</div>
      <div>
        <span onClick={() => setToggle(!toggle)}>
          <GiHamburgerMenu />
        </span>
        {<Sidebar toggle={toggle} />} 
      </div>
    </nav>
  );
}

export default MobileNavbar;
