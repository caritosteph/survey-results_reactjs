import React, { PropTypes }  from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {React.cloneElement(this.props.children, this.props)}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
