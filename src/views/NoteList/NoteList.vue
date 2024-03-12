<script>
import NoteCard from '@/components/NoteCard';
import BackdropIcon from '@/components/BackdropIcon';

export default {
  components: {
    NoteCard,
    BackdropIcon,
  },

  computed: {
    notes() {
      return this.$store.getters.getFilteredNotes;
    },
  },
};
</script>

<template>
  <div class="container">
    <ul class="note-list">
      <NoteCard v-for="note in notes" :key="note.id" :note="note" />
    </ul>

    <BackdropIcon v-if="!notes.length" />
  </div>
</template>

<style scoped src="./NoteList.css"></style>
