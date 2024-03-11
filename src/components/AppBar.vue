<script>
export default {
  methods: {
    async createNoteAndNavigateToNotePage() {
      const { id } = await this.$store.dispatch('createNote');
      this.$router.push({ name: 'note', params: { id } });
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="nav container">
      <RouterLink v-show="$route.path !== '/'" to="/">
        <svg width="28" height="28" fill="#2196f3">
          <use href="/src/images/icons.svg#arrow-left"></use>
        </svg>
      </RouterLink>

      <div class="add-btn" @click="createNoteAndNavigateToNotePage">
        <svg width="28" height="28" fill="#2196f3">
          <use href="/src/images/icons.svg#plus"></use>
        </svg>
      </div>
    </div>
  </header>
</template>

<style scoped src="./AppBar.css"></style>
