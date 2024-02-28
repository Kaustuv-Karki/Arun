import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text">
        <h1>A.S</h1>
        <p>Contact me for any information..</p>
      </div>
      <div className="footer__links">
        <a
          href="https://github.com/ArunSubedi68"
          target="_blank"
          rel="noreferrer noopener">
          <GitHubIcon className="footer__icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/arunsubedi/"
          target="_blank"
          rel="noreferrer noopener">
          <LinkedInIcon className="footer__icons" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
