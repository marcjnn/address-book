<template>
  <label v-if="label" class="field__label" :class="{ required: isRequired }">{{
    label
  }}</label>
  <select
    class="form__field"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "BaseSelect",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.required::after {
  content: "*";
}
</style>
