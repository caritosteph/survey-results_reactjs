import React, { PropTypes } from "react";
import ResponseListContainer from "../containers/ResponseListContainer";

const Question = ({question, id}) => {
  return (
    <div className = "col-md-6">
      <div className = "box-question">
        <div className = "box-question-header">
          <span className = "question-description"><i className = "fa fa-question-circle"/> Question {id + 1}</span>
          <h6>{question.description}</h6>
        </div>
        <div className = "box-question-body">
          <ResponseListContainer responseList = {question.survey_responses} perPage = {5} />
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
