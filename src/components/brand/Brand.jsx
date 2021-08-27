import React from "react";
import Disney from "../../images/Disney+-Logo.wine.svg";
import Google from "../../images/Google-Logo.wine.svg";
import Hubspot from "../../images/HubSpot-Logo.wine.svg";
import Youtube from "../../images/YouTube-Logo.wine.svg";
import Slack from "../../images/Slack_Technologies-Logo.wine.svg";
import Shopify from "../../images/Shopify-Logo.wine.svg";
import "./brand.css"

function Brand() {
  return (
    <div className="brand">
      <h5 align="center">TRUSTED BY TOP-LEADING COMPANIES.</h5>
      <div className="brand__images">
        <img src={Disney} alt="brand" />
        <img src={Google} alt="brand" />
        <img src={Hubspot} alt="brand" />
        <img src={Youtube} alt="brand" />
        <img src={Slack} alt="brand" />
        <img src={Shopify} alt="brand" />
      </div>
    </div>
  );
}

export default Brand;
