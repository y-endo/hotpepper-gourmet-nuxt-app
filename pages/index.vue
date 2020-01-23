<template>
  <div class="page"></div>
</template>

<script>
import { API_KEY } from '~/constants';

export default {
  async asyncData(context) {
    console.log('Server Side: ', process.server);
    console.log('Client Side: ', process.client);
    if (process.client) return;

    const params = {
      key: API_KEY,
      large_area: 'Z011',
      format: 'json'
    };
    let paramsToString = '';
    for (const key in params) {
      paramsToString += `${key}=${params[key]}&`;
    }
    paramsToString = paramsToString.slice(0, -1);
    const response = await context.$axios.get(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${paramsToString}`);
    console.log(response);
  }
};
</script>
