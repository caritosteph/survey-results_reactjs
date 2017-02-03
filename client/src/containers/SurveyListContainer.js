import React, {Component, PropTypes} from 'react';
import SurveyList from '../components/SurveyList';
import SurveyContainer from '../containers/SurveyContainer';

class SurveyListContainer extends Component {

  constructor (props) {
    super(props);
    this._retrieveSurveys = this._retrieveSurveys.bind(this);
  }

  _retrieveSurveys () {
    let {surveylist} = this.props;
    return surveylist.map((survey, index) => <SurveyContainer survey={survey} key={index} />);
  }

  render() {
    return <SurveyList surveylist = {this._retrieveSurveys()} />;
  }
}

SurveyListContainer.propTypes = {
  _retrieveSurveys: PropTypes.func.isRequired,
  surveylist: PropTypes.array.isRequired
};

export default SurveyListContainer;
