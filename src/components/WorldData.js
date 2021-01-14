import React, { useState, useEffect } from "react";
import numeral from "numeral";
import worldLogo from "../images/earth.svg";

const WorldData = () => {
  const [worldData, setWorldData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setWorldData(data);
      });
  }, []);

  console.log(worldData);

  const {
    affectedCountries,
    population,
    cases,
    casesPerOneMillion,
    critical,
    active,
    activePerOneMillion,
    deaths,
    deathsPerOneMillion,
    recovered,
    recoveredPerOneMillion,
    tests,
    testsPerOneMillion,
    todayCase,
    todayRecovered,
    todayDeaths,
  } = worldData;

  return (
    <div className="world-data">
      <div className="world-logo">
        <img src={worldLogo} alt="Worldwide" />
      </div>
      <div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Affected Countries</p>
            <span>{numeral(affectedCountries).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Population</p>
            <span>{numeral(population).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Cases</p>
            <span>{numeral(cases).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Cases / One Million</p>
            <span>{casesPerOneMillion}</span>
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
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Tests</p>
            <span>{numeral(tests).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
          </div>
          <div>
            <p>Today Recovered</p>{" "}
            <span>{numeral(todayRecovered).format("0,0")}</span>
          </div>
        </div>
        <div className="world-data-details">
          <div>
            <i className="fab fa-angular"></i>
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
  //   active: 24485297
  //   activePerOneMillion: 3139.24
  //   affectedCountries: 221
  //   cases: 92710111
  //   casesPerOneMillion: 11894
  //   critical: 110653
  //   criticalPerOneMillion: 14.19
  //   deaths: 1984796
  //   deathsPerOneMillion: 254.6
  //   oneCasePerPeople: 0
  //   oneDeathPerPeople: 0
  //   oneTestPerPeople: 0
  //   population: 7799744016
  //   recovered: 66240018
  //   recoveredPerOneMillion: 8492.59
  //   tests: 1309593306
  //   testsPerOneMillion: 167902.09
  //   todayCases: 706382
  //   todayDeaths: 15674
  //   todayRecovered: 415574
};

export default WorldData;
