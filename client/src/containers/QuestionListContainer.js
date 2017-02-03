import React, {Component, PropTypes} from 'react';
import QuestionList from '../components/QuestionList';
import Question from '../components/Question';

class QuestionListContainer extends Component {

  constructor (props) {
    super(props);
    this._retrieveQuestions = this._retrieveQuestions.bind(this);
  }

  _retrieveQuestions () {
    let {questionList} = this.props;
    return questionList.map((question, index) => <Question question = {question} key = {index} />);
  }

  render() {
    return <QuestionList questionList = {this._retrieveQuestions()} />;
  }
}

QuestionListContainer.propTypes = {
  questionList: PropTypes.array.isRequired
};

export default QuestionListContainer;
