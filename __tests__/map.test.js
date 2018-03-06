import React from 'react';
import expect from 'expect';
import Map from './../client/src/components/map.jsx';

describe('<Map />', () => {
  const dummyWhereData = {
    address1: "30 Nowhere St.",
    city: "Sometown",
    state: "CA",
  };
  const dummyLat = 37.75;
  const dummyLon = -122.419998;
  const mapWrap = shallow(<Map latitude={dummyLat} longitude={dummyLon} whereData={dummyWhereData} />);

  it('should be defined', () => {
    expect(Map).toBeDefined();
  });

  it('should render a Map component', () => {
    expect(mapWrap).toMatchSnapshot();
  });

  it('should insert a hyperlink to Google Maps', () => {
    const href = mapWrap.find('a').props().href;
    expect(href).toBe('https://www.google.com/maps/search/?api=1&query=30%20Nowhere%20St.%2C%20Sometown%2C%20CA');
  });

  it('should insert a map img', () => {
    const src = mapWrap.find('img').props().src;
    const expectedSrc = `https://maps.googleapis.com/maps/api/staticmap?key=keygoeshere&center=37.75,-122.419998&size=480x300&zoom=17&scale=2&markers=color%3Ared%7Csize%3Alarge%7C`;
    expect(src).toBe(expectedSrc);
  });
});
