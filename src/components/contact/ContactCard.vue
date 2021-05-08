<template>
  <article class="contact__item">
    <!-- <p>{{ contactInitials }} - with computed</p> -->
    <p class="contact__cell">{{ contact.firstName }} {{ contact.lastName }}</p>
    <p class="contact__cell">{{ contact.email }}</p>
    <p class="contact__cell">{{ contact.country }}</p>

    <div class="contact__cell buttons">
      <BaseButton
        :icon="['fas', 'user-edit']"
        class="btn--success btn--round"
        title="edit contact"
        @click="editContact"
      /><BaseButton
        :icon="['fas', 'user-times']"
        class="btn--danger btn--round"
        title="delete contact"
        @click="deleteContact(contact.email)"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    contact: { type: Object, required: true },
  },
  methods: {
    editContact() {
      this.$emit("edit-contact");
    },
    deleteContact(email) {
      this.$store.dispatch("deleteContact", email);
    },
  },
};
</script>

<style scoped>
.contact__item {
  padding: 12px;
  border: 1px solid #d8d8d8;
  border-collapse: collapse;
  /* border-top: none; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.contact__cell {
  display: flex;
  justify-content: left;
  align-items: center;
}

.contact__cell.buttons {
  width: 100%;
  justify-content: space-around;
}
</style>
