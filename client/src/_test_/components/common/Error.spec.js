/* eslint-env mocha */

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Error from '../../../components/common/Error';

describe('<Error/>', () => {
  it('should give a value a \'error\' class when error exist', () => {
    const error = 'Unexpected error';

    const wrapper =  shallow(<Error error = {error}/>);
    const actual = wrapper.find('p').text();
    const expected = 'Unexpected error';

    expect(actual).to.equal(expected);
  });
});
