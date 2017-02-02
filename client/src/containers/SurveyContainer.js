import React, { PropTypes }  from 'react';
import { Link } from 'react-router';

class Survey extends React.Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/survey/01">Surveys01</Link></li>
          <li><Link to="/survey/02">Surveys02</Link></li>
        </ul>
      </div>
    );
  }
}

Survey.propTypes = {
  children: PropTypes.element
};

export default Survey;
