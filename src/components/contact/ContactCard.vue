<template>
  <article class="contact__item">
    <p class="contact__cell contact__name">
      {{ getFullName }}
    </p>
    <p class="contact__cell">{{ contact.email }}</p>
    <p class="contact__cell">{{ contact.country }}</p>

    <div class="contact__cell buttons">
      <BaseButton
        :icon="['fas', 'user-edit']"
        class="btn--success btn--round"
        title="edit contact"
        @click="editContact"
      />
      <BaseButton
        :icon="['fas', 'user-times']"
        class="btn--danger btn--round"
        title="delete contact"
        @click="deleteContact(contact.id)"
      />
    </div>
  </article>
</template>

<script>
import { mapActions } from "vuex";
import BaseButton from "@/components/ui/BaseButton";
export default {
  name: "ContactCard",
  components: { BaseButton },
  props: {
    contact: { type: Object, required: true },
  },
  computed: {
    getFullName() {
      return `${this.contact.firstName} ${this.contact.lastName}`;
    },
  },
  methods: {
    ...mapActions("contacts", ["deleteContact"]),
    editContact() {
      this.$emit("edit-contact");
    },
  },
};
</script>

<style scoped>
.contact__item {
  padding: 12px;
  border: 1px solid #d8d8d8;
  border-collapse: collapse;
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

.contact__name {
  text-transform: capitalize;
}
</style>
