import React from 'react';
import Locations from './Locations';
import { Map, TileLayer } from 'react-leaflet';

const position = [51.505, -0.09];
const markers = [];

const LocationsMap = () => {
  return (
    <Map center={position} zoom={13}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Locations markers={markers} />
    </Map>
  );
};

export default LocationsMap;
