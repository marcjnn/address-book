<template>
  <ul class="contact__list">
    <li v-for="(contact, index) in contactsSortedByLastName" :key="index">
      <ContactCard
        :contact="contact"
        @edit-contact="showEditForm(contact.id)"
      />
    </li>
  </ul>
  <!-- !v-show because has to mount only when clicked -->
  <BaseModal v-if="edit" @close="closeModalWindow">
    <template v-slot:header>Edit contact</template>
    <template v-slot:main>
      <ContactEdit
        :contact="editContact(id)"
        :edit="true"
        @close="closeModalWindow"
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
      id: null,
    };
  },
  computed: {
    ...mapState(["contacts"]),
    ...mapGetters({
      contactsSortedByLastName: "sortByLastName",
      editContact: "contactToEdit",
    }),
  },
  methods: {
    showEditForm(id) {
      this.id = id;
      this.edit = true;
    },
    closeModalWindow() {
      this.edit = false;
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
