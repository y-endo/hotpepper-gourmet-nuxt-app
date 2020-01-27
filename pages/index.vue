<template>
  <div class="page">
    <search-form />
    <shop-list />
  </div>
</template>

<script>
import SearchForm from '~/components/SearchFrom';
import ShopList from '~/components/ShopList';
import * as mutation from '~/constants/mutation-types';

export default {
  components: {
    SearchForm,
    ShopList
  },
  async asyncData(context) {
    console.log('Server Side: ', process.server);
    console.log('Client Side: ', process.client);
    if (process.client) return;

    const { data } = await context.$axios.get(`/api/?params=large_area=Z011`);

    await context.store.dispatch(mutation.SEARCH_SHOP, data);
  },
  created() {}
};
</script>
