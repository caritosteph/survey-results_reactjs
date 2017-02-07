/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SurveyDetail from '../../src/components/SurveyDetail';
import Utils from '../../src/utils/Utils';
import ThemeListContainer from '../../src/containers/ThemeListContainer';

const surveyDetail = {
  name: "Simple Survey",
  url: "/survey_results/1",
  participant_count: 6,
  response_rate: 0.8333333333333334,
  submitted_response_count: 5,
  themes: []
};

const setup = () => {
  return shallow(<SurveyDetail surveyDetail = {surveyDetail} />);
}

describe('<SurveyDetail />', () => {
  it('should show survey detail information', () => {
    const wrapper = setup();

    expect(wrapper.find('.survey-detail-name').first().text()).to.be.equal(surveyDetail.name);
    expect(wrapper.find('.detail-rate').text()).to.be.equal(Utils.percentageRate(surveyDetail.response_rate) + '%');
    expect(wrapper.find('strong').at(0).text()).to.be.equal(surveyDetail.participant_count + '');
    expect(wrapper.find('strong').at(1).text()).to.be.equal(surveyDetail.submitted_response_count + '');
  });

  it('should contain <ThemeListContainer /> component', () => {
    const wrapper = setup();
    const actual = wrapper.find(ThemeListContainer).length;
    const expected = 1;

    expect(actual).to.equal(expected);
  });

});
