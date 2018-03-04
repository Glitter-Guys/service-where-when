import React from 'react'
import expect from 'expect'
import { shallow, mount, render } from 'enzyme'
import WhereWhen from './../client/components/whereWhen.jsx'
import Where from './../client/components/where.jsx'
import When from './../client/components/when.jsx'

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
  const whenWrap = shallow(<Map whenData={dummyWhenData} />);
  
 it('should be defined', () => {
   expect(When).toBeDefined();
 });
 
 it('should render a When component', () => {
   expect(whenWrap).toMatchSnapshot();
 });
 
 it('should display series info', () => {
    const seriesTxt = whenWrap.find('.when__series').text();
    console.log(seriesTxt);
    expect(seriesTxt).toBe('Repeats every week');
  });
 
});

describe('<Where />', () => {
 it('should be defined', () => {
   expect(Where).toBeDefined();
 });
});
