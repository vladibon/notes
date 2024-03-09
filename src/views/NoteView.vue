<script>
export default {
  data() {
    return {
      note: this.$store.getters.getNoteById(this.$route.query.id),
    };
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
