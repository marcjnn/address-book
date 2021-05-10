<template>
  <h2>Add new contact</h2>
  <ContactEdit />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactEdit from "@/components/contact/ContactEdit.vue";
export default defineComponent({
  name: "ContactNew",
  components: { ContactEdit },
});
</script>

<style scoped></style>
