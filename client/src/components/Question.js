import React, {PropTypes} from 'react';
import ResponseListContainer from '../containers/ResponseListContainer';

const Question = ({question, id}) => {
  return (
    <div className = "box-question">
      <div className = "box-question-header">
        <span className = "question-description"><i className = "fa fa-question-circle"/> Question {id+1}</span>
        <h5>{question.description}</h5>
      </div>
      <div className = "box-question-body">
        <ResponseListContainer responseList = {question.survey_responses}/>
      </div>
      <div className = "box-question-footer">
        Pagination
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default Question;
