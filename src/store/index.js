import Vue from "vue";
import Vuex from "vuex";
import cardsList from "./modules/cardsList";
import popup from "./modules/popup";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cardsList,
    popup
  }
});
