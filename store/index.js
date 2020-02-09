import * as mutationType from './mutation-types';

export const state = () => ({
  searchOption: {
    count: 10
  },
  searchResult: {},
  searchText: '定番のおすすめ'
});

export const mutations = {
  [mutationType.SEARCH_SHOP](state, payload) {
    state.searchResult = payload.data;
    if (payload.searchText) state.searchText = payload.searchText;
  }
};

export const actions = {
  [mutationType.SEARCH_SHOP]({ commit }, payload) {
    commit(mutationType.SEARCH_SHOP, payload);
  }
};
