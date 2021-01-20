import React from "react";
import worldLogo from "../images/world.svg";

const Topbar = ({ handleModal }) => {
  return (
    <section className="topbar">
      <div className="topbar-wrapper-logo">
        <div className="topbar-logo">
          <img src={worldLogo} alt="Logo" />
        </div>
        <h1>Covid Tracker</h1>
      </div>
      <div id="open-modal" className="hamburger" onClick={handleModal}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default Topbar;
