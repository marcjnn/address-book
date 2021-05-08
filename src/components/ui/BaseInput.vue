<template>
  <label v-if="label" class="field__label">{{ label }}</label>
  <input
    :value="modelValue"
    v-bind="$attrs"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    class="form__field"
  />
</template>

<script>
export default {
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
  },
};
</script>

<style scoped>
.form__field {
  padding: 6px;
  border: 1px solid grey;
  display: block;
  width: 80%;
}

.field__label {
  display: block;
}
</style>
