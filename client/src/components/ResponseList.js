import React, {PropTypes} from 'react';

const ResponseList = ({responseList, average}) => {
  return (
    <div>
      RESPONSES:
      {responseList}
      <p>Promedio: {average}</p>
    </div>
  );
};

ResponseList.propTypes = {
  responseList: PropTypes.array.isRequired
};

export default ResponseList;
