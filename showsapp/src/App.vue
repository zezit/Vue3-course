<script setup>
import RandMCards from './components/RandMCards.vue';
</script>
    
<template>
  <main>
    <div class="hero">
      <h1>Rick and Morty</h1>
    </div>
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

<style scoped>
.hero {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column
}

.hero img {
  position: absolute;
  height: 700px;
  opacity: 0.1;
}

.hero h1 {
  font-size: 100px;
  font-weight: bold;
}

.hero p {
  cursor: pointer;
}
</style>