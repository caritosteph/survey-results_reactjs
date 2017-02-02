import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import MainContainer from './containers/MainContainer';
import SurveyContainer from './containers/SurveyContainer';
import SurveyDetail from './components/SurveyDetail';

export default (
  <Router history = {browserHistory}>
    <Route path="/" component= {MainContainer}>
      <IndexRoute component = {SurveyContainer} />
      <Route path= "/survey/:id" component={SurveyDetail}/>
    </Route>
  </Router>
);
