<script>
export default {
  data() {
    return {
      note: this.$store.getters.getNoteById(this.$route.query.id),
    };
  },

  methods: {
    updateNote() {
      this.$store.dispatch('updateNote', this.note);
    },
  },
};
</script>

<template>
  <main>
    <button @click="updateNote">Update Note</button>

    {{ note?.title }}
    {{ note?.content }}
    {{ note?.updatedAt }}
    {{ note?.favorite }}
  </main>
</template>
