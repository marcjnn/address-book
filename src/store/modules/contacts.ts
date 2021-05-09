import { ContactItem } from "@/types/ContactItem";
import SortFunctions from "@/features/SortFunctions";

export const namespaced = true;

interface State {
  contacts: ContactItem[];
}

export const state = {
  contacts: [
    {
      id: "21",
      firstName: "Adam",
      lastName: "Małysz",
      email: "adam@mailme.com",
      country: "Poland",
    },
    {
      id: "22",
      firstName: "Matti",
      lastName: "Hautamäki",
      email: "matti@mailme.com",
      country: "Finland",
    },
    {
      id: "23",
      firstName: "Simon",
      lastName: "Ammann",
      email: "simi@mailme.com",
      country: "Switzerland",
    },
    {
      id: "24",
      firstName: "Martin",
      lastName: "Schmidt",
      email: "martin@mailme.com",
      country: "Germany",
    },
  ],
};

export const mutations = {
  ADD_CONTACT(state: State, contactToAdd: ContactItem) {
    state.contacts.push(contactToAdd);
  },
  EDIT_CONTACT(state: State, contactToEdit: ContactItem) {
    const contactEditedIndex = state.contacts.findIndex(
      (contact) => contact.id === contactToEdit.id
    );
    state.contacts.splice(contactEditedIndex, 1, contactToEdit);
  },
  DELETE_CONTACT(state: State, id: string) {
    const contactEditedIndex = state.contacts.findIndex(
      (contact) => contact.id === id
    );
    state.contacts.splice(contactEditedIndex, 1);
  },
};

export const actions = {
  upsertContact({ commit, dispatch }: any, incomingContact: ContactItem) {
    console.log(incomingContact.id);
    const index = state.contacts.findIndex(
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
  deleteContact({ commit, dispatch }: any, id: string) {
    commit("DELETE_CONTACT", id);
    dispatch("notifications/addNotification", "Contact has been deleted", {
      root: true,
    });
  },
};

export const getters = {
  sortByLastName: (state: State) => {
    return state.contacts.sort(SortFunctions().sortByLastName);
  },
  contactToEdit: (state: State) => (id: string) => {
    return state.contacts.find((contact) => contact.id === id);
  },
};
