import Vue from 'vue';
import Router from 'vue-router';

import CategoryList from '../components/pages/CategoryList';
import ArticleList from '../components/pages/ArticleList';
import RecipeList from '../components/pages/RecipeList';
import Article from '../components/pages/Article';
import Recipe from '../components/pages/Recipe';
import Category from '../components/pages/Category';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CategoryList',
      component: CategoryList,
    },
    {
      path: '/articles',
      name: 'ArticleList',
      component: ArticleList,
    },
    {
      path: '/recipies',
      name: 'RecipeList',
      component: RecipeList,
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article,
    },
    {
      path: '/recipe/:id',
      name: 'Recipe',
      component: Recipe,
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
    },
  ],
});
