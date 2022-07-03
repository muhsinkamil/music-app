import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthModalOpen: false,
  },
  getters: {},
  mutations: {
    toggleAuthModal: (state) => {
      state.isAuthModalOpen = !state.isAuthModalOpen;
    },
  },
  actions: {},
  modules: {},
});
