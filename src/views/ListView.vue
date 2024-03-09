<script>
export default {
  data() {
    return {
      notes: this.$store.getters.getAllNotes,
    };
  },

  methods: {
    modifyNote(id) {
      this.$router.push({ path: '/editor', query: { id } });
    },

    async addNewNote() {
      const newNoteId = await this.$store.dispatch('createNewNote');

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
