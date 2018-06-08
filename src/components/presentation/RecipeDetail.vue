<template lang="html">
  <div class="listWrapper">
    <div>{{ item.title }}</div>
    <div>{{ item.text }}</div>
    <div>{{ categoryPath }}</div>
    <button @click="handleEdit">Edit recipe</button>
    <button @click="handleDelete">Delete recipe</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RecipeDetail',
  created() {
    this.getRecipePath(this.$route.params.id);
  },
  props: {
    handleEdit: {
      type: Function,
      required: true,
    },
    handleDelete: {
      type: Function,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('recipe', [
      'categoryPath'
    ]),
  },
  methods: {
    ...mapActions({
      getRecipePath: 'recipe/getPath',
    }),
  },
};
</script>

<style lang="css">
</style>
