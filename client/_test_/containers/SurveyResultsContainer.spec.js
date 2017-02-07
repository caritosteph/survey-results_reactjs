/* eslint-env mocha */

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import SurveyResultsContainer from '../../src/containers/SurveyResultsContainer';
import SurveyListContainer from '../../src/containers/SurveyListContainer';
import Loading from '../../src/components/common/Loading';
import Error from '../../src/components/common/Error';


const setup = () => {
  return mount(<SurveyResultsContainer />);
}

describe('<SurveyResultsContainer />', () => {
  it('should calls componentWillMount', () => {
    const spy = sinon.spy(SurveyResultsContainer.prototype, 'componentWillMount');
    const wrapper = setup();
    const actual = spy.callCount;
    const expected = 1;
    expect(actual).to.be.equal(expected);
    spy.reset();
  });

  it('should contain <Error /> component when error state is setted', () => {
    const wrapper = setup();
    wrapper.setState({ error: 'error' });
    const actual = wrapper.find(Error).length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });

  it('should contain <Loading /> component when surveyResults state is empty', () => {
    const wrapper = setup();
    wrapper.setState({ surveyResults: [] });
    const actual = wrapper.find(Loading).length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });
});
