import BasicActions from './BasicActions';
import BasicMutations from './BasicMutations';
import basicState from './BasicState';
import basicGetters from './BasicGetters';

/*
basicModule params:
constants: {
  routePath - path to route on server,
  loadList - list upload type,
  loadItem - item upload type,
  loadPath - path upload type,
  ... - any other general upload types
}
actions: {
  ... - any custom actions which are unique for specific module
}
mutations: {
  ... - any custom mutations which are unique for specific module
}
state: {
  ... - custom state for specific module
}
getters: {
  ... - any custom getters which are unique for specific module
}
*/

const basicModule = (params) => {
  const basicActions = new BasicActions(params.constants);
  const actions = Object.assign({}, basicActions, params.actions || {});
  const basicMutations = new BasicMutations(params.constants);
  const mutations = Object.assign({}, basicMutations, params.mutations || {});
  const state = Object.assign({}, basicState, params.state || {});
  const getters = Object.assign({}, basicGetters, params.getters || {});
  return {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
  };
};

export default basicModule;
