<template>
  <ul>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SearchPagination',
  computed: {
    ...mapState(['searchResult', 'searchOption']),
    list() {
      // const current = this.searchResult.results_start;
      const { count } = this.searchOption;
      // const returned = this.searchResult.results_returned;
      const resultAvailable = this.searchResult.results_available;

      const pageList = [];
      for (let i = 1, l = Math.ceil(resultAvailable / count); i <= l; i = (i + 1) | 0) {
        pageList.push(i);
      }
      return pageList;
    }
  }
};
</script>
