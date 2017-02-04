/* eslint-disable import/default */

"use strict";

import {render} from 'react-dom';
import routes from './routes';
import './assets/styles/main.scss';
require('./favicon.ico');
import "../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min";


const rootEl = document.getElementById('app');

render(routes,rootEl);
