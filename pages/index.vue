<template>
  <div class="page">
    <search-form />
    <p>{{ textSearch }}</p>
    <shop-list />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SearchForm from '~/components/SearchFrom';
import ShopList from '~/components/ShopList';
import { SEARCH_SHOP } from '~/store/mutation-types';

export default {
  components: {
    SearchForm,
    ShopList
  },
  computed: {
    ...mapState(['textSearch'])
  },
  async asyncData(context) {
    console.log('Server Side: ', process.server);
    console.log('Client Side: ', process.client);
    if (process.client) return;

    const { data } = await context.$axios.get(`/api/?params=special=LT0090`);

    await context.store.dispatch(SEARCH_SHOP, { resultSearch: data });
  },
  created() {}
};
</script>

<style lang="scss" scoped>
p {
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto 20px;
  padding: 0 20px;
  font-weight: bold;
  font-size: 1.8rem;
}
</style>
