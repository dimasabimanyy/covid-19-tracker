import React from "react";
import numeral from "numeral";
import "../styles/Table.css";

function Table({ countries }) {
  return (
    <div className="table-wrapper">
      <h5>View cases by country</h5>
      <div className="table">
        {countries.map((country, index) => (
          <tr key={index} className="table-country">
            <td>
              <img src={country.countryInfo.flag} alt={country.country} />{" "}
              {country.country}
            </td>
            <td>
              <strong>{numeral(country.cases).format("0,0")}</strong>
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
}

export default Table;
