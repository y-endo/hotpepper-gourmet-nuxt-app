<template>
  <form @submit.prevent="handleSubmit" class="search-form">
    <input ref="input" type="text" placeholder="お店検索" required />
  </form>
</template>

<script>
import { SEARCH_SHOP } from '~/constants/mutation-types';
export default {
  name: 'SearchForm',
  methods: {
    async handleSubmit() {
      const value = this.$refs.input.value.trim();

      const result = await this.$axios.$get(`/api/?params=keyword=${value}`);

      console.log(result);
      this.$store.dispatch(SEARCH_SHOP, result);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-form {
  box-sizing: border-box;
  width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 5px;
  border: solid 1px #ccc;
}
</style>
