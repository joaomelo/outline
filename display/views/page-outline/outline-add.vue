<script setup>
import { ButtonBase, FormBase, InputText, useI18n, useTask } from "@lib";

const props = defineProps({
  parentId: {
    default: null,
    type: String,
  },
});

const { t } = useI18n();

const reset = () => ({ name: null, parentId: null });

const { payload, task } = useTask((dependencies, payload) => {
  const { artifacts } = dependencies;
  // a navigation that changes the parentId maybe happened after reset was called
  payload.parentId = props.parentId;
  return artifacts.add(payload);
}, reset);
</script>
<template>
  <form-base
    inline
    @submit="task.run"
  >
    <template #default>
      <input-text
        id="input-name"
        v-model="payload.name"
        autofocus
        :disabled="task.busy"
      />
    </template>
    <template #buttons>
      <button-base
        id="button-add"
        :busy="task.busy"
        :label="t('shared.add')"
        type="submit"
      />
    </template>
  </form-base>
</template>
