<template>
  <ul class="contact__list">
    <li v-for="(contact, index) in contactsSorted" :key="index">
      <ContactCard :contact="contact" />
    </li>
  </ul>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "ContactList",
  components: {
    ContactCard,
  },
  data() {
    return {
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
    };
  },
  mounted() {
    // if (localStorage.contacts) {
    //   this.contacts = localStorage.contacts
    // }
  },
  // watch: {
  //   contacts(newContact) {
  //     localStorage.contacts.push(newContact)
  //   },
  // },
  computed: {
    // contacts() {
    //   return store.getters.getContacts;
    // },
    contactsSorted() {
      let newArray = [...this.contacts];
      return newArray.sort(this.sortByLastName);
    },
  },
  methods: {
    sortByLastName(a, b) {
      const nameA = a.lastName.toLowerCase();
      const nameB = b.lastName.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    },
  },
};
</script>
<style scoped>
.contact__list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
  /* align-items: center; */
}
</style>
