import React, {PropTypes} from 'react';

const Survey = ({survey}) => {
  return (
    <div>
      <p>Name: {survey.name}</p>
      <p>#Participants: {survey.participant_count}</p>
      <p>Response rate: {survey.response_rate}</p>
      <p>Submitted Response count: {survey.submitted_response_count}</p>
    </div>
  );
};

Survey.propTypes = {
  survey: PropTypes.object.isRequired
};

export default Survey;
