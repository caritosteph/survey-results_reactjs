import React, { PropTypes } from "react";

const QuestionList = ({questionList}) => {
  return (
    <div>
      {questionList}
    </div>
  );
};

QuestionList.propTypes = {
  questionList: PropTypes.array.isRequired
};

export default QuestionList;
