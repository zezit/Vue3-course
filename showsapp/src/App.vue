<script setup>
import { ref } from 'vue';

import RandMCards from './components/RandMCards.vue';
import TVShowsCards from './components/TVShowsCards.vue';

const showTVShows = ref(true)
</script>
    
<template>
  <main>
    <div class="hero">
      <h1 v-if="!showTVShows">Rick and Morty</h1>
      <h1 v-else>TV Shows</h1>
      <div class="list">
        <p @click="showTVShows = true">TV Shows</p>
        <p @click="showTVShows = false">Rick and Morty</p>
      </div>
    </div>

    <KeepAlive>
      <Component :is="
        showTVShows ?
          <TVShowsCards />
          :
          <Suspense>
          <template #default >
          <RandMCards />
          < /template>
          < template #fallback >
            <div class=" spinner">
        <n-spin size="large" />
        </div>
      </template>
      </Suspense>
      "
      >
    </Component>
  </KeepAlive>

  <!-- <Suspense v-if="!showTVShows">
      <template #default>
        <RandMCards />
              </template>
              <template #fallback>
                <div class="spinner">
                  <n-spin size="large" />
                </div>
              </template>
            </Suspense>

            <TVShowsCards v-else /> -->
</main></template>

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
  padding: 3px;
  cursor: pointer;
}

.list {
  display: flex;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}

.list p:hover {
  background-color: #eee;
  border-radius: 5px;
}

.spinner {
  height: 700px;
  background-color: rgb(27, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>