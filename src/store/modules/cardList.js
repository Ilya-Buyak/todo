const state = {
  cards: JSON.parse(localStorage.getItem("cards") || "[]"),
  todos: [],
  cardId: 0
};

const getters = {
  getTodos(state) {
    return state.todos;
  },
  getCards(state) {
    return state.cards;
  }
};

const mutations = {
  addTodo(state, newTodo) {
    if (!newTodo) return;
    state.todos.push({
      text: newTodo,
      completed: false,
      edit: false,
      id: Date.now()
    });
    state.errorTodoText = "";
  },
  removeTodo(state, id) {
    state.todos.splice(id, 1);
  },
  removeCard(state) {
    state.cards.splice(state.cardId, 1);
    localStorage.setItem("cards", JSON.stringify(state.cards));
  },
  submitForm(state, title) {
    if (!title || !state.todos.length) return;
    state.cards.push({
      id: Date.now(),
      title: title,
      todos: state.todos
    });
    localStorage.setItem("cards", JSON.stringify(state.cards));
    state.todos = [];
  },
  saveChanges(state, payload) {
    state.cards.splice(payload.index, 1, payload.card);
    localStorage.setItem("cards", JSON.stringify(state.cards));
  },
  setId(state, id) {
    state.cardId = id;
  }
};
const actions = {
  addTodo({ commit }, newTodo) {
    commit("addTodo", newTodo);
  },
  removeTodo({ commit }, id) {
    commit("removeTodo", id);
  },
  submitForm({ commit }, title) {
    commit("submitForm", title);
  },
  removeCard({ commit }, id) {
    commit("removeCard", id);
  },
  saveChanges({ commit }, payload) {
    commit("saveChanges", payload);
  },
  setId({ commit }, id) {
    commit("setId", id);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
