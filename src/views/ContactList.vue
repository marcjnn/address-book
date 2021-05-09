<template>
  <ul class="contact__list">
    <li v-for="(contact, index) in contactsSortedByLastName" :key="index">
      <ContactCard
        :contact="contact"
        @edit-contact="showEditForm(contact.id)"
      />
    </li>
  </ul>
  <!-- namespaced modules => notifications.notifications -->
  <ul v-if="notifications.notifications.length">
    <li v-for="n in notifications.notifications" :key="n.id">
      <BaseNotificationBar :notification="n" />
    </li>
  </ul>
  <!-- !v-show so mounts only when clicked -->
  <BaseModal v-if="edit" @close="closeModalWindow">
    <template #header>Edit contact</template>
    <template #main>
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
    ...mapState(["contacts", ["contacts"], "notifications", ["notifications"]]),
    ...mapGetters("contacts", {
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
}
</style>
