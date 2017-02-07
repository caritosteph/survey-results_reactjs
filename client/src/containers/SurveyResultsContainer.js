import React, { Component } from "react";
import SurveyService from "../services/SurveyService";
import SurveyListContainer from "../containers/SurveyListContainer";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";

class SurveyResultsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      surveyResults: [],
      error: ""
    };
  }

  componentWillMount(){
    let surveyService = SurveyService.getSurveyResults("/survey_results");
    surveyService
    .then(response => {
      if(response.success && response.data) {
        let surveyResults = response.data.survey_results;
        this.setState({surveyResults});
      }else{
        this.setState({error: response.msg});
      }
    })
    .catch(error => {
      this.setState({error});
    });
  }

  render(){
    let {surveyResults, error} = this.state;
    let view = null;

    if(surveyResults.length > 0) {
      view = <SurveyListContainer surveylist = {surveyResults} />;
    } else if (error !== "") {
      view = <Error error = {error} />;
    } else {
      view = <Loading />;
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
