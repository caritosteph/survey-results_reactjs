import React, {PropTypes} from 'react';

const Response = ({response}) => {
  return (
    <div>
      <p>respondent_id: {response.respondent_id}</p>
      <p>response_content: {response.response_content}</p>
      <p>--------------------</p>
    </div>
  );
};

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;
