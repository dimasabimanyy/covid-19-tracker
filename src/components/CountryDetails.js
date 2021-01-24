import React from "react";
import numeral from "numeral";
import defaultFlag from "../images/question-mark.jpg";

const CountryDetails = ({
  country,
  countryInfo,
  countries,
  onCountryChange,
}) => {
  return (
    <div className="country-details">
      <div className="country-details-flag">
        <img
          src={
            countryInfo.countryInfo ? countryInfo.countryInfo.flag : defaultFlag
          }
          alt="Flag"
        />
      </div>
      <div className="country-details-control">
        <span>Country : </span>
        <span>{countryInfo.country ? countryInfo.country : "-"}</span>
      </div>
      <div className="country-details-control">
        <span>Active : </span>
        <span>
          {countryInfo.active ? numeral(countryInfo.active).format("0,0") : "-"}
        </span>
      </div>
      <div className="country-details-control">
        <span>Continent : </span>
        <span>{countryInfo.continent ? countryInfo.continent : "-"}</span>
      </div>
      <div className="country-details-control">
        <span>Critical : </span>
        <span>
          {countryInfo.critical
            ? numeral(countryInfo.critical).format("0,0")
            : "-"}
        </span>
      </div>
      <div className="country-details-control">
        <span>Tests : </span>
        <span>
          {countryInfo.tests ? numeral(countryInfo.tests).format("0,0") : "-"}
        </span>
      </div>
      <div className="country-details-control cd-last">
        <span>Population : </span>
        <span>
          {countryInfo.population
            ? numeral(countryInfo.population).format("0,0")
            : "-"}
        </span>
      </div>
      <div className="app-dropdown">
        <select
          onChange={onCountryChange}
          value={country}
          className="select-country"
        >
          <option value="worldwide">Choose Country</option>
          {countries.map((country, index) => (
            <option
              value={country.value}
              key={index}
              className="select-country-option"
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryDetails;
