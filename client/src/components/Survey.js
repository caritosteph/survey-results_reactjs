import React from 'react';

const Survey = (props) => {
  let {survey} = props;
  console.log("survey: ",survey);
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

};

export default Survey;
