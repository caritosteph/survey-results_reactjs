import React, {PropTypes} from 'react';
import Rating from './common/Rating';

const ResponseList = ({responseList, average}) => {
  return (
    <div>
      <table className = "table table-bordered">
        <thead className = "responses-table-header">
          <tr>
            <th>User ID</th>
            <th>Raiting</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {
            responseList.map((response, index) => {
              return (
                <tr key = {index}>
                  <td>{response.respondent_id}</td>
                  <td><Rating rating = {response.response_content} /></td>
                  <td>{response.response_content}</td>
                </tr>
              );
            })
          }

        </tbody>

      </table>
      <p>Average: {average}</p>
    </div>


  );
};

ResponseList.propTypes = {
  responseList: PropTypes.array.isRequired,
  average: PropTypes.string.isRequired
};

export default ResponseList;
