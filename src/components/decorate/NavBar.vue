<template lang="html">
  <div class="'button-wrapper'">
    <button v-if="article" @click="navTo('ArticleList')">Go to articles</button>
    <button v-if="category" @click="navTo('CategoryList')">Go to categories</button>
    <button v-if="recipe" @click="navTo('RecipeList')">Go to recipies</button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    article: Boolean,
    category: Boolean,
    recipe: Boolean,
  },
  methods: {
    navTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="css">
</style>
