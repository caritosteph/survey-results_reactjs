import React, {Component, PropTypes} from 'react';
import ResponseList from '../components/ResponseList';
import Utils from '../utils/Utils';
import ReactPaginate   from 'react-paginate';

class ResponseListContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      responses: [],
      offset: 0,
      maxOffset: 5,
      pageCount: 1
    };
  }

  componentWillMount() {
    this._loadResponseList();
  }

  _loadResponseList() {
    let {responseList, perPage} = this.props;
    let {offset, maxOffset} = this.state;
    let responseByPage = responseList.slice(offset, maxOffset);

    this.setState({
      responses: responseByPage,
      pageCount: Math.ceil(responseList.length / perPage),
      responsePerPage: this.state.responsePerPage + 1
    });
  }

  handlePageClick = (responses) => {
  let {perPage} = this.props;
   let selected = responses.selected;
   let offset = Math.ceil(selected * perPage);
   let maxOffset = offset + 5;
   this.setState({offset, maxOffset}, () => {
     this._loadResponseList();
   });
 };
  render() {
    let {responses} = this.state;
    let {responseList} = this.props;
    let average = Utils.averageRating(responseList);

    return (
      <div>
        <ResponseList responseList = {responses} average = {average}/>
        <ReactPaginate
          previousLabel = {"«"}
          nextLabel = {"»"}
          breakLabel = {<a href="#">...</a>}
          breakClassName = {"break-me"}
          pageCount = {this.state.pageCount}
          marginPagesDisplayed = {1}
          pageRangeDisplayed = {4}
          onPageChange = {this.handlePageClick}
          containerClassName = {"pagination pagination-sm  pull-right"}
          subContainerClassName = {"pages pagination"}
          activeClassName = {"active"} />
      </div>
    );
  }
}

ResponseListContainer.propTypes = {
  responseList: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired
};

export default ResponseListContainer;
