<template>
  <ul class="contact__list">
    <li v-for="(contact, index) in contactsSortedByLastName" :key="index">
      <ContactCard :contact="contact" @edit-contact="editContact(contact.id)" />
    </li>
  </ul>
  <BaseModal :open="edit" @close="closeModalWindow">
    <template v-slot:header>Edit contact</template>
    <template v-slot:main>
      <ContactEdit :contact="contactToEdit(idToEdit)"
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
      edit: false,
      idToEdit: null,
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
    ...mapState(["contacts"]),
    ...mapGetters({
      contactsSortedByLastName: "sortByLastName",
      // try to change contactToEdit to editContact when method removed
      contactToEdit: "contactToEdit",
    }),
  },
  methods: {
    editContact(id) {
      this.idToEdit = id;
      console.log(id);
      this.edit = true;
    },
    closeModalWindow() {
      this.edit = false;
      console.log(this.contacts);
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
