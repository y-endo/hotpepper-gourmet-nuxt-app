<template>
  <div class="container">
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/Header';
import AppFooter from '~/components/Footer';

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
