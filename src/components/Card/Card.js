import { Button } from "@material-ui/core";
import React from "react";
import "./Card.css";

const Card = ({ title, link, github, img }) => {
  return (
    <div className="card">
      <div className="card__box">
        <div className="card__image">
          <img src={img} alt="" />
        </div>
        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          <div className="card__options">
            {/* <Button className="live-button">
              <a
                className="card__anchor"
                href={link}
                target="_blank"
                rel="noreferrer">
                Live site
              </a>
            </Button> */}
            <Button className="repo-button">
              <a
                className="card__anchor"
                href={github}
                target="_blank"
                rel="noreferrer">
                Github Repo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
