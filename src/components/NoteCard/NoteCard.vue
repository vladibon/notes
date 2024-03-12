<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deleteNote() {
      this.$store.commit('deleteNote', this.note.id);
    },

    getDateString(isoDate) {
      return new Date(isoDate).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    },

    getTimeString(isoDate) {
      return new Date(isoDate).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      });
    },
  },
};
</script>

<template>
  <li class="note-card">
    <div class="delete-btn" @click="deleteNote">
      <svg width="18" height="18">
        <use href="/icons.svg#remove"></use>
      </svg>
    </div>

    <RouterLink :to="{ name: 'note', params: { id: note.id } }">
      <div class="card-detailst">
        <div class="icon-bar">
          <svg class="star-icon" width="18" height="18" :fill="note.favorite ? '#ffca28' : '#aaa'">
            <use href="/icons.svg#star"></use>
          </svg>

          <svg width="18" height="18" fill="#2196f3">
            <use :href="`/icons.svg#${note.category}`"></use>
          </svg>
        </div>

        <h3 class="title">{{ note.title }}</h3>
        <p class="content">{{ note.content }}</p>
        <div class="date">
          <p>{{ getDateString(note.updatedAt) }}</p>
          <p>{{ getTimeString(note.updatedAt) }}</p>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<style scoped src="./NoteCard.css"></style>
