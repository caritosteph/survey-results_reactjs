/* eslint-disable import/default */

"use strict";

import {render} from 'react-dom';
import routes from './routes';
import './assets/styles/main.scss';
import "../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min";
require('./favicon.ico');

const rootEl = document.getElementById('app');

render(routes,rootEl);
