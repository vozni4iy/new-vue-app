import { actionWrapper } from '../../lib/api';

class BasicActions {
  constructor(params) {
  this.createItem = ({ dispatch }, data) => (
    actionWrapper(
      {
        method: 'post',
        url: `${params.routePath}/create`,
        data,
        onSuccess: (response) => {
          console.log('success create: ', response);
          return dispatch('getList');
        },
      }
    )
  );

  this.updateItem = ({ dispatch, commit }, data) => (
    actionWrapper(
      {
        method: 'put',
        url: `${params.routePath}/update`,
        data,
        onSuccess: (response) => {
          console.log('success update: ', response);
          commit({
            type: params.loadItem,
            item: response.data,
          });
          return dispatch('getList');
        },
      }
    )
  );

  this.deleteItem = ({ dispatch, commit }, itemId) => (
    actionWrapper(
      {
        method: 'delete',
        url: `${params.routePath}/${itemId}`,
        onSuccess: (response) => {
          console.log('success delete: ', response);
          commit({
            type: params.loadItem,
            item: null,
          });
          return dispatch('getList');
        },
      }
    )
  );

  this.getItem = ({ commit }, itemId) => (
    actionWrapper(
      {
        method: 'get',
        url: `${params.routePath}/item/${itemId}`,
        onSuccess: response => (
          commit({
            type: params.loadItem,
            item: response.data,
          })
        ),
      }
    )
  );

  this.getItemByCategory = ({ commit }, categoryId) => (
    actionWrapper(
      {
        method: 'get',
        url: `${params.routePath}/byCategory/${categoryId}`,
        onSuccess: (response) => {
          console.log('success get by category: ', response);
          commit({
            type: params.loadList,
            list: response.data,
          });
        },
      }
    )
  );

  this.getList = ({ commit }) => (
    actionWrapper(
      {
        method: 'get',
        url: `${params.routePath}/all`,
        onSuccess: response => (
          commit({
            type: params.loadList,
            list: response.data,
          })
        ),
      }
    )
  );

  this.getPath = ({ commit }, itemId) => (
    actionWrapper(
      {
        method: 'get',
        url: `${params.routePath}/categoryList/${itemId}`,
        onSuccess: response => (
          commit({
            type: params.loadPath,
            path: response.data,
          })
        ),
      }
    )
  );
  }
}

export default BasicActions;
