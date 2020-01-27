const fetch = require('node-fetch');
const express = require('express');
const API_KEY = require('../constants/key').default;
const app = express();

app.get('/', async (req, res) => {
  const params = {
    key: API_KEY,
    format: 'json'
  };
  const query = req.query.params;

  console.log('RequestQuery: ', query);

  // GETのパラメータをparamsにマージ
  if (query && query !== null) {
    const queryParams = query.split(',');

    queryParams.forEach(param => {
      const [key, value] = param.split('=');

      if (key !== '' && value !== '') {
        params[key] = value;
      }
    });
  }

  let paramsToString = '';
  for (const key in params) {
    paramsToString += `${key}=${params[key]}&`;
  }
  paramsToString = paramsToString.slice(0, -1);

  const searchResult = await fetch(encodeURI(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${paramsToString}`));
  const json = await searchResult.json();
  res.json(json.results);
});

module.exports = {
  path: '/api',
  handler: app
};
