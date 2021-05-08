import { createRouter, createWebHistory } from "vue-router";
import ContactList from "../views/ContactList.vue";

const routes = [
  {
    path: "/",
    name: "ContactList",
    component: ContactList,
  },
  {
    path: "/add-contact",
    name: "ContactNew",
    component: () =>
      import(/* webpackChunkName: "contact-new" */ "../views/ContactNew.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
