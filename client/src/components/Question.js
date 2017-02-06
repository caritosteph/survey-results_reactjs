import React, {PropTypes} from 'react';
import ResponseListContainer from '../containers/ResponseListContainer';
import Pagination from './common/Pagination';

const Question = ({question, id}) => {
  return (
    <div className = "col-md-6">
      <div className = "box-question">
        <div className = "box-question-header">
          <span className = "question-description"><i className = "fa fa-question-circle"/> Question {id+1}</span>
          <h6>{question.description}</h6>
        </div>
        <div className = "box-question-body">
          <ResponseListContainer responseList = {question.survey_responses}/>
        </div>
        <div className = "box-question-footer clearfix">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default Question;
