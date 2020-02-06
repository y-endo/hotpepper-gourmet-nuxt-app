import * as mutationType from './mutation-types';

export const state = () => ({
  json: {},
  textSearch: '定番のおすすめ'
});

export const mutations = {
  [mutationType.SEARCH_SHOP](state, payload) {
    state.json = payload.resultSearch;
    if (payload.textSearch) state.textSearch = payload.textSearch;
  }
};

export const actions = {
  [mutationType.SEARCH_SHOP]({ commit }, payload) {
    commit(mutationType.SEARCH_SHOP, payload);
  }
};
