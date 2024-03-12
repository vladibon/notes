<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },

  computed: {
    dateString() {
      return new Date(this.note.updatedAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    },

    timeString() {
      return new Date(this.note.updatedAt).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      });
    },
  },

  methods: {
    toggleFavorite() {
      this.$store.commit('updateNote', { ...this.note, favorite: !this.note.favorite });
    },

    deleteNote() {
      this.$store.commit('deleteNote', this.note.id);
    },
  },
};
</script>

<template>
  <li class="note-card">
    <div class="card-controls">
      <div class="favorite-icon" @click="toggleFavorite">
        <svg
          width="18"
          height="18"
          :fill="$getCSSVariable(note.favorite ? '--secondary-accent-color' : '--icon-color')"
        >
          <use href="/icons.svg#star"></use>
        </svg>
      </div>

      <div class="delete-icon" @click="deleteNote">
        <svg width="18" height="18">
          <use href="/icons.svg#remove"></use>
        </svg>
      </div>
    </div>

    <RouterLink :to="{ name: 'note', params: { id: note.id } }">
      <div class="card-detailst">
        <div class="icon-bar">
          <svg width="18" height="18" :fill="$getCSSVariable('--primary-accent-color')">
            <use :href="`/icons.svg#${note.category}`"></use>
          </svg>
        </div>

        <h3 class="title">{{ note.title }}</h3>
        <p class="content">{{ note.content }}</p>
        <div class="date">
          <span>{{ dateString }}</span>
          <span>{{ timeString }}</span>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<style scoped src="./NoteCard.css"></style>
