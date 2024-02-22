import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text">
        <h1>A.S</h1>
        <p>This is somethind I want to write.</p>
      </div>
      <div className="footer__links">
        <GitHubIcon className="footer__icons" />
        <LinkedInIcon className="footer__icons" />
      </div>
    </div>
  );
};

export default Footer;
