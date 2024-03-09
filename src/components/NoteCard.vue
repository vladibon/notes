<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatDate(isoTime) {
      return new Date(isoTime).toLocaleTimeString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    },
  },
};
</script>

<template>
  <li class="note-card">
    <h3 class="title">{{ note.title }}</h3>
    <p class="content">{{ note.content }}</p>
    <p class="category">{{ note.category }}</p>
    <p class="date">{{ formatDate(note.createdAt) }}</p>
  </li>
</template>

<style scoped src="./NoteCard.css"></style>
