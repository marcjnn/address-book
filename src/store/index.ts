import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import { contacts } from "@/store/modules/contacts";
import { notifications } from "@/store/modules/notifications";

const dataState = createPersistedState({
  paths: ["contacts"],
});

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { contacts, notifications },
  plugins: [dataState],
});
