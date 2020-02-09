<template>
  <ul>
    <li v-for="(item, index) in list" :key="`${item}_${index}`" :class="{ current: item === searchResult.results_start }">
      <nuxt-link :to="`?page=${item}`" v-if="item !== '...'">{{ item }}</nuxt-link>
      <span v-else>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SearchPagination',
  data() {
    return {
      range: 5
    };
  },
  computed: {
    ...mapState(['searchResult', 'searchOption']),
    list() {
      const { count } = this.searchOption;
      const current = this.searchResult.results_start;
      const last = this.searchResult.results_available - count + 1;

      const pageList = [];
      let start = current - this.range;
      let end = current + this.range;
      if (start <= 0) {
        start = 1;
        end = start + this.range * 2;
      }
      if (end > last) {
        end = last;
        start = end - this.range * 2;
      }
      for (let i = start; i <= end; i++) {
        pageList.push(i);
      }
      if (start > 1) pageList.unshift(1, '...');
      if (end < last) pageList.push('...', last);
      return pageList;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  margin: 30px auto 0;
  list-style: none;
}

li {
  margin: 0 10px;

  &.current {
    border-bottom: solid 1px #333;
  }
}
</style>
