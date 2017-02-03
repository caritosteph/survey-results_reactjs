import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

import MainContainer from './containers/MainContainer';
import SurveyResultsContainer from './containers/SurveyResultsContainer';
import SurveyDetailContainer from './containers/SurveyDetailContainer';

export default (
  <Router history = {browserHistory}>
    <Route path="/" component= {MainContainer}>
      <IndexRedirect to="/survey_results" />
      <Route path= "/survey_results" component={SurveyResultsContainer}/>
      <Route path= "/survey_results/:name" component={SurveyDetailContainer}/>
    </Route>
  </Router>
);
