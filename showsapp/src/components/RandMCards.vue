<script setup>
import { ref, computed, watch } from 'vue';
import axios from 'axios';

import Card from './Card.vue';

const apiUrl = 'https://rickandmortyapi.com/api';
const pageLoad = ref(1)
const characters = ref(null)

const next9 = () => `${pageLoad.value},${pageLoad.value + 1},${pageLoad.value + 2},${pageLoad.value + 3},${pageLoad.value + 4},${pageLoad.value + 5},${pageLoad.value + 6},${pageLoad.value + 7},${pageLoad.value + 8}`

const response = await axios.get(`${apiUrl}/character/${next9()}`);
characters.value = response.data;

watch(pageLoad, async () => {
    const response = await axios.get(`${apiUrl}/character/${next9()}`);
    characters.value = response.data;
})

const nextPage = () => {
    pageLoad.value = pageLoad.value + 9
}

const prevPage = () => {
    pageLoad.value = pageLoad.value - 9
}

</script>
        
<template>
    <div class="container">
        <div class="cards">
            <Card v-for="character in characters" :name="character.name" :image="character.image" :location="character.location.name"/>
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