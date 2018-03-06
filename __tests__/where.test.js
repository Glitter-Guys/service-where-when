import React from 'react';
import expect from 'expect';
import Where from './../client/src/components/where.jsx';

describe('<Where />', () => {
  const dummyWhereData = {
    venuePublic: true,
    venueName: 'A Special Building',
    city: 'San Francisco',
    state: 'CA',
    address1: '85 Bluxome St',
    longitude: -122.39730072021484,
    latitude: 37.77610397338867,
  }
  const whereWrap = shallow(<Where whereData={dummyWhereData} />);

  it('should be defined', () => {
    expect(Where).toBeDefined();
  });

  it('should render', () => {
    expect(whereWrap).toMatchSnapshot();
  })

 it('should render the address correctly', () => {
   const addressTxt = whereWrap.find('address').text();
   expect(addressTxt).toBe('85 Bluxome St ∙ San Francisco');
 });

 it('should render a default address', () => {
   const dummyWhereDataWithoutVenue = { venuePublic: false };
   const whereWrapWithoutVenue = shallow(<Where whereData={dummyWhereDataWithoutVenue} />);
   const defaultTxt = whereWrapWithoutVenue.find('.where__default').text();
   expect(defaultTxt).toBe('Needs a location');
 });
});
