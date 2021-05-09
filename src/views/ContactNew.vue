<template>
  <h2>Add new contact</h2>
  <ContactEdit />
</template>

<script>
import ContactEdit from "@/components/contact/ContactEdit.vue";
export default {
  name: "ContactNew",
  components: { ContactEdit },
};
</script>

<style scoped>
.msg {
  margin-top: 24px;
  text-align: center;
}
</style>
