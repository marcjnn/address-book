import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import * as contacts from "@/store/modules/contacts";
import * as notifications from "@/store/modules/notifications";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { contacts, notifications },
  plugins: [createPersistedState()],
});
