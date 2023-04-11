<script setup>
import { ref, computed, watch, onMounted, onUpdated, onUnmounted, onBeforeMount } from 'vue';
import axios from 'axios';

import Card from './Card.vue';

const apiUrl = ref('https://www.episodate.com/api/most-popular')

const pageNum = ref(1)
const tvShows = ref(null)

onMounted(async () => {
    const response = await axios.get(`${apiUrl.value}?page=${pageNum.value}`)
    tvShows.value = response.data.tv_shows
})

watch(pageNum, async () => {
    const response = await axios.get(`${apiUrl.value}?page=${pageNum.value}`)
    tvShows.value = response.data.tv_shows
})

const nextPage = () => {
    pageNum.value = pageNum.value + 1
}

const prevPage = () => {
    if (pageNum.value <= 1) return
    pageNum.value = pageNum.value - 1
}

</script>
        
<template>
    <div class="container">
        <div v-if="tvShows">
            <div class="cards">
                <Card v-for="show in tvShows" :key="show.id" :name="show.name" :image="show.image_thumbnail_path"
                    :location="show.network" />
            </div>
            <div class="button-container">
                <!-- less then symbol -->
                <button @click="prevPage">&lt;</button>
                <!-- greater then symbol -->
                <button @click="nextPage">&gt;</button>
            </div>
        </div>

        <div v-else class="spinner">
          <n-spin size="large" />
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    background-color: rgb(27, 26, 26);
    padding: 30px
}

.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.cards h3 {
    font-weight: bold;
}

.cards p {
    font-size: 10px;
}

.button-container {
    user-select: none;
    display: flex;
    justify-content: center;
    padding-top: 30px
}

.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}

.spinner {
  height: 700px;
  background-color: rgb(27, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>