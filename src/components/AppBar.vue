<script>
import goBackIcon from '@/assets/go-back-icon.svg';
import addIcon from '@/assets/add-icon.svg';

export default {
  data() {
    return {
      goBackIcon,
      addIcon,
    };
  },

  methods: {
    async createNoteAndNavigateToNotePage() {
      const id = await this.$store.dispatch('createNote');

      this.$router.push({ path: '/note', query: { id } });
    },

    navigateToListPage() {
      this.$router.push('/');
    },
  },
};
</script>

<template>
  <header class="header">
    <nav class="nav container">
      <button class="add-note-button" @click="navigateToListPage">
        <img :src="goBackIcon" alt="go back" width="28" height="28" />
      </button>

      <button class="add-note-button" @click="createNoteAndNavigateToNotePage">
        <img :src="addIcon" alt="add note" width="28" height="28" />
      </button>
    </nav>
  </header>
</template>

<style scoped src="./AppBar.css"></style>
