import React from 'react';
import SurveyService from '../services/SurveyService';
import SurveyListContainer from '../containers/SurveyListContainer';

class SurveyResultsContainer extends React.Component {

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
      this.setState({error});
    });
  }

  render(){

    let {survey_results, error} = this.state;
    let view = null;

    if(survey_results.length > 0) {
      view = <SurveyListContainer surveylist = {survey_results}/>;
    } else if (error !== '') {
      view = <div>{error}</div>;
    } else {
      view = <div>Loading</div>;
    }

    return (
      <section>
        <div className = "container">
          <h2 className = "text-center">List of Survey Results</h2>
          <h5 className = "text-center">For more details click on More information</h5>
          <div className = "view-surveys">{view}</div>
        </div>
      </section>
    );
  }
}

export default SurveyResultsContainer;
