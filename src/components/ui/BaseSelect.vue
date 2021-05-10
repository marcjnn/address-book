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

<script lang="ts">
import { defineComponent } from "vue";
import { formFieldMixin } from "@/mixins/formFieldMixin";
export default defineComponent({
  name: "BaseSelect",
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.required::after {
  content: "*";
}
</style>
