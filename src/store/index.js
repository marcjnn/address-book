import { createStore } from "vuex";
import SortFunctions from "@/features/SortFunctions";

export default createStore({
  state: {
    contacts: [
      {
        id: 20,
        firstName: "Adam",
        lastName: "Małysz",
        email: "adam@mailme.com",
        country: "Poland",
      },
      {
        id: 21,
        firstName: "Matti",
        lastName: "Hautamäki",
        email: "matti@mailme.com",
        country: "Finland",
      },
      {
        id: 22,
        firstName: "Simon",
        lastName: "Ammann",
        email: "simi@mailme.com",
        country: "Switzerland",
      },
      {
        id: 23,
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
    contactToEdit: (state) => (id) => {
      return state.contacts.find((contact) => contact.id === id);
    },
  },
  mutations: {
    ADD_CONTACT(state, contactToAdd) {
      state.contacts.push(contactToAdd);
    },
    EDIT_CONTACT(state, contactToEdit) {
      let contactEditedIndex = state.contacts.findIndex(
        (contact) => contact.id === contactToEdit.id
      );
      state.contacts.splice(contactEditedIndex, 1, contactToEdit);
    },
    DELETE_CONTACT(state, id) {
      let contactEditedIndex = state.contacts.findIndex(
        (contact) => contact.id === id
      );
      state.contacts.splice(contactEditedIndex, 1);
    },
  },
  actions: {
    upsertContact({ commit }, incomingContact) {
      let index = this.state.contacts.findIndex(
        (contact) => contact.id === incomingContact.id
      );
      if (index === -1) {
        commit("ADD_CONTACT", incomingContact);
      } else {
        commit("EDIT_CONTACT", incomingContact);
      }
    },
    deleteContact({ commit }, id) {
      commit("DELETE_CONTACT", id);
    },
  },
  modules: {},
});
