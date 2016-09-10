import React from 'react';
import LocationsMap from './LocationsMap';

// Since this component is simple and static, there's no parent container for it.
const LocationsMapPage = () => {
  return (
    <div>
      Map
      <LocationsMap />
    </div>
  );
};

export default LocationsMapPage;
