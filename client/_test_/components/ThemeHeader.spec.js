/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ThemeHeader from '../../src/components/ThemeHeader';

const themeList = [{
    name: "The Work",
    questions: []
  },{
    name: "The Place",
    questions: []
  }];

const setup = () => {
  return  shallow(<ThemeHeader themeList = {themeList} />);
}

describe('<ThemeHeader />', () => {
  it('should show the same number of themes navs than themeList variable send', () => {
    const wrapper = setup();
    const actual = wrapper.find('ul').children().length;
    const expected = themeList.length;

    expect(actual).to.be.equal(expected);
  });
});
