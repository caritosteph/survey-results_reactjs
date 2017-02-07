import React, { PropTypes } from "react";

const SurveyList = ({surveylist}) => {
  return (
    <div>
      {surveylist}
    </div>
  );
};

SurveyList.propTypes = {
  surveylist: PropTypes.array.isRequired
};

export default SurveyList;
