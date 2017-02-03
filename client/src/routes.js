import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import MainContainer from './containers/MainContainer';
import SurveyResultsContainer from './containers/SurveyResultsContainer';
import SurveyDetail from './components/SurveyDetail';

export default (
  <Router history = {browserHistory}>
    <Route path="/" component= {MainContainer}>
      <IndexRoute component = {SurveyResultsContainer} />
      <Route path= "/survey_results/:id" component={SurveyDetail}/>
    </Route>
  </Router>
);
