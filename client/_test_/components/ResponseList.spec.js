/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ResponseList from '../../src/components/ResponseList';
import Average from '../../src/components/common/Average';
import Response from '../../src/components/Response';

const setup = () => {
  const responseList = [];
  const average = '5';

  return shallow(<ResponseList responseList = {responseList} average = {average} />);
}

describe('<ResponseList />', () => {
  it('should contain <Average /> component', () => {
    const wrapper = setup();
    const actual = wrapper.find(Average).length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });

  it('should contain <Response /> component', () => {
    const wrapper = setup();
    const actual = wrapper.find(Response).length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });

});
