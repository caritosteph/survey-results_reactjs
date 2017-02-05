import React, {Component, PropTypes} from 'react';
import ResponseList from '../components/ResponseList';
import Utils from '../utils/Utils';

class ResponseListContainer extends Component {

  constructor (props) {
    super(props);
  }
  render() {
    let {responseList} = this.props;
    let average = Utils.average_rating(responseList);
    return <ResponseList responseList = {responseList} average = {average}/>;
  }
}

ResponseListContainer.propTypes = {
  responseList: PropTypes.array.isRequired
};

export default ResponseListContainer;
