/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ResponseList from '../../src/components/ResponseList';
import Average from '../../src/components/common/Average';
import Response from '../../src/components/Response';

describe('<ResponseList />', () => {
  it('should contain <Average /> component', () => {
    const responseList = [];
    const average = '5';

    const wrapper =  shallow(<ResponseList responseList = {responseList} average = {average}/>);
    const actual = wrapper.find(Average).length;
    const expected = 1;

    expect(actual).to.equal(expected);
  });

  it('should contain <Response /> component', () => {
    const responseList = [];
    const average = '5';

    const wrapper =  shallow(<ResponseList responseList = {responseList} average = {average}/>);
    const actual = wrapper.find(Response).length;
    const expected = 1;

    expect(actual).to.equal(expected);
  });

});
