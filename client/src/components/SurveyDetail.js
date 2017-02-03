import React, {PropTypes} from 'react';
import ThemeListContainer from '../containers/ThemeListContainer';
import Utils from '../utils/Utils';

const SurveyDetail = ({surveyDetail}) => {

  return (
    <div>
    SURVEY DETAILS
      <p>Name: {surveyDetail.name}</p>
      <p>Participant_count: {surveyDetail.participant_count}</p>
      <p>Response Rate: {Utils.percentage_rate(surveyDetail.response_rate)} </p>
      <p>submitted_response_count: {surveyDetail.submitted_response_count}</p>
      <ThemeListContainer themeList = {surveyDetail.themes}/>
    </div>
  );
};

SurveyDetail.propTypes = {
  surveyDetail: PropTypes.object.isRequired
};

export default SurveyDetail;
