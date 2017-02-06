/* eslint-disable no-console */
/* eslint-disable import/default */

'use strict';

import express from 'express';
import Utils from './Utils';
import config from './config';

const app =  express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/survey_results', (req, res) => {
  Utils.readJSONFile(res, config.resultsPath);
});

app.get('/survey_results/:id', (req, res) => {
  let id = req.params.id;
  Utils.readJSONFile(res, config.detailPath + '/' + id);
});

app.listen(config.port, () => {
  console.log("Server listening at port ", config.port);
});
