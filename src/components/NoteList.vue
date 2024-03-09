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
    navigateToNotePage(id) {
      this.$router.push({ path: '/note', query: { id } });
    },
  },
};
</script>

<template>
  <div class="container">
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
