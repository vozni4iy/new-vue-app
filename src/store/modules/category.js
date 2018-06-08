import {
  LOAD_CATEGORY_ITEM,
  LOAD_CATEGORY_LIST,
  LOAD_CATEGORY_PATH,
} from '../types';

import basicModule from '../structure/BasicModule';

const routePath = '/v1/category';

const createTreeFromArray = (list) => {
  const map = {};
  let node = [];
  const roots = [];
  let i;
  const arr = list;
  for (i = 0; i < arr.length; i++) {
      map[arr[i]._id] = i; // initialize the map
      arr[i].children = []; // initialize the children
  }
  for (i = 0; i < arr.length; i += 1) {
      node = arr[i];
      if (node.parentId !== null) {
          // if you have dangling branches check that map[node.parentId] exists
          arr[map[node.parentId]].children.push(node);
      } else {
          roots.push(node);
      }
  }
  return roots;
};

const createCategoryList = (list) => {
  const categoryList = [...list];
  categoryList.unshift({
    title: 'no parent',
    _id: null,
  });
  return categoryList;
};

const category = basicModule({
  constants: {
    routePath,
    loadItem: LOAD_CATEGORY_ITEM,
    loadPath: LOAD_CATEGORY_PATH,
    loadList: LOAD_CATEGORY_LIST,
  },
  getters: {
    tree: state => createTreeFromArray(state.list),
    categoryList: state => createCategoryList(state.list),
  },
});

export const moduleName = 'category';

export default category;
