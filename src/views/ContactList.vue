<template>
  <ul class="contact__list">
    <li v-for="(contact, index) in contactsSortedByLastName" :key="index">
      <ContactCard :contact="contact" @edit-contact="editContact(contact.id)" />
    </li>
  </ul>
  <BaseModal :open="edit" @close="closeModalWindow">
    <template v-slot:header>Edit contact</template>
    <template v-slot:main>
      <ContactEdit :contact="contactToEdit" @save-changes="saveChanges"
    /></template>
  </BaseModal>
</template>

<script>
import ContactCard from "@/components/contact/ContactCard.vue";
import ContactEdit from "@/components/contact/ContactEdit.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "ContactList",
  components: {
    ContactCard,
    ContactEdit,
  },
  data() {
    return {
      // contacts: [
      //   {
      //     id: 0,
      //     firstName: "Adam",
      //     lastName: "Małysz",
      //     email: "adam@mailme.com",
      //     country: "Poland",
      //   },
      //   {
      //     id: 1,
      //     firstName: "Matti",
      //     lastName: "Hautamäki",
      //     email: "matti@mailme.com",
      //     country: "Finland",
      //   },
      //   {
      //     id: 2,
      //     firstName: "Simon",
      //     lastName: "Ammann",
      //     email: "simi@mailme.com",
      //     country: "Switzerland",
      //   },
      //   {
      //     id: 3,
      //     firstName: "Martin",
      //     lastName: "Schmidt",
      //     email: "martin@mailme.com",
      //     country: "Germany",
      //   },
      // ],
      edit: false,
      contactToEdit: null,
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
    // contactsSorted() {
    //   let newArray = [...this.contacts];
    //   return newArray.sort(this.sortByLastName);
    // },
    ...mapState(["contacts"]),
    ...mapGetters({
      contactsSortedByLastName: "sortByLastName",
    }),
  },
  methods: {
    // sortByLastName(a, b) {
    //   const nameA = a.lastName.toLowerCase();
    //   const nameB = b.lastName.toLowerCase();
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   if (nameA > nameB) {
    //     return 1;
    //   }
    //   return 0;
    // },
    editContact(id) {
      this.contactToEdit = this.contacts.find((contact) => contact.id === id);
      console.log(id);
      this.edit = true;
    },
    closeModalWindow() {
      this.edit = false;
      console.log(this.contacts);
    },
    saveChanges(payload) {
      console.log("trying to save changes");
      console.log(payload);
      let contactEditedIndex = this.contacts.findIndex(
        (contact) => contact.id === payload.id
      );
      this.contacts.splice(contactEditedIndex, 1, payload);
      this.closeModalWindow();
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
