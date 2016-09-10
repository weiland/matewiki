import React from 'react';
import { Marker, Popup, LayerGroup } from 'react-leaflet';

const Locations = (props) => {
  return (
    <LayerGroup>
      {props.markers.map((marker, index) => (
        <Marker position={marker.position} key={index}>
          <Popup>
            <span>{marker.title}</span>
          </Popup>
        </Marker>
      ))}
    </LayerGroup>
  );
};

Locations.propTypes = {
  markers: React.PropTypes.array
};

export default Locations;
