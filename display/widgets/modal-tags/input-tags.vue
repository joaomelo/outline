<script setup>
import { listTags } from "@body";
import { InputMultiselect, useDependencies } from "@lib";

const model = defineModel({
  required: true,
  type: Array,
});

const dependencies = useDependencies();

const allTags = listTags(dependencies);
const options = allTags.map(({ id, name }) => ({ text: name, value: id }));
</script>
<template>
  <input-multiselect
    id="input-tags"
    v-model="model"
    :options="options"
    rows="10"
  />
</template>
