import React, { useState, useEffect } from "react";
import InfoBox from "./components/InfoBox";
import Map from "./components/Map";
import Table from "./components/Table";
import LineGraph from "./components/LineGraph";
import WorldData from "./components/WorldData";
import CountryDetails from "./components/CountryDetails";
import { sortData, prettyPrintStat } from "./components/util";
import numeral from "numeral";
import "./styles/App.css";
import "./styles/CountryDetails.css";
import "./styles/Responsive.css";
import "leaflet/dist/leaflet.css";
import casesLogo from "./images/Group.svg";
import recoveredLogo from "./images/Group-1.svg";
import deathsLogo from "./images/Group-2.svg";
import populationLogo from "./images/Group-3.svg";
import DonateBanner from "./components/DonateBanner";
import Footer from "./components/Footer";

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
  };

  return (
    <div className="app">
      <main>
        {/* Left sidebar */}
        <section className="left-sidebar">
          <WorldData />
        </section>

        {/* Right sidebar */}
        <section className="right-sidebar">
          <div className="top-right-sidebar">
            <h6 className="main-title">Covid Tracker</h6>
            <div className="app-stats">
              <InfoBox
                icon={casesLogo}
                isRed
                active={casesType === "cases"}
                onClick={(e) => setCasesType("cases")}
                title="Coronavirus Cases"
                cases={numeral(countryInfo.todayCases).format("0,0")}
                total={prettyPrintStat(countryInfo.cases)}
              />
              <InfoBox
                icon={recoveredLogo}
                isGreen
                active={casesType === "recovered"}
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                cases={numeral(countryInfo.todayRecovered).format("0,0")}
                total={prettyPrintStat(countryInfo.recovered)}
              />
              <InfoBox
                icon={deathsLogo}
                isOrange
                active={casesType === "deaths"}
                onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                cases={numeral(countryInfo.todayDeaths).format("0,0")}
                total={prettyPrintStat(countryInfo.deaths)}
              />
              <InfoBox
                icon={populationLogo}
                isBlue
                active={casesType === "population"}
                title="Population"
                cases={prettyPrintStat(countryInfo.population)}
              />
            </div>
          </div>

          <div className="main-content">
            <Map
              casesType={casesType}
              countries={mapCountries}
              center={mapCenter}
              zoom={mapZoom}
            />
            <CountryDetails
              countries={countries}
              onCountryChange={onCountryChange}
              countryInfo={countryInfo}
              country={country}
            />

            <Table countries={tableData} />
            <DonateBanner />
            <LineGraph className="app-graph" casesType={casesType} />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
