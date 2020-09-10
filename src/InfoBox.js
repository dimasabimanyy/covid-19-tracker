import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <div className="infoBox">
      <Card>
        <CardContent>
          {/* Corona Virus Cases */}
          <Typography className="infoBox_title" color="textSecondary">
            {title}
          </Typography>

          {/* Number of cases */}
          <h2 className="infoBox_cases">{cases}</h2>

          {/* Total */}
          <Typography className="infoBox_total" color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
