import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./components/InfoBox";
import Map from "./components/Map";
import Table from "./components/Table";
import LineGraph from "./components/LineGraph";
import CountryDetails from "./components/CountryDetails";
import Topbar from "./components/Topbar";
import { sortData, prettyPrintStat } from "./components/util";
import "./styles/App.css";
import "leaflet/dist/leaflet.css";
import WorldData from "./components/WorldData";

import casesLogo from "./images/Group.svg";
import recoveredLogo from "./images/Group-1.svg";
import deathsLogo from "./images/Group-2.svg";
import populationLogo from "./images/Group-3.svg";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/countries/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });

    //https://disease.sh/v3/covid-19/countries/
  };

  return (
    <div className="app">
      <Topbar />
      <main>
        {/* Left sidebar */}
        <section className="left-sidebar">
          <WorldData />
          {/* <div className="logo">Covid Tracker</div>
        <div className="affected-country">
          <ul onClick={onCountryChange} value={country}>
            {countries.map((country, index) => (
              <li value={country.value} key={index}>
                {country.name}
              </li>
            ))}
          </ul>
        </div> */}
        </section>
        {/* End left sidebar */}
        {/* Right sidebar */}
        <section className="right-sidebar">
          <div className="top-right-sidebar"></div>
          <div className="grid-2">
            <div className="line-graph">
              <LineGraph className="app-graph" casesType={casesType} />
            </div>

            <div className="app-stats">
              <InfoBox
                icon={casesLogo}
                isRed
                active={casesType === "cases"}
                onClick={(e) => setCasesType("cases")}
                title="Coronavirus Cases"
                cases={prettyPrintStat(countryInfo.todayCases)}
                total={prettyPrintStat(countryInfo.cases)}
              />
              <InfoBox
                icon={recoveredLogo}
                isGreen
                active={casesType === "recovered"}
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                cases={prettyPrintStat(countryInfo.todayRecovered)}
                total={prettyPrintStat(countryInfo.recovered)}
              />
              <InfoBox
                icon={deathsLogo}
                isOrange
                active={casesType === "deaths"}
                onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                cases={prettyPrintStat(countryInfo.todayDeaths)}
                total={prettyPrintStat(countryInfo.deaths)}
              />
              <InfoBox
                icon={populationLogo}
                isBlue
                active={casesType === "population"}
                // onClick={(e) => setCasesType("population")}
                title="Population"
                cases={prettyPrintStat(countryInfo.population)}
              />
            </div>
          </div>
          <div className="map-wrapper">
            <Map
              casesType={casesType}
              countries={mapCountries}
              center={mapCenter}
              zoom={mapZoom}
            />
            <CountryDetails country={countryInfo} />
          </div>
          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country, index) => (
                <MenuItem value={country.value} key={index}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </section>
      </main>

      {/* <div className="app_left">
        <div className="app_header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app_stats">
          <InfoBox
            isRed
            active={casesType === "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
          />
          <InfoBox
            active={casesType === "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
          />
          <InfoBox
            isRed
            active={casesType === "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
          />
        </div>

        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live Cases by Country</h3>

          <Table countries={tableData} />
          <h3 className="graph_title">Worldwide New {casesType}</h3>

          <LineGraph className="app_graph" casesType={casesType} />
        </CardContent>
      </Card> */}
    </div>
  );
}

export default App;
