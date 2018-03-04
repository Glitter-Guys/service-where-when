import React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import WhereWhen from './../client/components/whereWhen.jsx';
import Where from './../client/components/where.jsx';
import When from './../client/components/when.jsx';
import Map from './../client/components/map.jsx';
import { googleMapsKey } from './../config/apiKeys';

describe('<WhereWhen />', () => {
 it('should be defined', () => {
   expect(WhereWhen).toBeDefined();
 });
});

describe('<When />', () => {
  const dummyWhenData = {
    startTime: '2018-03-13T02:00:00Z',
    endTime: '2018-03-13T04:00:00Z',
    series: 'weekly'
  }
  const whenWrap = shallow(<When whenData={dummyWhenData} />);
  
 it('should be defined', () => {
   expect(When).toBeDefined();
 });
 
 it('should render a When component', () => {
   expect(whenWrap).toMatchSnapshot();
 });
 
 it('should display a single day event as date and time', () => {
   const whenDateClassEl = whenWrap.find('.when__date');
   expect(whenDateClassEl).toHaveLength(1);
 });
 
 it('should display a multiday event as start and end date-time', () => {
   const dummyWhenDataWithMultiDay = {
     startTime: '2018-03-10T18:00:00Z',
     endTime: '2018-03-12T00:00:00Z',
     series: null,
     multiDay: true
   }
   const whenWrapWithMulti = shallow(<When whenData={dummyWhenDataWithMultiDay} />);
   const whenStartClassEl = whenWrapWithMulti.find('.when__start');
   expect(whenStartClassEl).toHaveLength(1);
 });
 
 it('should display series info', () => {
    const seriesTxt = whenWrap.find('.when__series').text();
    expect(seriesTxt).toBe('Repeats every week');
  });
  
  it('should not display series info when null', () => {
    const dummyWhenDataWithNull = {
      startTime: '2018-03-13T02:00:00Z',
      endTime: '2018-03-13T04:00:00Z',
      series: null
    }
    const whenWrapWithNull = shallow(<When whenData={dummyWhenDataWithNull} />);
    const seriesTxt2 = whenWrapWithNull.find('.when__series').text();
    expect(seriesTxt2).toBe('');
   });
 
});

describe('<Where />', () => {
 it('should be defined', () => {
   expect(Where).toBeDefined();
 });
});

describe('<Map />', () => {
  const dummyWhereData = {
    address1: "30 Nowhere St.",
    city: "Sometown",
    state: "CA"
  }
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
    const expectedSrc = `https://maps.googleapis.com/maps/api/staticmap?key=${googleMapsKey}&center=37.75,-122.419998&size=480x300&zoom=17&scale=2&markers=color%3Ared%7Csize%3Alarge%7C`;
    expect(src).toBe(expectedSrc);
  });
});
