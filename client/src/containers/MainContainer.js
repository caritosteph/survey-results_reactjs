import React, { PropTypes }  from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
