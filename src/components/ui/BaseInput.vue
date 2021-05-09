<template>
  <label v-if="label" class="field__label" :class="{ required: isRequired }">{{
    label
  }}</label>
  <input
    :value="modelValue"
    v-bind="$attrs"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    class="form__field"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.required::after {
  content: "*";
}
</style>
