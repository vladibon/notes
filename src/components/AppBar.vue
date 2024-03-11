<script>
export default {
  computed: {
    favoritesFilter: {
      get() {
        return this.$store.state.favoritesFilter;
      },
      set(newValue) {
        this.$store.state.favoritesFilter = newValue;
      },
    },
  },

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
    <div class="controls container">
      <RouterLink v-show="$route.path !== '/'" to="/" class="list-page-link">
        <svg width="28" height="28" fill="#2196f3">
          <use href="/icons.svg#arrow-left"></use>
        </svg>
      </RouterLink>

      <!-- Filers -->
      <div v-show="$route.path === '/'" class="filter">
        <div class="favorite-icon" @click="this.favoritesFilter = !this.favoritesFilter">
          <svg width="22" height="22" :fill="favoritesFilter ? '#ffca28' : '#aaa'">
            <use href="/icons.svg#star"></use>
          </svg>
        </div>
      </div>

      <div class="add-btn" @click="createNoteAndNavigateToNotePage">
        <svg class="add-btn__icon" width="28" height="28" fill="#2196f3">
          <use href="/icons.svg#plus"></use>
        </svg>
      </div>
    </div>
  </header>
</template>

<style scoped src="./AppBar.css"></style>
