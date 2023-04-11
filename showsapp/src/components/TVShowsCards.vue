<script setup>
import { ref, computed, watch, onMounted, onUpdated, onUnmounted, onBeforeMount } from 'vue';
import axios from 'axios';

import Card from './Card.vue';

const apiUrl = ref('https://api.tvmaze.com/shows')

const pageNum = ref(0)
const showId = ref(0)
const characters = ref(null)

onMounted(
    async () => {
        const resp = await axios.get(`${apiUrl.value}?page=${pageNum.value}`)
        characters.value = resp
    }
)

const nextPage = () => {
    pageLoad.value = pageLoad.value + 8
}

const prevPage = () => {
    if (pageLoad.value <= 9) return
    pageLoad.value = pageLoad.value - 8
}

</script>
        
<template>
    <div class="container">
        <div class="cards">
            <!-- <Card v-for="character in characters" :key="character.id" :name="character.name" :image="character.image"
                                                        :location="character.location.name" /> -->
        </div>

        <div class="button-container">
            <!-- less then symbol -->
            <button @click="prevPage">&lt;</button>
            <!-- greater then symbol -->
            <button @click="nextPage">&gt;</button>
        </div>
    </div>
</template>

<style scoped>
.container {
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
</style>