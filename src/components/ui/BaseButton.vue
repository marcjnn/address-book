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
export default {
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
};
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

/* .btn:disabled {
  background-color: #d8d8d8;
  cursor: default;
}

.btn--create {
  background-color: var(--colorDetails);
}

.btn--save,
.btn--next {
  background-color: var(--colorFooter);
} */

.btn--success {
  color: #0000cc;
  border: 2px solid #0000cc;
}

.btn--danger {
  color: #c80704;
  border: 2px solid #c80704;
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
