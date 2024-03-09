<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },

  methods: {
    navigateToNotePage(id) {
      this.$router.push({ path: '/note', query: { id } });
    },
  },
};
</script>

<template>
  <li class="note-card" @click="navigateToNotePage(id)">
    {{ note.title }}
    {{ note.content }}
    {{ note.createdAt }}
    {{ note.favorite }}
  </li>
</template>

<style src="./NoteCard.css"></style>
