import React from 'react';
import { googleMapsKey } from './../../config/apiKeys';

const Map = (props) => {
  const googleMapsCall = `https://maps.googleapis.com/maps/api/staticmap?key=${googleMapsKey}&center=${props.latitude},${props.longitude}&size=480x300&zoom=17&scale=2&markers=color%3Ared%7Csize%3Alarge%7C`;
  const addressToQuery = `${props.whereData.address1}, ${props.whereData.city}, ${props.whereData.state}`;
  const encodedAddress = encodeURIComponent(addressToQuery);
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="map">
      <a className="map__link" href={googleMapsLink} target="_blank">
        <img className="map__img" alt="map of location" src={googleMapsCall} />
      </a>
    </div>
  );
};

export default Map;
