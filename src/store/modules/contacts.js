import SortFunctions from "@/features/SortFunctions";

export const namespaced = true;

export const state = {
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
};

export const mutations = {
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
};

export const actions = {
  upsertContact({ commit, dispatch }, incomingContact) {
    console.log(incomingContact.id);
    let index = state.contacts.findIndex(
      (contact) => contact.id === incomingContact.id
    );
    console.log(index);
    if (index === -1) {
      commit("ADD_CONTACT", incomingContact);
      dispatch("notifications/addNotification", "New contact has been added", {
        root: true,
      });
    } else {
      commit("EDIT_CONTACT", incomingContact);
      dispatch("notifications/addNotification", "Changes have been saved", {
        root: true,
      });
    }
  },
  deleteContact({ commit, dispatch }, id) {
    commit("DELETE_CONTACT", id);
    dispatch("notifications/addNotification", "Contact has been deleted", {
      root: true,
    });
  },
};

export const getters = {
  sortByLastName: (state) => {
    return state.contacts.sort(SortFunctions().sortByLastName);
  },
  contactToEdit: (state) => (id) => {
    return state.contacts.find((contact) => contact.id === id);
  },
};
