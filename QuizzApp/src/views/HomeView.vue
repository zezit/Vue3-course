<script setup>
import { ref, watch } from "vue"

import data from "../data/quizzes.json"
import Card from "../components/Card.vue"

const quizzes = ref(data)
const search = ref("")

watch(search, () => {
    quizzes.value = data.filter(
        quiz => quiz.name.
            toLowerCase().
            includes(search.value.toLowerCase()))
})

</script>

<template>
    <main>
        <div class="container">
            <header>
                <h1>Quizzes</h1>
                <input v-model.trim="search" type="text" placeholder="Search...">
            </header>

            <div class="options-container">
                <Card v-for="quizz in quizzes" :key="quizz.id" :quizz="quizz" />
            </div>
        </div>
    </main>
</template>

<style scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
}

header {
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

header h1 {
    text-align: center;
    font-weight: bold;
    margin-right: 30px;
}

header input {
    font-size: 1.1rem;
    font-weight: 1.1rem;
    border: none;
    background-color: rgba(128, 128, 128, 0.3);
    padding: 10px;
    border-radius: 5px;
}

.options-container {
    width: 100%;
    /* justify-content: space-evenly; */
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}
</style>