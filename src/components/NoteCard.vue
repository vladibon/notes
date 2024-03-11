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

    deleteNote() {
      this.$store.commit('deleteNote', this.note.id);
    },
  },
};
</script>

<template>
  <li class="note-card">
    <div class="delete-btn" @click="deleteNote">
      <svg width="18" height="18">
        <use href="/src/images/icons.svg#remove"></use>
      </svg>
    </div>

    <RouterLink :to="{ name: 'note', params: { id: note.id } }">
      <div class="card-content">
        <div class="icons-wrapper">
          <svg class="star-icon" width="18" height="18" :fill="note.favorite ? '#ffca28' : '#aaa'">
            <use href="/src/images/icons.svg#star"></use>
          </svg>

          <svg width="18" height="18" fill="#2196f3">
            <use :href="`/src/images/icons.svg#${note.category}`"></use>
          </svg>
        </div>

        <h3 class="title">{{ note.title }}</h3>
        <p class="content">{{ note.content }}</p>
        <p class="date">{{ formatDate(note.updatedAt) }}</p>
      </div>
    </RouterLink>
  </li>
</template>

<style scoped src="./NoteCard.css"></style>
