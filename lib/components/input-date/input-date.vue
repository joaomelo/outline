<script setup>
import { asDate, isDate, vFocus } from "@lib";
import { computed } from "vue";

import { InputWrapper } from "../input-wrapper";

const props = defineProps({
  autofocus: {
    default: false,
    type: Boolean,
  },
  modelValue: {
    default: null,
    type: Date,
  },
});
const emit = defineEmits(["update:modelValue"]);

const value = computed(() => {
  if (!isDate(props.modelValue)) return null;
  return props.modelValue.toISOString().substring(0, 10);
});

const handleUpdate = (event) => {
  const value = event?.target?.value || null;
  const date = asDate(value);
  emit("update:modelValue", date);
};
</script>
<template>
  <input-wrapper>
    <template #default="{ id }">
      <input
        :id="id"
        v-focus="autofocus"
        :value="value"
        class="input-date-input"
        type="date"
        @input="handleUpdate"
      >
    </template>
  </input-wrapper>
</template>

<style scoped>
.input-date-input {
  width: 100%;
  border: var(--input-border);
  padding-block: var(--size-10);
  padding-inline: var(--size-20);
}

.input-date-input:focus-within,
.input-date-input:focus-visible {
  outline: var(--input-outline-focus);
}
</style>
