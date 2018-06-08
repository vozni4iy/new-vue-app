import Vue from 'vue';
import Vuex from 'vuex';

import category from './modules/category';
import article from './modules/article';
import recipe from './modules/recipe';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    category,
    article,
    recipe,
  },
});

export default store;
