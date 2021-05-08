<template>
  <h2>Add new contact</h2>
  <ContactEdit @show-msg="showMessage" />
  <p v-if="msg" class="msg">Contact has been added</p>
</template>

<script>
import ContactEdit from "@/components/contact/ContactEdit.vue";
export default {
  name: "ContactNew",
  components: { ContactEdit },
  data() {
    return { msg: false };
  },
  methods: {
    showMessage() {
      this.msg = true;
    },
  },
};
</script>

<style scoped>
.msg {
  margin-top: 24px;
  text-align: center;
}
</style>
