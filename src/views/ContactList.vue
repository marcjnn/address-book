<template>
  <div v-if="!contactsSortedByLastName.length">
    <p>
      Your address book is empty - click
      <router-link :to="{ name: 'ContactNew' }" class="main__link"
        >here</router-link
      >
      to add a new contact
    </p>
  </div>
  <ul class="contact__list">
    <li v-for="(contact, index) in contactsSortedByLastName" :key="index">
      <ContactCard
        :contact="contact"
        @edit-contact="showEditForm(contact.id)"
      />
    </li>
  </ul>
  <ul v-if="notifications.length" id="not-visible-list">
    <li v-for="n in notifications" :key="n.id">
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

<script lang="ts">
import { defineComponent } from "vue";
import ContactCard from "@/components/contact/ContactCard.vue";
import ContactEdit from "@/components/contact/ContactEdit.vue";
import { mapState, mapGetters } from "vuex";

export default defineComponent({
  name: "ContactList",
  components: {
    ContactCard,
    ContactEdit,
  },
  data() {
    return {
      edit: false,
      id: "",
    };
  },
  computed: {
    ...mapState({
      notifications: (state: any) => state.notifications.notifications,
    }),
    ...mapGetters("contacts", {
      contactsSortedByLastName: "sortByLastName",
      editContact: "contactToEdit",
    }),
  },
  methods: {
    showEditForm(id: string) {
      this.id = id;
      this.edit = true;
    },
    closeModalWindow() {
      this.edit = false;
    },
  },
});
</script>
<style scoped>
.contact__list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.main__link {
  color: darkblue;
}
</style>
