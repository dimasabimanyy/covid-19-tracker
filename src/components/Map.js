import React from "react";
import "../styles/Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Loop through country and draw bunch of circles */}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
