<script>
import NoteCard from '@/components/NoteCard.vue';

export default {
  components: {
    NoteCard,
  },

  data() {
    return {
      notes: this.$store.state.notes,
    };
  },

  methods: {
    async createNoteAndRedirect() {
      const newNoteId = await this.$store.dispatch('createNote');

      this.navigateToNotePage(newNoteId);
    },

    navigateToNotePage(id) {
      this.$router.push({ path: '/note', query: { id } });
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>Notes List</h1>

    <button @click="createNoteAndRedirect">Add New Note</button>

    <ul class="note-list">
      <NoteCard
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @click="navigateToNotePage(note.id)"
      />
    </ul>
  </div>
</template>

<style scoped src="./NoteList.css"></style>
