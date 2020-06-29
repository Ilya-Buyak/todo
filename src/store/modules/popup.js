const state = {
  popupShown: false,
  formShown: false,
  removeCardShown: false,
  cancelShown: false
};

const getters = {
  isPopupShown(state) {
    return state.popupShown;
  },
  isFormShown(state) {
    return state.formShown;
  },
  isRemoveAlertShown(state) {
    return state.removeCardShown;
  },
  isCancelAllertShown() {
    return state.cancelShown;
  }
};

const mutations = {
  showForm(state) {
    state.popupShown = true;
    state.formShown = true;
  },
  showRemoveCardPopup(state) {
    state.popupShown = true;
    state.removeCardShown = true;
  },
  showCancelPopup() {
    state.popupShown = true;
    state.cancelShown = true;
  },
  closePopup(state) {
    state.popupShown = false;
    state.formShown = false;
    state.removeCardShown = false;
    state.cancelShown = false;
  }
};

const actions = {
  showForm({ commit }) {
    commit("showForm");
  },
  closePopup({ commit }) {
    commit("closePopup");
  },
  showRemoveCardPopup({ commit }) {
    commit("showRemoveCardPopup");
  },
  showCancelPopup({ commit }) {
    commit("showCancelPopup");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
