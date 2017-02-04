import React, {PropTypes} from 'react';

const ResponseList = ({responseList, average}) => {
  return (
    <div>
      RESPONSES:
      {responseList}
      <p>Average: {average}</p>
    </div>
  );
};

ResponseList.propTypes = {
  responseList: PropTypes.array.isRequired,
  average: PropTypes.string.isRequired
};

export default ResponseList;
