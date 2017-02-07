/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import QuestionListContainer from '../../src/containers/QuestionListContainer';
import QuestionList from '../../src/components/QuestionList';

const questionList = [{
    description: "I like the kind of work I do.",
    question_type: "ratingquestion",
    survey_responses: []
  }];

const setup = () => {
  return shallow(<QuestionListContainer questionList = {questionList}/>);
}

describe('<QuestionListContainer />', () => {
  it('should contain <QuestionList /> component', () => {
    const wrapper = setup();
    const actual  = wrapper.find(QuestionList).length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });

});
