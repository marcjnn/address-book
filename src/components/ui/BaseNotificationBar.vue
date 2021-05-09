<template>
  <div class="notification-bar">
    <p>{{ notification }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.timeout = setTimeout(
      () => this.deleteNotification(this.notification.id),
      4000
    );
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  methods: mapActions(["deleteNotification"]),
};
</script>

<style scoped>
.notification-bar {
  margin: 24px 0;
  text-align: center;
}
</style>
