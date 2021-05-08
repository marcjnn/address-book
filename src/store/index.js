import { createStore } from "vuex";
import SortFunctions from "@/features/SortFunctions";

export default createStore({
  state: {
    contacts: [
      {
        id: 0,
        firstName: "Adam",
        lastName: "Małysz",
        email: "adam@mailme.com",
        country: "Poland",
      },
      {
        id: 1,
        firstName: "Matti",
        lastName: "Hautamäki",
        email: "matti@mailme.com",
        country: "Finland",
      },
      {
        id: 2,
        firstName: "Simon",
        lastName: "Ammann",
        email: "simi@mailme.com",
        country: "Switzerland",
      },
      {
        id: 3,
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
  },
  mutations: {},
  actions: {},
  modules: {},
});
