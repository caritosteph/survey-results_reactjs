import React, {Component, PropTypes} from 'react';
import ResponseList from '../components/ResponseList';
import Response from '../components/Response';

class ResponseListContainer extends Component {

  constructor (props) {
    super(props);
    this._retrieveResponses = this._retrieveResponses.bind(this);
  }

  _retrieveResponses () {
    let {responseList} = this.props;
    return responseList.map((response, index) => <Response response = {response} key = {index} />);
  }

  render() {
    return <ResponseList responseList = {this._retrieveResponses()} />;
  }
}

ResponseListContainer.propTypes = {
  responseList: PropTypes.array.isRequired
};

export default ResponseListContainer;
