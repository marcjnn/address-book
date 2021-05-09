import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SortFunctions from "@/features/SortFunctions";

export default createStore({
  state: {
    contacts: [
      {
        id: 21,
        firstName: "Adam",
        lastName: "Małysz",
        email: "adam@mailme.com",
        country: "Poland",
      },
      {
        id: 22,
        firstName: "Matti",
        lastName: "Hautamäki",
        email: "matti@mailme.com",
        country: "Finland",
      },
      {
        id: 23,
        firstName: "Simon",
        lastName: "Ammann",
        email: "simi@mailme.com",
        country: "Switzerland",
      },
      {
        id: 24,
        firstName: "Martin",
        lastName: "Schmidt",
        email: "martin@mailme.com",
        country: "Germany",
      },
    ],
    notifications: [],
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
    // contacts
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
    // notifications
    ADD_NOTIFICATION(state, notification) {
      console.log("im here - mutations");
      state.notifications.push(notification);
    },
    DELETE_NOTIFICATION(state, id) {
      let notificationIndex = state.notifications.findIndex(
        (notification) => notification.id === id
      );
      state.notifications.splice(notificationIndex, 1);
    },
  },
  actions: {
    // contact
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
    // notification
    addNotification({ commit }, notification) {
      console.log("im here - actions");
      let index = this.state.notifications.findIndex(
        (n) => n.id === notification.id
      );
      if (index === -1) commit("ADD_NOTIFICATION", notification);
    },
    deleteNotification({ commit }, id) {
      commit("DELETE_NOTIFICATION", id);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
