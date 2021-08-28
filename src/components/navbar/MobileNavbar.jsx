import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./../sidebar/Sidebar";
function MobileNavbar({ setSignin, setSignup,setContact }) {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="mnavbar">
      <div className="logo">nullBrains.</div>
      <div>
        <span onClick={() => setToggle(!toggle)}>
          <GiHamburgerMenu />
        </span>
        {
          <Sidebar
            setSignin={setSignin}
            setContact={setContact}
            setSignup={setSignup}
            toggle={toggle}
          />
        }
      </div>
    </nav>
  );
}

export default MobileNavbar;
