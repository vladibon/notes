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
    <RouterLink :to="{ name: 'note', params: { id: note.id } }">
      <div class="card-content">
        <p class="category">{{ note.category }}</p>
        <h3 class="title">{{ note.title }}</h3>
        <p class="content">{{ note.content }}</p>
        <p class="date">{{ formatDate(note.updatedAt) }}</p>
      </div>
    </RouterLink>
  </li>
</template>

<style scoped src="./NoteCard.css"></style>
