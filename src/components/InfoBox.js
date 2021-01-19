import React from "react";
import "../styles/Infobox.css";

function InfoBox({
  title,
  cases,
  isRed,
  isGreen,
  isOrange,
  isBlue,
  active,
  total,
  icon,
  ...props
}) {
  return (
    <div
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed ? "isRed" : isGreen ? "isGreen" : isBlue ? "isBlue" : "isOrange"
      }`}
    >
      <div className="infoBox-top">
        <div className="infoBox-title">
          <h6>{title}</h6>
          {title === "Population" ? <h3>{cases}</h3> : <h3>+{cases}</h3>}
        </div>
        <div className="infoBox-icon">
          <img src={icon} alt={title} />
        </div>
      </div>
      <h6>{total ? `Total : ${total}` : ""}</h6>
    </div>
  );
}

export default InfoBox;
