import * as mutationType from './mutation-types';

export const state = () => ({
  searchOption: {
    count: 10
  },
  searchResult: {},
  textSearch: '定番のおすすめ'
});

export const mutations = {
  [mutationType.SEARCH_SHOP](state, payload) {
    state.searchResult = payload.resultSearch;
    if (payload.textSearch) state.textSearch = payload.textSearch;
  }
};

export const actions = {
  [mutationType.SEARCH_SHOP]({ commit }, payload) {
    commit(mutationType.SEARCH_SHOP, payload);
  }
};
