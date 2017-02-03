import React, {Component} from 'react';
import SurveyDetail from '../components/SurveyDetail';
import SurveyService from '../services/SurveyService';


class SurveyDetailContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      survey_result_detail: [],
      error: ''
    };
  }

  componentWillMount(){
    let path = location.pathname;
    let survey_service = SurveyService.getSurveyResults(path);
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
    return (
      <div>
        {SurveyDetail}
      </div>
    );
  }
}

SurveyDetailContainer.propTypes = {
};

export default SurveyDetailContainer;
