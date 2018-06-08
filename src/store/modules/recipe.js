import {
  LOAD_RECIPE_ITEM,
  LOAD_RECIPE_LIST,
  LOAD_RECIPE_PATH,
} from '../types';

import basicModule from '../structure/BasicModule';

const routePath = '/v1/recipe';

const recipe = basicModule({
  constants: {
    routePath,
    loadItem: LOAD_RECIPE_ITEM,
    loadPath: LOAD_RECIPE_PATH,
    loadList: LOAD_RECIPE_LIST,
  },
});

export const moduleName = 'recipe';

export default recipe;
