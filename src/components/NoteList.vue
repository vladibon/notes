<script>
import NoteCard from '@/components/NoteCard.vue';

export default {
  components: {
    NoteCard,
  },

  data() {
    return {
      notes: this.$store.state.notes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
    };
  },
};
</script>

<template>
  <main class="container">
    <ul class="note-list">
      <NoteCard v-for="note in notes" :key="note.id" :note="note" />
    </ul>
  </main>
</template>

<style scoped src="./NoteList.css"></style>
