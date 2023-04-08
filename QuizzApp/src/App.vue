<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <Transition name="route">
      <RouterView />
    </Transition>
  </main>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.route-enter-active {
  transition: all 0.3s ease;
}
</style>