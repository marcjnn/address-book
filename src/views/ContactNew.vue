<template>
  <h2>Add new contact</h2>
  <ContactEdit @show-notification="showNotification" />
  <!-- <BaseNotificationBar
    v-if="notification"
    @hide-notification="hideNotification"
    notification="Contact has been added"
  /> -->
  <!-- <p class="msg">Contact has been added</p> -->
</template>

<script>
import ContactEdit from "@/components/contact/ContactEdit.vue";
export default {
  name: "ContactNew",
  components: { ContactEdit },
  data() {
    return { notification: false };
  },
  // beforeRouteLeave(to, from, next) {
  //   // called when the route that renders this component is about to
  //   // be navigated away from.
  //   // has access to `this` component instance.
  // },
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
