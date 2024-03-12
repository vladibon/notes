<script>
import NoteCard from '@/components/NoteCard';

export default {
  components: {
    NoteCard,
  },

  computed: {
    notes() {
      return this.$store.getters.getNotes;
    },
  },
};
</script>

<template>
  <div class="container">
    <ul class="note-list">
      <NoteCard v-for="note in notes" :key="note.id" :note="note" />
    </ul>
  </div>
</template>

<style scoped src="./NoteList.css"></style>
