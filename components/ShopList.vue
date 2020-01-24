<template>
  <div class="shop-list">
    <article v-for="item in json.shop" :key="item.id">
      <a :href="item.urls.pc" target="_blnak" rel="noopener" class="link-box">
        <div class="thumbnail"><img :src="item.photo.pc.m" alt="" class="thumbnail__image" /></div>
        <div class="detail">
          <h3 class="title">
            <span class="title__logo"><img :src="item.logo_image" :alt="item.name" class="title__logo-image"/></span>{{ item.name }}
          </h3>
          <p>住所: {{ item.address }}</p>
          <p>最寄り駅: {{ item.station_name }}</p>
          <p>お店ジャンル: {{ item.genre.name }}{{ item.genre.catch }}</p>
          <p>備考: {{ item.budget_memo }} {{ item.shop_detail_memo }}</p>
        </div>
      </a>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ShopList',
  computed: {
    ...mapState(['json'])
  },
  created() {
    this.$axios.$get('/api').then(response => {
      console.log(response);
    });
  }
};
</script>

<style lang="scss" scoped>
.shop-list {
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.link-box {
  display: flex;
  margin-top: 20px;
  padding: 10px;
  border: solid 2px #ccc;
}

.thumbnail__image {
  display: block;
}

.detail {
  margin-left: 20px;
}

.title {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1;

  &__logo {
    display: inline-flex;
    align-items: center;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border: solid 1px #eee;
  }

  &__logo-image {
    display: block;
    width: 100%;
  }
}
</style>
