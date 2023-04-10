<script setup>
import RandMCards from './components/RandMCards.vue';
</script>
    
<template>
  <main>
    <h1>HERO</h1>
    <Suspense>
      <template #default>
        <RandMCards />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </main>
</template>

<style scoped></style>