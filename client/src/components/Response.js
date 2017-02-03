import React, {PropTypes} from 'react';

const Response = ({response}) => {
  return (
    <div>
      <p>id: {response.id}</p>
      <p>question_id: {response.question_id}</p>
      <p>respondent_id: {response.respondent_id}</p>
      <p>response_content: {response.response_content}</p>
    </div>
  );
};

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;
