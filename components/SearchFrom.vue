<template>
  <form @submit.prevent="handleSubmit" class="search-form">
    <input ref="input" type="text" placeholder="お店検索" required class="search-form__input" />
  </form>
</template>

<script>
import { SEARCH_SHOP } from '~/store/mutation-types';
export default {
  name: 'SearchForm',
  methods: {
    async handleSubmit() {
      const value = this.$refs.input.value.trim();

      const resultSearch = await this.$axios.$get(`/api/?params=keyword=${value}`);
      console.log(resultSearch);

      this.$store.dispatch(SEARCH_SHOP, { resultSearch, textSearch: `${value}の検索結果` });
    }
  }
};
</script>

<style lang="scss" scoped>
.search-form {
  box-sizing: border-box;
  width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  &__input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 5px;
    font-size: 1.8rem;
    border: solid 1px #ccc;
  }
}
</style>
