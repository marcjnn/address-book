import { ContactItem } from "@/types/ContactItem";
import SortFunctions from "@/features/SortFunctions";

interface State {
  contacts: ContactItem[];
}

export const contacts = {
  namespaced: true,
  state: {
    contacts: [] as ContactItem[],
  },
  mutations: {
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
  },
  actions: {
    upsertContact(
      { state, commit, dispatch }: any,
      incomingContact: ContactItem
    ) {
      debugger;
      console.log(incomingContact.id);

      const mappedIds = state.contacts.map(
        (contact: ContactItem) => contact.id
      );
      console.log();
      console.log(mappedIds);

      const index = state.contacts.findIndex(
        (contact: ContactItem) => contact.id === incomingContact.id
      );
      console.log(index);

      if (index === -1) {
        commit("ADD_CONTACT", incomingContact);
        dispatch(
          "notifications/addNotification",
          "New contact has been added",
          {
            root: true,
          }
        );
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
  },
  getters: {
    sortByLastName: (state: State) => {
      return state.contacts.sort(SortFunctions().sortByLastName);
    },
    contactToEdit: (state: State) => (id: string) => {
      return state.contacts.find((contact) => contact.id === id);
    },
  },
};
