import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const Survey = ({survey}) => {

  return (
    <div className="survey_results">
      <p>Name: {survey.name}</p>
      <p>#Participants: {survey.participant_count}</p>
      <p>Response rate: {survey.response_rate}</p>
      <p>Submitted Response count: {survey.submitted_response_count}</p>
      <Link to = {survey.url} ><button>More info</button></Link>
    </div>

  );
};

Survey.propTypes = {
  survey: PropTypes.object.isRequired
};

export default Survey;
