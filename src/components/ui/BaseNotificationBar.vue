<template>
  <div class="notification__bar">
    <p class="notification__text">{{ notification.msg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Notification } from "@/types/Notification";
import { mapActions } from "vuex";
export default defineComponent({
  props: {
    notification: {
      type: Object as PropType<Notification>,
      required: true,
    },
  },
  data() {
    return {
      timeout: 0,
    };
  },
  mounted() {
    this.timeout = setTimeout(
      () => this.deleteNotification(this.notification.id),
      2000
    );
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  methods: mapActions("notifications", ["deleteNotification"]),
});
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
