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
        <use href="/icons.svg#remove"></use>
      </svg>
    </div>

    <RouterLink :to="{ name: 'note', params: { id: note.id } }">
      <div class="card-detailst">
        <div class="icon-bar">
          <svg
            class="favorite-icon"
            width="18"
            height="18"
            :fill="$getCSSVariable(note.favorite ? '--secondary-accent-color' : '--icon-color')"
          >
            <use href="/icons.svg#star"></use>
          </svg>

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
