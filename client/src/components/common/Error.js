import React, { PropTypes } from "react";

const Error = ({error}) => {
  return (
    <div className="alert alert-danger">
      <h4><i className="fa fa-ban"/>Error!</h4>
      <p>{error}</p>
      We are working to resolve this issue.
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;
