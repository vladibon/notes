<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>
  </div>

  <RouterView />
</template>

<style src="@/assets/main.css"></style>
