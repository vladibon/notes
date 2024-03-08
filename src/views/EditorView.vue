<script>
import { useNoteStore } from '@/stores/notes';

export default {
  data() {
    return {
      noteStore: useNoteStore(),
      note: null,
    };
  },

  mounted() {
    this.note = this.noteStore.getNoteById(this.$route.query.id);
  },
};
</script>

<template>
  <main>
    {{ note?.title }}
    {{ note?.content }}
    {{ note?.createdAt }}
    {{ note?.selected }}
  </main>
</template>
