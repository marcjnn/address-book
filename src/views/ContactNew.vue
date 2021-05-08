<template>
  <h2>Add new contact</h2>
  <ContactEdit @show-notification="showNotification" />
  <BaseNotificationBar
    v-if="notification"
    @hide-notification="hideNotification"
    notification="Contact has been added"
  />
  <!-- <p class="msg">Contact has been added</p> -->
</template>

<script>
import ContactEdit from "@/components/contact/ContactEdit.vue";
import BaseNotificationBar from "@/components/ui/BaseNotificationBar.vue";
export default {
  name: "ContactNew",
  components: { BaseNotificationBar, ContactEdit },
  data() {
    return { notification: false };
  },
  methods: {
    showNotification() {
      this.notification = true;
    },
    hideNotification() {
      this.notification = false;
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
