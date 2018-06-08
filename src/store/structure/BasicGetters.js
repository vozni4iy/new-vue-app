const createCategoryPath = (path) => {
  let strPath = '';
  path.forEach((category) => {
    strPath = strPath + '/' + category.title;
  });
  return strPath;
};

const basicGetters = {
  categoryPath: state => createCategoryPath(state.path),
};

export default basicGetters;
