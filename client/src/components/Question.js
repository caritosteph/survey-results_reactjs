import React, {PropTypes} from 'react';
import ResponseListContainer from '../containers/ResponseListContainer';
const Question = ({question}) => {
  return (
    <div>
      QUESTION:
      <p>Description: {question.description}</p>
      <p>Question Type: {question.question_type}</p>
      <ResponseListContainer responseList = {question.survey_responses}/>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired
};

export default Question;
