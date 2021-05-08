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
      /><BaseButton
        :icon="['fas', 'user-times']"
        class="btn--danger btn--round"
        title="delete contact"
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
};
</script>

<style scoped>
.contact__item {
  padding: 12px;
  border: 1px solid grey;
  border-collapse: collapse;
  /* border-top: none; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

/* .contact__list .contact__item:first-child {
  border-top: 1px solid grey;
} */

.contact__cell {
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>
