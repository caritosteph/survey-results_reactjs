import React from 'react';
import Survey from './Survey';
import { Link } from 'react-router';

const SurveyList = (props) => {
  let {surveylist} = props;

  return (
    <div>
    {
      surveylist.map((survey,index) => {
        return (
          <div key = {index}>
            <Link to={survey.url}>
              <Survey survey = {survey}/>
            </Link>
          </div>
        )
      })
    }
    </div>
  );
};

SurveyList.propTypes = {

};

export default SurveyList;
