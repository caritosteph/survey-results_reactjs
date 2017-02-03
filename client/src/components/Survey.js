import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Utils from '../utils/Utils';

const Survey = ({survey}) => {

  let pathname = '/survey_results/'+ survey.name.replace(/ /g, "");

  return (
    <div>
      <p>Name: {survey.name}</p>
      <p>#Participants: {survey.participant_count}</p>
      <p>Response rate: {Utils.percentage_rate(survey.response_rate)}</p>
      <p>Submitted Response count: {survey.submitted_response_count}</p>
      <Link to = {{pathname: pathname, state: {url: survey.url}}}><button>More info</button></Link>
    </div>

  );
};

Survey.propTypes = {
  survey: PropTypes.object.isRequired
};

export default Survey;
