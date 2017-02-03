import React, {Component, PropTypes} from 'react';
import ResponseList from '../components/ResponseList';
import Response from '../components/Response';
import Utils from '../utils/Utils';

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
    let {responseList} = this.props;
    let average = Utils.average_rating(responseList);
    return <ResponseList responseList = {this._retrieveResponses()} average = {average}/>;
  }
}

ResponseListContainer.propTypes = {
  responseList: PropTypes.array.isRequired
};

export default ResponseListContainer;
