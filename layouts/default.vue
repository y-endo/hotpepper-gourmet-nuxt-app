<template>
  <div class="container">
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
import AppFooter from '~/components/AppFooter';

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
