<template>
  <div class="notification__bar">
    <p class="notification__text">{{ notification.msg }}</p>
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
      3000
    );
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  methods: mapActions("notifications", ["deleteNotification"]),
};
</script>

<style scoped>
.notification__bar {
  margin: 24px 0;
  text-align: center;
}

.notification__text {
  color: green;
  font-size: 18px;
}
</style>
