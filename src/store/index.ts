import Vue from "vue";
import Vuex from "vuex";
import pingModule from "./ping";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    pingModule
  }
});
