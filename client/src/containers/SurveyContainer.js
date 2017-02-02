import React from 'react';
import { Link } from 'react-router';
import SurveyService from '../services/SurveyService';

class SurveyContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      survey_results: [],
      error: ''
    };
  }

  componentWillMount(){
    let survey_service = SurveyService.getSurveyResults('/survey_results');
    survey_service
    .then(response => {
      if(response.success && response.data) {
        let survey_results = response.data.survey_results;
        this.setState({survey_results});
      }
    })
    .catch(error => {
      alert('Errorrr!!: ',error);
    });
  }
  render(){
    return (
      <div>
      Survey Results
        <ul role="nav">
          <li><Link to="/survey/01">Surveys01</Link></li>
          <li><Link to="/survey/02">Surveys02</Link></li>
        </ul>
      </div>
    );
  }
}

SurveyContainer.propTypes = {
};

export default SurveyContainer;
