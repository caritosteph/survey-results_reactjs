import React, {PropTypes} from 'react';
import ThemeListContainer from '../containers/ThemeListContainer';
import Utils from '../utils/Utils';
import ButtonReturn from '../components/common/ButtonReturn';

const SurveyDetail = ({surveyDetail}) => {

  return (
    <div className = "container">
      <ButtonReturn />
      <div className = "col-md-6 col-md-offset-3 survey-detail">

        <div className = "survey-detail-header">
          <div className = "col-md-3 col-sm-3 col-xs-3 icon-detail">
            <i className = "fa fa-bar-chart"/>
          </div>
          <div className = "col-md-9 col-sm-9 col-xs-9 survey-detail-name">{surveyDetail.name}</div>
        </div>
        <div className = "survey-detail-body">
          <div className = "survey-detail-rate">
            <h2 className = "detail-rate">{Utils.percentage_rate(surveyDetail.response_rate)}<sup>%</sup></h2>
          </div>
        </div>
        <div className = "survey-detail-footer">
          <div className = "col-md-6 col-sm-6 col-xs-6 survey-detail-info">
            <strong>{surveyDetail.participant_count}</strong>
            <p>Participants</p>
          </div>
          <div className = "col-md-6 col-sm-6 col-xs-6 ">
            <strong>{surveyDetail.submitted_response_count}</strong>
            <p>Submitted responses</p>
          </div>
        </div>
      </div>
      <div className = "col-md-12">
        <ThemeListContainer themeList = {surveyDetail.themes}/>
      </div>
    </div>
  );
};

SurveyDetail.propTypes = {
  surveyDetail: PropTypes.object.isRequired
};

export default SurveyDetail;
