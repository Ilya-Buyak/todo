import Vue from "vue";
import Vuex from "vuex";
import popup from "./modules/popup";
import cardsList from "./modules/cardList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    popup,
    cardsList
  }
});
