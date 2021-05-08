import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SortFunctions from "@/features/SortFunctions";

export default createStore({
  state: {
    contacts: [
      {
        firstName: "Adam",
        lastName: "Małysz",
        email: "adam@mailme.com",
        country: "Poland",
      },
      {
        firstName: "Matti",
        lastName: "Hautamäki",
        email: "matti@mailme.com",
        country: "Finland",
      },
      {
        firstName: "Simon",
        lastName: "Ammann",
        email: "simi@mailme.com",
        country: "Switzerland",
      },
      {
        firstName: "Martin",
        lastName: "Schmidt",
        email: "martin@mailme.com",
        country: "Germany",
      },
    ],
  },
  getters: {
    sortByLastName: (state) => {
      return state.contacts.sort(SortFunctions().sortByLastName);
    },
    contactToEdit: (state) => (email) => {
      return state.contacts.find((contact) => contact.email === email);
    },
  },
  mutations: {
    ADD_CONTACT(state, contactToAdd) {
      state.contacts.push(contactToAdd);
    },
    EDIT_CONTACT(state, contactToEdit) {
      let contactEditedIndex = state.contacts.findIndex(
        (contact) => contact.email === contactToEdit.email
      );
      state.contacts.splice(contactEditedIndex, 1, contactToEdit);
    },
    DELETE_CONTACT(state, email) {
      let contactEditedIndex = state.contacts.findIndex(
        (contact) => contact.email === email
      );
      state.contacts.splice(contactEditedIndex, 1);
    },
  },
  actions: {
    upsertContact({ commit }, incomingContact) {
      let index = this.state.contacts.findIndex(
        (contact) => contact.email === incomingContact.email
      );
      if (index === -1) {
        commit("ADD_CONTACT", incomingContact);
      } else {
        commit("EDIT_CONTACT", incomingContact);
      }
    },
    deleteContact({ commit }, email) {
      commit("DELETE_CONTACT", email);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
