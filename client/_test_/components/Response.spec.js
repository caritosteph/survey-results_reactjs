/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Response from '../../src/components/Response';

const responseList = [{
  id: 1,
  question_id: 1,
  respondent_id: 1,
  response_content: "5"
},{
  id: 6,
  question_id: 1,
  respondent_id: 2,
  response_content: "4"
}];

const setup = () => {
  return shallow(<Response responseList = {responseList} />);
}

describe('<Response />', () => {
  it('should show the same number of responses than responseList variable send', () => {
    const wrapper = setup();
    const actual = wrapper.find('tbody').children().length;
    const expected = responseList.length;

    expect(actual).to.be.equal(expected);
  });
});
