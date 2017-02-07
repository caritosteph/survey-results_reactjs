/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ButtonReturn from '../../../src/components/common/ButtonReturn';

describe('<ButtonReturn />', () => {
  it('should link to initial root path', () => {
    const wrapper =  shallow(<ButtonReturn />);
    const actual = wrapper.findWhere( n => n.prop('to') === '/').length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });

});
