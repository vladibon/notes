<script>
import CategorySelect from '@/components/CategorySelect';

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
    toggleFavorite() {
      this.note.favorite = !this.note.favorite;
      this.updateNote();
    },

    updateCategory(category) {
      this.note.category = category;
      this.updateNote();
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
        <svg width="22" height="22" :fill="note.favorite ? '#ffca28' : '#aaa'">
          <use href="/icons.svg#star"></use>
        </svg>

        <span class="favorite-lable" :style="`color: ${note.favorite ? '#ffca28' : '#aaa'}`">
          favorite
        </span>
      </div>

      <CategorySelect :selectedCategory="note.category" @update:category="updateCategory" />
    </div>

    <div class="note-details" @change="updateNote">
      <input v-model="note.title" class="text-field" type="text" placeholder="Title" />
      <textarea v-model="note.content" class="text-field textarea" type="text" placeholder="Note" />
    </div>
  </div>
</template>

<style scoped src="./NoteDetails.css"></style>
