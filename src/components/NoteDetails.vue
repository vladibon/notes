<script>
import CategorySelect from './CategorySelect.vue';

export default {
  components: {
    CategorySelect,
  },

  computed: {
    note() {
      return this.$store.getters.getNoteById(this.$route.params.id);
    },
  },

  methods: {
    updateNote() {
      this.$store.dispatch('editNote', this.note);
    },

    updateCategory(category) {
      this.note.category = category;
      this.updateNote();
    },

    toggleFavorite() {
      this.note.favorite = !this.note.favorite;
      this.updateNote();
    },
  },
};
</script>

<template>
  <div class="container full-height">
    <div class="toolbar">
      <CategorySelect :selectedCategory="note.category" @update:category="updateCategory" />

      <div class="favorite-icon" @click="toggleFavorite">
        <svg width="22" height="22" :fill="note.favorite ? '#ffca28' : '#ddd'">
          <use href="/src/images/icons.svg#star"></use>
        </svg>

        <span class="lable" :style="`color: ${note.favorite ? '#ffca28' : '#ddd'}`">favorite</span>
      </div>
    </div>

    <div class="note-content" @change="updateNote">
      <input v-model="note.title" class="text-field" type="text" placeholder="Title" />
      <textarea v-model="note.content" class="text-field textarea" type="text" placeholder="Note" />
    </div>
  </div>
</template>

<style scoped src="./NoteDetails.css"></style>
