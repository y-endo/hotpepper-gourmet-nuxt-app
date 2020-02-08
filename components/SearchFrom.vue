<template>
  <form @submit.prevent="handleSubmit" class="search-form">
    <div class="search-form__inner">
      <input ref="input" type="text" placeholder="お店検索" required class="search-form__input" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  methods: {
    handleSubmit() {
      const value = this.$refs.input.value.trim();

      this.$router.push({ path: `/search/${value}` });
    }
  }
};
</script>

<style lang="scss" scoped>
.search-form {
  padding: 40px 20px;

  &__inner {
    box-sizing: border-box;
    width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    font-size: 1.8rem;
    border: solid 1px #ccc;
  }
}
</style>
