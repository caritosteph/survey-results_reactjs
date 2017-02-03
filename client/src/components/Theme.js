import React, {PropTypes} from 'react';
import QuestionListContainer from '../containers/QuestionListContainer';

const Theme = ({theme}) => {
  return (
    <div>
      THEME:
      <p>Name: {theme.name}</p>
      <QuestionListContainer questionList = {theme.questions}/>
    </div>
  );
};

Theme.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Theme;
