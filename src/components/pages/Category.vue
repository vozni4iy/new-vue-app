<template lang="html">
  <div>
    <div>{{ categoryPath }}</div>
    <SubList
      :header="'List of articles'"
      :options="articleList"
    />
    <SubList
      :header="'List of recipies'"
      :options="recipeList"
    />
    <button @click="navToCategoryList">Return to category list</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import SubList from '../decorate/SubList';

export default {
  name: 'Category',
  created() {
    const id = this.$route.params.id;
    this.getArticleByCategory(id);
    this.getRecipeByCategory(id);
    this.getCategoryPath(id);
  },
  components: {
    SubList,
  },
  computed: {
    ...mapGetters('category', [
      'categoryPath'
    ]),
    ...mapState({
      articleList: state => state.article.list,
      recipeList: state => state.recipe.list,
    }),
  },
  methods: {
    navToCategoryList() {
      this.$router.push({ name: 'CategoryList' });
    },
    ...mapActions({
      getArticleByCategory: 'article/getItemByCategory',
      getRecipeByCategory: 'recipe/getItemByCategory',
      getCategoryPath: 'category/getPath',
    }),
  }
};
</script>

<style lang="css">
</style>
