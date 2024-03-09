<script>
export default {
  data() {
    return {
      notes: this.$store.state.notes,
    };
  },

  methods: {
    async createNewNote() {
      const newNoteId = await this.$store.dispatch('createNote');

      this.redirectToNoteView(newNoteId);
    },

    redirectToNoteView(id) {
      this.$router.push({ path: '/note', query: { id } });
    },
  },
};
</script>

<template>
  <main>
    <h1>Notes List</h1>

    <button @click="createNewNote">Add New Note</button>

    <ul>
      <li
        v-for="{ id, title, content, createdAt, selected } in notes"
        :key="id"
        @click="this.redirectToNoteView(id)"
      >
        {{ title }}
        {{ content }}
        {{ createdAt }}
        {{ selected }}
      </li>
    </ul>
  </main>
</template>
