import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import Survey from '../components/Survey';

class SurveyContainer extends Component {

  render() {
    let {survey} = this.props;
    return (
        <Link to={survey.url}>
          <Survey survey = {survey}/>
        </Link>
    );
  }
}

SurveyContainer.propTypes = {
  survey: PropTypes.object.isRequired
};
export default SurveyContainer;
