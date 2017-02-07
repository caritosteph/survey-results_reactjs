/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Question from '../../src/components/Question';
import ResponseListContainer from '../../src/containers/ResponseListContainer';

const question = {
  description: 'This is a question',
  survey_responses: [
    {
      id: 1,
      question_id: 1,
      respondent_id: 1,
      response_content: "5"
    }
  ]
};

const setup = () => {
  const id = 1;
  return shallow(<Question question = {question} id = {id} />);
}

describe('<Question />', () => {
  it('should show a description question', () => {
    const wrapper = setup();
    const actual = wrapper.find('h6').text();
    const expected = question.description;

    expect(actual).to.be.equal(expected);
  });

  it('should show number of question', () => {
    const wrapper =  setup();
    const actual = wrapper.find('span').text().trim();
    const expected = 'Question 2';

    expect(actual).to.be.equal(expected);
  });

  it('should contain <ResponseListContainer /> component', () => {
    const wrapper =  setup();
    const actual = wrapper.find(ResponseListContainer).length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });

});
