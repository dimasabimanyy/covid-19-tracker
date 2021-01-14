import React from "react";
import "../styles/Infobox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

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
        <h6>{title}</h6>
        <div className="infoBox-icon">
          <img src={icon} alt={title} />
        </div>
      </div>
      <h3>
        {cases} <span>Today</span>
      </h3>
      <h6>{total ? `Total : ${total}` : ""}</h6>
    </div>
    // <Card
    //   onClick={props.onClick}
    //   className={`infoBox ${active && "infoBox--selected"} ${
    //     isRed && "infoBox--red"
    //   }`}
    // >
    //   <CardContent>
    //     {/* Corona Virus Cases */}
    //     <Typography className="infoBox_title" color="textSecondary">
    //       {title}
    //     </Typography>

    //     {/* Number of cases */}
    //     <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>
    //       {cases}
    //     </h2>

    //     {/* Total */}
    //     <Typography className="infoBox_total" color="textSecondary">
    //       {total} Total
    //     </Typography>
    //   </CardContent>
    // </Card>
  );
}

export default InfoBox;
