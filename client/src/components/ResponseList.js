import React, {PropTypes} from 'react';
import Rating from './common/Rating';
import Average from './common/Average';

const ResponseList = ({responseList, average}) => {
  return (
    <div>
      <Average average = {average}/>
      <table className = "table table-bordered">
        <thead className = "responses-table-header">
          <tr>
            <th className = "response-info">User</th>
            <th>Raiting</th>
            <th className = "response-info">Label</th>
          </tr>
        </thead>
        <tbody>
          {
            responseList.map((response, index) => {
              return (
                <tr key = {index}>
                  <td>{response.respondent_id}</td>
                  <td><Rating rating = {response.response_content} /></td>
                  <td>{response.response_content ? response.response_content : '0'}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

ResponseList.propTypes = {
  responseList: PropTypes.array.isRequired,
  average: PropTypes.string.isRequired
};

export default ResponseList;
