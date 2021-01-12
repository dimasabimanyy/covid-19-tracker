import React from "react";
import "../styles/Infobox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <div
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"}`}
    >
      <div className="infoBox-top">
        <h6>{title}</h6>
        <div className="infoBox-icon">IC</div>
      </div>
      <h3 className={`infoBox-cases ${!isRed && "infoBox-cases--green"}`}>
        {cases}
      </h3>
      <h6>{total} Total</h6>
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
