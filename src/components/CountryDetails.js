import React from "react";
import numeral from "numeral";
import defaultFlag from "../images/question-mark.jpg";
import { MenuItem, FormControl, Select } from "@material-ui/core";

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
      <FormControl className="app_dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem value="worldwide">Choose Country</MenuItem>
          {countries.map((country, index) => (
            <MenuItem value={country.value} key={index}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CountryDetails;
