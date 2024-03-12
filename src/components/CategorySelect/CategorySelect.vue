<script>
export default {
  props: {
    selectedCategory: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      availableCategories: this.$store.state.availableCategories,
    };
  },

  methods: {
    updateCategory(event) {
      this.$emit('update:category', event.currentTarget.id);
    },
  },
};
</script>

<template>
  <ul class="category-list">
    <li
      v-for="category in availableCategories"
      :key="category"
      :id="category"
      class="category-item"
      @click="updateCategory"
    >
      <svg width="22" height="22" :fill="category === selectedCategory ? '#2196f3' : '#aaa'">
        <use :href="`/icons.svg#${category}`"></use>
      </svg>

      <span
        class="category-lable"
        :style="`color: ${category === selectedCategory ? '#2196f3' : '#aaa'}`"
      >
        {{ category }}
      </span>
    </li>
  </ul>
</template>

<style scoped src="./CategorySelect.css"></style>
