/* eslint-disable no-console */
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
  Utils.readJSONFile(config.resultsPath)
  .then(data => {
     Utils.send_data(res, true, data);
  })
  .catch(error => {
     Utils.send_data(res, false, error);
  });
});

app.get('/survey_results/:id', (req, res) => {
  let id = req.params.id;
  Utils.readJSONFile(config.detailPath + '/' + id)
  .then(data => {
     Utils.send_data(res, true, data);
  })
  .catch(error => {
     Utils.send_data(res, false, error);
  });
});

app.listen(config.port, () => {
  console.log("Server listening at port ", config.port);
});
