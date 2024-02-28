import React from "react";
import "./Qual.css";
import pdf from "../../assets/arun_resume.pdf";

const Qual = () => {
  const handleDownload = () => {
    window.open(pdf);
  };
  return (
    <div className="qual">
      <img
        className="imagemain"
        src="https://i.ibb.co/SxYpdM2/the-thing.png"
        alt=""
      />
      <div className="qual__info">
        <div className="qual__infoStuff">
          <h3>Hi, I'm Arun Subedi. Nice to Meet You</h3>
          <p className="text-red-500">
            As an ambitious and detail-oriented computer engineering student, I
            bring a passion for design, people skills, and an insatiable
            curiosity to learn. With a constant thirst for knowledge I strive to
            achieve goals and explore new horizons.
          </p>
        </div>
        <div className="download__button" onClick={handleDownload}>
          Download CV
        </div>
      </div>
    </div>
  );
};

export default Qual;
