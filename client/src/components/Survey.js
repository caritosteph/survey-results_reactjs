import React, { PropTypes } from "react";
import { Link } from "react-router";
import Utils from "../utils/Utils";

const Survey = ({survey}) => {

  let pathname = survey.name.replace(/ /g, "");

  return (
    <div className = "col-md-6 col-sm-6">
      <div className = "panel panel-default">
        <div className = "panel-heading">
          <h4>{survey.name}</h4>
        </div>
        <div className = "panel-body">
          <div className = "col-md-4 panel-body-rate">
            <h3 className = "percentage-rate">{Utils.percentageRate(survey.response_rate)}<sup>%</sup></h3>
            <p>Participation rate</p>
          </div>
          <div className = "col-md-4 icon">
            <i className = "fa fa-bar-chart"/>
          </div>
          <div className = "col-md-4">
            <div className = "col-md-12 col-sm-6 col-xs-6">
              <h4>{survey.participant_count}</h4>
              <p>Participants</p>
            </div>
            <div className = "col-md 12 col-sm-6 col-xs-6">
              <h4>{survey.submitted_response_count}</h4>
              <p>Submitted responses</p>
            </div>
          </div>
        </div>
        <Link to = {{pathname: pathname, state: {url: survey.url}}} >
          <div className = "panel-footer">
            More information <i className="fa fa-arrow-circle-right"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

Survey.propTypes = {
  survey: PropTypes.object.isRequired
};

export default Survey;
