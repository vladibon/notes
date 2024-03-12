<script>
import { nextTick } from 'vue';
import CategorySelect from '@/components/CategorySelect';

export default {
  components: {
    CategorySelect,
  },

  computed: {
    note() {
      nextTick(() => this.$refs.textarea.focus());
      return this.$store.getters.getNoteById(this.$route.params.id);
    },

    favoriteIconColor() {
      return this.$getCSSVariable(this.note.favorite ? '--secondary-accent-color' : '--icon-color');
    },
  },

  methods: {
    toggleFavorite() {
      this.note.favorite = !this.note.favorite;
      this.$store.commit('updateNote', this.note);
    },

    updateCategory(category) {
      this.note.category = category;
      this.$store.commit('updateNote', this.note);
    },

    updateNote() {
      this.$store.dispatch('editNote', this.note);
    },
  },
};
</script>

<template>
  <div class="container section">
    <div class="toolbar">
      <div class="favorite-icon" @click="toggleFavorite">
        <svg width="22" height="22" :fill="favoriteIconColor">
          <use href="/icons.svg#star"></use>
        </svg>

        <span class="favorite-lable" :style="`color: ${favoriteIconColor}`">favorite</span>
      </div>

      <CategorySelect :selectedCategory="note.category" @update:category="updateCategory" />
    </div>

    <div class="note-details" @change="updateNote">
      <input v-model="note.title" class="text-field" type="text" placeholder="Title" />
      <textarea
        v-model="note.content"
        ref="textarea"
        class="text-field textarea"
        type="text"
        placeholder="Note"
      />
    </div>
  </div>
</template>

<style scoped src="./NoteDetails.css"></style>
