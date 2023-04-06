<script setup>
import { defineProps } from 'vue';

const { quizz } = defineProps(['quizz']);

</script>

<template >
    <div class="card">
        <img :src="quizz.img">
        <dv class="card-text">
            <h2>{{ quizz.name }}</h2>
            <p>
                {{ quizz.questions.length }}
                {{ quizz.questions.length > 1 || !quizz.questions.length ?
                    "questions" :
                    "question" }}
            </p>
        </dv>
    </div>
</template>

<style scoped>
.card {
    margin-right: 30px;
    margin-bottom: 30px;
    overflow: hidden;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 5px;
    width: fit-content;
    cursor: pointer;
}

.card:hover {
    background-color: rgba(128, 128, 128, 0.2);
}

.card h2 {
    font-weight: bold;
}

.card p {
    color: #777;
    font-size: 0.9rem;
}

.card img {
    max-width: 200px;
    border-radius: 5px;
}
</style>