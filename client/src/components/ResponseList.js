import React, {PropTypes} from 'react';
import Average from './common/Average';
import Response from './Response';

const ResponseList = ({responseList, average}) => {
  return (
    <div>
      <Average average = {average}/>
      <Response responseList = {responseList}/>
    </div>
  );
};

ResponseList.propTypes = {
  responseList: PropTypes.array.isRequired,
  average: PropTypes.string.isRequired
};

export default ResponseList;
