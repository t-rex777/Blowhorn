import React from "react";
import {
  SiTwitter,
  SiGithub,
  SiInstagram,
  SiFacebook,
  SiYoutube,
} from "react-icons/si";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__items">
        <div className="footer__item">About</div>
        <div className="footer__item">Blog</div>
        <div className="footer__item">Team</div>
        <div className="footer__item">Pricing</div>
        <div className="footer__item">Contact</div>
        <div className="footer__item">Terms</div>
      </div>
      <div className="footer__items">
        <SiFacebook className="footer__item" />
        <SiInstagram className="footer__item" />
        <SiTwitter className="footer__item" />
        <SiGithub className="footer__item" />
        <SiYoutube className="footer__item" />
      </div>
      <div className="footer__item">
        &copy; SomeCompany, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
