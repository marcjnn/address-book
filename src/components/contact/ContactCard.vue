<template>
  <article class="contact__item">
    <p>{{ contact.id }}</p>
    <p class="contact__cell contact__name">
      {{ getFullName }}
    </p>
    <p class="contact__cell">
      <a
        :href="`mailto:${contact.email}`"
        class="contact__link"
        :title="`send email to ${getFullName}`"
        >{{ contact.email }}</a
      >
    </p>
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

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions } from "vuex";
import { ContactItem } from "@/types/ContactItem";
export default defineComponent({
  name: "ContactCard",
  props: {
    contact: { type: Object as PropType<ContactItem>, required: true },
  },
  computed: {
    getFullName(): string {
      return `${this.contact.firstName} ${this.contact.lastName}`;
    },
  },
  methods: {
    ...mapActions("contacts", ["deleteContact"]),
    editContact() {
      this.$emit("edit-contact");
    },
  },
});
</script>

<style scoped>
.contact__item {
  padding: 12px;
  border: 1px solid var(--colorBorder);
  display: grid;
  justify-items: center;
  gap: 6px;
}

.contact__item:hover {
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
}

.contact__cell {
  display: flex;
  justify-content: left;
  align-items: center;
}

.contact__cell.buttons {
  width: 100%;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 48px;
}

.contact__name {
  text-transform: capitalize;
  font-weight: 700;
  color: var(--colorTextTitle);
}

.contact__link {
  text-decoration: none;
  color: inherit;
}

@media all and (min-width: 768px) {
  .contact__item {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 12px;
  }
  .contact__cell.buttons {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
}
</style>
