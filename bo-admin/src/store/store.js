import { createStore } from 'vuex';

const store = createStore({
  state: {
    user : {
    },
  },
  mutations: {
    setUser(state , user) {
      state.user = user
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
});

export default store;
