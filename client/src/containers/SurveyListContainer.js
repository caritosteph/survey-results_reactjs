import React, { Component, PropTypes } from "react";
import SurveyList from "../components/SurveyList";
import Survey from "../components/Survey";

class SurveyListContainer extends Component {

  constructor (props) {
    super(props);
    this._retrieveSurveys = this._retrieveSurveys.bind(this);
  }

  _retrieveSurveys () {
    let {surveylist} = this.props;
    return surveylist.map((survey, index) => <Survey survey = {survey} key = {index} />);
  }

  render() {
    return <SurveyList surveylist = {this._retrieveSurveys()} />;
  }
}

SurveyListContainer.propTypes = {
  surveylist: PropTypes.array.isRequired
};

export default SurveyListContainer;
