const state = {
  items: [
    {
      id: 1,
      title: "Тестовое задание"
    }
  ]
};

const getters = {
  cards(state) {
    return state.items;
  },

  cardsLength(state) {
    if (state.items.length >= 1) {
      return true;
    }
  }
};

export default {
  state,
  getters
};
