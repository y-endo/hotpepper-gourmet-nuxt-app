<template>
  <div class="page">
    <search-form />
    <p>{{ searchText }}</p>
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
    ...mapState(['searchText'])
  },
  async asyncData(context) {
    console.log('[/index.vue] Server Side: ', process.server);
    console.log('[/index.vue] Client Side: ', process.client);

    const { data } = await context.$axios.get(`/api/?params=special=LT0090&count=${context.store.state.searchOption.count}`);

    await context.store.dispatch(SEARCH_SHOP, { data });
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
