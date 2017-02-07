import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainContainer from './containers/MainContainer';
import SurveyResultsContainer from './containers/SurveyResultsContainer';
import SurveyDetailContainer from './containers/SurveyDetailContainer';

export default (
  <Router history = {browserHistory}>
    <Route path="/" component= {MainContainer}>
      <IndexRoute component={SurveyResultsContainer}/>
      <Route path= "/:name" component={SurveyDetailContainer}/>
    </Route>
  </Router>
);
