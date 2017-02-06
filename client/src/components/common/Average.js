import React, {PropTypes} from 'react';

const Average = ({average}) => {
  return (
    <div className = "box-average pull-right">
      <div className = "col-md-5">
        <h5>Average: </h5>
      </div>
      <div className = "col-md-2 box-average-star bg-red">
        <i className = "fa fa-star-o"/>
      </div>
      <div className = "col-md-2 box-average-info">
        <p>{average}</p>
      </div>
    </div>
  );
};

Average.propTypes = {
  average: PropTypes.string.isRequired
};

export default Average;
