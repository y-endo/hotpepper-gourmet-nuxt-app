const fetch = require('node-fetch');
const express = require('express');
const app = express();

app.get('/', async (_, res) => {
  const params = {
    key: '0477078fd6a145a3',
    large_area: 'Z011',
    format: 'json'
  };
  let paramsToString = '';
  for (const key in params) {
    paramsToString += `${key}=${params[key]}&`;
  }
  paramsToString = paramsToString.slice(0, -1);
  const searchResult = await fetch(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${paramsToString}`);
  const json = await searchResult.json();
  res.json(json.results);
});

module.exports = {
  path: '/api',
  handler: app
};
