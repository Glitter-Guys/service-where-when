import React from 'react';
import { googleMapsKey } from './../../config/apiKeys.js';

const Map = (props) => {
  const googleMapsCall = `https://maps.googleapis.com/maps/api/staticmap?key=${googleMapsKey}&center=${props.latitude}, ${props.longitude}&size=480x300&zoom=17&scale=2&markers=color%3Ared%7Csize%3Alarge%7C37.802914%2C-122.412239&sensor=false`;

  return (
    <img className="map" alt="map of location" src={googleMapsCall} />
  );
};

export default Map;
