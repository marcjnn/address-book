<template>
  <ul class="contact__list">
    <li v-for="(contact, index) in contactsSortedByLastName" :key="index">
      <ContactCard
        :contact="contact"
        @edit-contact="showEditForm(contact.id)"
      />
    </li>
  </ul>
  <ul>
    <li v-for="notification in notifications" :key="notification.id">
      <BaseNotificationBar
        v-if="notification"
        @hide-notification="hideNotification"
        :notification="notification"
      />
    </li>
  </ul>
  <!-- !v-show because has to mount only when clicked -->
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
      userId: null,
      notification: "",
    };
  },
  computed: {
    ...mapState(["contacts", "notifications"]),
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
    showNotification() {
      this.notification.is = true;
    },
    hideNotification() {
      // this.notification.is = false;
      console.log("hiding");
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
