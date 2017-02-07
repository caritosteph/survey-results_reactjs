/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Rating from '../../../src/components/common/Rating';

describe('<Rating />', () => {
  it('should show a number of fill starts equals to rating value', () => {
    const rating = '4';

    const wrapper =  shallow(<Rating rating = {rating} />);
    const actual = wrapper.find('i').findWhere(n => n.hasClass('fa fa-star')).length;
    const expected = 4;

    expect(actual).to.equal(expected);
  });

  it('should show a number of empty starts equals to the difference between 5 and the rating', () => {
    const rating = '3';

    const wrapper =  shallow(<Rating rating = {rating} />);
    const actual = wrapper.find('i').findWhere(n => n.hasClass('fa fa-star-o')).length;
    const expected = 2;

    expect(actual).to.equal(expected);
  });

});
