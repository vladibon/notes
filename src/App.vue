<script>
import { RouterView } from 'vue-router';
import AppBar from '@/components/AppBar.vue';

export default {
  components: {
    AppBar,
    RouterView,
  },
};
</script>

<template>
  <AppBar />
  <RouterView />
</template>

<style src="@/assets/main.css"></style>
