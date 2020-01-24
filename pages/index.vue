<template>
  <div class="page">
    <shop-list />
  </div>
</template>

<script>
// import { requestGourmetSearch } from '~/utils/requestGourmetSearch';
import ShopList from '~/components/ShopList';
import API_KEY from '~/constants/key';
import * as mutation from '~/constants/mutation-types';

export default {
  components: {
    ShopList
  },
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
    const { data } = await context.$axios.get(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${paramsToString}`);

    await context.store.dispatch(mutation.SEARCH_SHOP, data.results);
  },
  created() {}
};
</script>
