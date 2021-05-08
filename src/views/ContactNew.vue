<template>
  <ContactEdit :uuid="uuid" />
</template>

<script>
import UniqueID from "@/features/UniqueID";
import ContactEdit from "@/components/contact/ContactEdit.vue";
export default {
  name: "ContactNew",
  components: { ContactEdit },
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>

<style scoped></style>
