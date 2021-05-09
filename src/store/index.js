import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import * as contacts from "@/store/modules/contacts.js";
import * as notifications from "@/store/modules/notifications.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {
    // contacts
    // notifications
  },
  actions: {
    // contact
    // notification
  },
  modules: { contacts, notifications },
  plugins: [createPersistedState()],
});
