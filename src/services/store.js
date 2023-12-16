import Vuex from 'vuex';

// Use Vuex without explicitly importing Vue
const store = new Vuex.Store({
  state: {
    bucketItems: [],
  },
  mutations: {
    setBucketItems(state, items) {
      state.bucketItems = items;
    }
  },
  actions: {
    // Define actions that can commit the setBucketItems mutation
    setBucketItemsAction({ commit }, items) {
      commit('setBucketItems', items);
    }
  },
  getters: {
    // Define a getter for accessing bucket items
    getBucketItems: (state) => {
      return state.bucketItems;
    }
  },
});

export default store;