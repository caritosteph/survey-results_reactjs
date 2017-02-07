/* eslint-env mocha */

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Question from '../../components/Question';
import ResponseListContainer from '../../containers/ResponseListContainer';

describe('<Question />', () => {
  it('should show a description question', () => {
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
    const id = 1;

    const wrapper =  shallow(<Question question = {question} id = {id}/>);
    const actual = wrapper.find('h6').text();
    const expected = question.description;

    expect(actual).to.equal(expected);
  });

  it('should show number of question', () => {
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

    const wrapper =  shallow(<Question question = {question} id = {0} />);
    const actual = wrapper.find('span').text().trim();
    const expected = 'Question 1';

    expect(actual).to.equal(expected);
  });

  it('should contain <ResponseListContainer /> component', () => {
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

    const wrapper =  shallow(<Question question = {question} id = {0}/>);
    const actual = wrapper.find(ResponseListContainer).length;
    const expected = 1;

    expect(actual).to.equal(expected);
  });

});
