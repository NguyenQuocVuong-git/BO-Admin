import { createStore } from 'vuex';

const store = createStore({
  state: {
    user : {
      id: 1
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
