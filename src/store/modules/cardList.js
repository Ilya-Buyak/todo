const state = {
  cards: JSON.parse(localStorage.getItem("cards") || "[]")
};

const getters = {
  getCards(state) {
    return state.cards;
  },
  cardsLength(state) {
    if (state.cards.length >= 1) {
      return true;
    }
  }
};

const mutations = {
  removeCard(state, id) {
    state.cards.splice(id, 1);
    localStorage.setItem("cards", JSON.stringify(state.cards));
  },
  submitForm(state, card) {
    if (!card.title || !card.notes.length) return;
    state.cards.push(card);

    localStorage.setItem("cards", JSON.stringify(state.cards));
  }
};

const actions = {
  submitForm({ commit }, title) {
    commit("submitForm", title);
  },
  removeCard({ commit }, id) {
    commit("removeCard", id);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
