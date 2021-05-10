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
import { formFieldMixin } from "@/mixins/formFieldMixin";
export default defineComponent({
  name: "BaseInput",
  mixins: [formFieldMixin],
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.required::after {
  content: "*";
}
</style>
