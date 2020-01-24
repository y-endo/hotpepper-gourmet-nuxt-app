import * as mutation from '~/constants/mutation-types';

export const state = () => ({
  json: {}
});

export const mutations = {
  [mutation.SEARCH_SHOP](state, payload) {
    state.json = payload;
  }
};

export const actions = {
  [mutation.SEARCH_SHOP]({ commit }, payload) {
    commit(mutation.SEARCH_SHOP, payload);
  }
};
