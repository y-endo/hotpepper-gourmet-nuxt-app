<template>
  <div class="page">
    <search-form />
    <p>{{ textSearch }}</p>
    <shop-list />
    <search-pagination />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SearchForm from '~/components/SearchFrom';
import ShopList from '~/components/ShopList';
import SearchPagination from '~/components/SearchPagination';
import { SEARCH_SHOP } from '~/store/mutation-types';

export default {
  components: {
    SearchForm,
    ShopList,
    SearchPagination
  },
  computed: {
    ...mapState(['textSearch'])
  },
  async asyncData(context) {
    console.log('[/search/_keyword.vue] Server Side: ', process.server);
    console.log('[/search/_keyword.vue] Client Side: ', process.client);

    const keyword = encodeURIComponent(context.params.keyword);

    if (keyword && keyword !== '') {
      const resultSearch = await context.$axios.$get(`/api/?params=keyword=${keyword}&count=${context.store.state.searchOption.count}`);

      context.store.dispatch(SEARCH_SHOP, { resultSearch, textSearch: `${context.params.keyword}の検索結果` });
    }
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
