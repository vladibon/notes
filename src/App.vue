<script>
import { RouterView } from 'vue-router';
import AppBar from '@/components/AppBar';

export default {
  components: {
    AppBar,
    RouterView,
  },
};
</script>

<template>
  <AppBar />
  <main class="main">
    <RouterView />
  </main>
</template>

<style src="@/assets/main.css"></style>
