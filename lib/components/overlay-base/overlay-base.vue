<script setup>
import { SpinnerBase } from "@lib";

defineProps({
  show: {
    default: false,
    type: Boolean,
  },
});
</script>
<template>
  <div class="overlay-base">
    <slot />
    <template v-if="show">
      <div class="overlay-base-film">
        <spinner-base :show="show" />
      </div>
    </template>
  </div>
</template>
<style scoped>
.overlay-base {
  position: relative;
}

.overlay-base-film {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-surface-20);
  opacity: 0.1;
}
</style>
