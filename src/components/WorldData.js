import React, { useState, useEffect } from "react";
import numeral from "numeral";
import worldLogo from "../images/world.svg";

const WorldData = ({ handleModal }) => {
  const [worldData, setWorldData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setWorldData(data);
      });
  }, []);

  const {
    affectedCountries,
    population,
    cases,
    casesPerOneMillion,
    critical,
    active,
    deaths,
    deathsPerOneMillion,
    recovered,
    recoveredPerOneMillion,
    tests,
    todayCase,
    todayRecovered,
    todayDeaths,
  } = worldData;

  return (
    <div className="world-data">
      <div className="modal-close-icon" onClick={handleModal}>
        <div></div>
        <div></div>
      </div>
      <div className="world-logo">
        <img src={worldLogo} alt="Worldwide" />
      </div>
      <div>
        <div className="world-data-details">
          <div>
            <i class="fas fa-globe-europe"></i>
          </div>
          <div>
            <p>Affected Countries</p>
            <span>{numeral(affectedCountries).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i class="fas fa-globe-europe"></i>
          </div>
          <div>
            <p>Population</p>
            <span>{numeral(population).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i class="fas fa-virus"></i>
          </div>
          <div>
            <p>Today Cases</p>
            <span>{numeral(todayCase).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fas fa-viruses"></i>
          </div>
          <div>
            <p>Total Cases</p>
            <span>{numeral(cases).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fas fa-disease"></i>
          </div>
          <div>
            <p>Cases / One Million</p>
            <span>{numeral(casesPerOneMillion).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Active</p>
            <span>{numeral(active).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Critical</p>
            <span>{numeral(critical).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fas fa-user-md"></i>
          </div>
          <div>
            <p>Tests</p>
            <span>{numeral(tests).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i class="fas fa-user-shield"></i>
          </div>
          <div>
            <p>Today Recovered</p>{" "}
            <span>{numeral(todayRecovered).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i class="fas fa-hospital-user"></i>
          </div>
          <div>
            <p>Total Recovered</p>
            <span>{numeral(recovered).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Recovered / One Million</p>{" "}
            <span>{numeral(recoveredPerOneMillion).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Today Deaths</p>
            <span>{numeral(todayDeaths).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Total Deaths</p>
            <span>{numeral(deaths).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Deaths / One Million</p>
            <span>{numeral(deathsPerOneMillion).format("0,0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldData;
