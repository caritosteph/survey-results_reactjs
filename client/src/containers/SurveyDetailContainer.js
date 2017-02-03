import React, {Component} from 'react';
import SurveyDetail from '../components/SurveyDetail';
import SurveyService from '../services/SurveyService';


class SurveyDetailContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      survey_result_detail: null,
      error: ''
    };
  }

  componentWillMount(){
    let url = this.props.location.state.url;

    let survey_service = SurveyService.getSurveyResults(url);
    survey_service
    .then(response => {
      if(response.success && response.data) {
        let survey_result_detail = response.data.survey_result_detail;
        this.setState({survey_result_detail});
      }
    })
    .catch(error => {
      this.setState({error});
    });
  }

  render() {
    let {survey_result_detail, error} = this.state;
    let view = null;

    if(survey_result_detail) {
      view = <SurveyDetail surveyDetail = {survey_result_detail}/>;
    } else if (error !== '') {
      view = <div>{error}</div>;
    } else {
      view = <div>Loading</div>;
    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

SurveyDetailContainer.propTypes = {
};

export default SurveyDetailContainer;
