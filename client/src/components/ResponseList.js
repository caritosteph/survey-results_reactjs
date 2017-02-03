import React, {PropTypes} from 'react';

const ResponseList = ({responseList}) => {
  return (
    <div>
      RESPONSES:
      {responseList}
    </div>
  );
};

ResponseList.propTypes = {
  responseList: PropTypes.array.isRequired
};

export default ResponseList;
