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
  },
};
</script>

<template>
  <main class="container">
    <CategorySelect :selectedCategory="note.category" @update:category="updateCategory" />

    <div @change="updateNote">
      <input v-model="note.title" class="text-field" type="text" placeholder="Title" />
      <textarea v-model="note.content" class="text-field note" type="text" placeholder="Note" />
    </div>
  </main>
</template>

<style scoped src="./NoteDetails.css"></style>
