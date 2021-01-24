import React from "react";
import thumbnail from "../images/nature.jpg";

const DonateBanner = () => {
  return (
    <div className="donate">
      <div className="donate-thumbnail">
        <img src={thumbnail} alt="Help Covid Patients" />
      </div>
      <div className="donate-info">
        <div className="donate-title">
          <h5>Help WHO fight Covid 19</h5>
          <h3>The COVID-19 Solidarity Response Fund</h3>
        </div>
        <div className="donate-btn">
          <a
            href="https://covid19responsefund.org/"
            target="_blank"
            alt="covid donate"
            className="btn btn-donate"
            rel="noopener noreferrer"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonateBanner;
