const state = {
  cards: JSON.parse(localStorage.getItem("cards") || "[]")
};

const getters = {
  getCardItems(state) {
    return state.cards;
  }
};

const mutations = {
  createCard(state, id) {
    state.cards = JSON.parse(localStorage.getItem("cards") || "[]");
    state.cards[id].todos.forEach(item => (item.edit = false));
  },
  removeTodoFromCardPage(state, payload) {
    state.cards[payload.index].todos.splice(payload.id, 1);
  },
  addInput(state, payload) {
    state.cards[payload.index].todos[payload.id].edit = true;
  },
  changeTodo(state, payload) {
    const todo = state.cards[payload.index].todos[payload.id];
    if (!payload.changedTodo) {
      return (todo.edit = false);
    }
    todo.edit = false;
    todo.text = payload.changedTodo;
  },
  addNewTodo(state, payload) {
    state.cards[payload.index].todos.push({
      completed: false,
      edit: false,
      text: payload.newTodo
    });
  }
};
const actions = {
  removeTodoFromCardPage({ commit }, payload) {
    commit("removeTodoFromCardPage", payload);
  },
  createCard({ commit }, id) {
    commit("createCard", id);
  },
  addInput({ commit }, payload) {
    commit("addInput", payload);
  },
  changeTodo({ commit }, payload) {
    commit("changeTodo", payload);
  },
  addNewTodo({ commit }, payload) {
    commit("addNewTodo", payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
