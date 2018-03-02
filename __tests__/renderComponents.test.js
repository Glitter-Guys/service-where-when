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
 it('should be defined', () => {
   expect(When).toBeDefined();
 });
 
});

describe('<Where />', () => {
 it('should be defined', () => {
   expect(Where).toBeDefined();
 });
});
