/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Survey from '../../src/components/Survey';
import Utils from '../../src/utils/Utils';

const survey = {
  name: "Simple Survey",
  url: "/survey_results/1.json",
  participant_count: 6,
  response_rate: 0.8333333333333334,
  submitted_response_count: 5
};

const setup = () => {
  return shallow(<Survey survey = {survey} />);
}

describe('<Survey />', () => {
  it('should show survey information', () => {
    const wrapper = setup();

    expect(wrapper.find('h4').first().text()).to.be.equal(survey.name);
    expect(wrapper.find('h3').text()).to.be.equal(Utils.percentageRate(survey.response_rate) + '%');
    expect(wrapper.find('h4').at(1).text()).to.be.equal(survey.participant_count + '');
    expect(wrapper.find('h4').last().text()).to.be.equal(survey.submitted_response_count + '');
  });

});
