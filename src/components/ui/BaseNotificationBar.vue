<template>
  <div class="notification-bar">
    <p>{{ notification }}</p>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.timeout = setTimeout(() => this.$emit("hide-notification"), 3000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
};
</script>

<style scoped>
.notification-bar {
  margin: 24px 0;
  text-align: center;
}
</style>
