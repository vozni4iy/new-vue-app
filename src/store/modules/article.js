import {
  LOAD_ARTICLE_ITEM,
  LOAD_ARTICLE_LIST,
  LOAD_ARTICLE_PATH,
} from '../types';

import basicModule from '../structure/BasicModule';

const routePath = '/v1/article';

const article = basicModule({
  constants: {
    routePath,
    loadItem: LOAD_ARTICLE_ITEM,
    loadPath: LOAD_ARTICLE_PATH,
    loadList: LOAD_ARTICLE_LIST,
  },
});

export const moduleName = 'article';

export default article;
