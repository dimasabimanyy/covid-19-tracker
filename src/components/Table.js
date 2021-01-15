import React from "react";
import numeral from "numeral";
import "../styles/Table.css";

function Table({ countries }) {
  return (
    <div className="table-wrapper">
      <h5>View cases by country</h5>
      <div className="table-country">
        <tr className="tr-1">
          <th>Country</th>
          <th>Cases</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
        {countries.map((country, index) => (
          <tr key={index}>
            <td className="table-country-flag">
              <img src={country.countryInfo.flag} alt={country.country} />{" "}
              {country.country}
            </td>
            <td>{numeral(country.cases).format("0,0")}</td>
            <td>{numeral(country.cases).format("0,0")}</td>
            <td>{numeral(country.cases).format("0,0")}</td>
          </tr>
        ))}
      </div>
    </div>
  );
}

export default Table;
