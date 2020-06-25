const state = {
  popupShown: false
};

const getters = {
  isPopupShown(state) {
    return state.popupShown;
  }
};

const mutations = {
  togglePopupVisible(state) {
    state.popupShown = !state.popupShown;
  }
};

const actions = {
  togglePopupVisible({ commit }) {
    commit("togglePopupVisible");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
