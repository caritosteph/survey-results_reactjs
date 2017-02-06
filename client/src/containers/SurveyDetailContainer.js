import React, {Component, PropTypes} from 'react';
import SurveyDetail from '../components/SurveyDetail';
import SurveyService from '../services/SurveyService';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';

class SurveyDetailContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      surveyResultDetail: null,
      error: ''
    };
  }

  componentWillMount(){
    let url = this.props.location.state.url;

    let surveyService = SurveyService.getSurveyResults(url);
    surveyService
    .then(response => {
      if(response.success && response.data) {
        let surveyResultDetail = response.data.survey_result_detail;
        this.setState({surveyResultDetail});
      }
    })
    .catch(error => {
      this.setState({error});
    });
  }

  render() {
    let {surveyResultDetail, error} = this.state;
    let view = null;

    if(surveyResultDetail) {
      view = <SurveyDetail surveyDetail = {surveyResultDetail}/>;
    } else if (error !== '') {
      view = <Error error = {error}/>;
    } else {
      view = <Loading/>;
    }

    return (
      <section>
        {view}
      </section>
    );
  }
}

SurveyDetailContainer.propTypes = {
  location: PropTypes.object.isRequired
};

export default SurveyDetailContainer;
