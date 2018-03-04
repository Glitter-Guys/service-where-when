import React from 'react';
import expect from 'expect';
import WhereWhen from './../client/components/whereWhen.jsx';
import Where from './../client/components/where.jsx';

describe('<WhereWhen />', () => {
 it('should be defined', () => {
   expect(WhereWhen).toBeDefined();
 });
 
 it('should render', () => {
   const WhereWhenWrap = <WhereWhen />;
   expect(WhereWhenWrap).toMatchSnapshot();
 })
});
