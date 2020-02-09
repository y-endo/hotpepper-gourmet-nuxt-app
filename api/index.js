const fetch = require('node-fetch');
const express = require('express');
const API_KEY = require('../constants/key').default;
const app = express();

app.get('/', async (req, res) => {
  let params = `key=${API_KEY}&format=json`;
  const query = req.query;

  for (const key in query) {
    params += `&${key}=${query[key]}`;
  }

  console.log('RequestQuery: ', query);

  const searchResult = await fetch(encodeURI(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${params}`));
  const json = await searchResult.json();
  res.json(json.results);
});

module.exports = {
  path: '/api',
  handler: app
};
