import React from 'react';
import expect from 'expect';
import When from './../client/src/components/when.jsx';


describe('<When />', () => {
  const dummyWhenData = {
    startTime: '2018-03-13T02:00:00Z',
    endTime: '2018-03-13T04:00:00Z',
    series: 'weekly',
  };
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
     multiDay: true,
  };
  const whenWrapWithMulti = shallow(<When whenData={dummyWhenDataWithMultiDay} />);
  const whenStartClassEl = whenWrapWithMulti.find('.when__start');
  expect(whenStartClassEl).toHaveLength(1);
 });

 it('should display series info', () => {
    const seriesTxt = whenWrap.find('[data-test="when__series"]').text();
    expect(seriesTxt).toBe('Repeats every week');
  });

  it('should not display series info when null', () => {
    const dummyWhenDataWithNull = {
      startTime: '2018-03-13T02:00:00Z',
      endTime: '2018-03-13T04:00:00Z',
      series: null,
    };
    const whenWrapWithNull = shallow(<When whenData={dummyWhenDataWithNull} />);
    const seriesTxt2 = whenWrapWithNull.find('[data-test="when__series"]').text();
    expect(seriesTxt2).toBe('');
   });

});
