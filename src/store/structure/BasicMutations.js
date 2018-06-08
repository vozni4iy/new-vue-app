class BasicMutations {
  constructor(params) {
    const { loadItem, loadPath, loadList } = params;
    this[loadItem] = (state, payload) => {
      state.item = payload.item;
    };

    this[loadList] = (state, payload) => {
      state.list = payload.list;
    };

    this[loadPath] = (state, payload) => {
      state.path = payload.path;
    };
  }
}

export default BasicMutations;
