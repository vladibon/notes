<script>
import { useNoteStore } from '@/stores/notes';

export default {
  data() {
    return {
      noteStore: useNoteStore(),
    };
  },

  computed: {
    notes() {
      return this.noteStore.getAllNotes();
    },
  },

  methods: {
    modifyNote(id) {
      this.$router.push({ path: '/editor', query: { id } });
    },

    addNewNote() {
      const newNoteId = this.noteStore.createNote();

      this.$router.push({ path: '/editor', query: { id: newNoteId } });
    },
  },
};
</script>

<template>
  <main>
    <h1>Notes List</h1>

    <button @click="addNewNote">Add New Note</button>

    <ul>
      <li
        v-for="{ id, title, content, createdAt, selected } in notes"
        :key="id"
        @click="modifyNote(id)"
      >
        {{ title }}
        {{ content }}
        {{ createdAt }}
        {{ selected }}
      </li>
    </ul>
  </main>
</template>
