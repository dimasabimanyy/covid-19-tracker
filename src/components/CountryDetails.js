import React from "react";

const CountryDetails = ({ country }) => {
  // console.log(country);

  // console.log(country.country);

  return (
    <div className="country-details">
      <div className="country-details-name">
        {country ? "country.country" : "Worldwide"}
      </div>
    </div>
  );
};

export default CountryDetails;
