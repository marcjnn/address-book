<template>
  <!-- button - icon left side -->
  <button v-if="!right" v-bind="$attrs" class="btn">
    <font-awesome-icon v-if="icon" :icon="icon" class="icon" />
    <slot />
  </button>
  <!-- button - icon right side -->
  <button v-if="right" v-bind="$attrs" class="btn">
    <slot /><font-awesome-icon :icon="icon" class="icon" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseButton",
  inheritAttrs: false,
  props: {
    icon: {
      type: Array,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.btn {
  background-color: transparent;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 0.7rem;
  text-transform: uppercase;
  outline: none;
  color: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.btn--success {
  color: var(--colorSuccessPrimary);
  border: 2px solid var(--colorSuccessPrimary);
}

.btn--danger {
  color: var(--colorDanger);
  border: 2px solid var(--colorDanger);
}

.btn--round {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.btn--rect:hover {
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
}
</style>
