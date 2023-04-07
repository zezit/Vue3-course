<script setup>
import { defineProps } from 'vue';

const { totalCorrect, totalQuestions } = defineProps(['totalCorrect', 'totalQuestions']);

</script>

<template>
    <div class="results">
        <p>Your results...</p>
        <h1>
            {{ totalCorrect }}/{{ totalQuestions }}
        </h1>
    </div>

    <div class="button">
        <p>Home</p>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 24px;
}

/* pop up transition effect */
h1 {
    font-size: 75px;
    margin-top: 40px;
    animation: text-animation 500ms ease-in-out;
}

.button{
    width: 200px;
    height: 50px;
    background-color: bisque;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.button:hover{
    background-color: #f5f5f5;
}

@keyframes text-animation {
    50% {
        font-size: 85px;
    }

    100% {
        font-size: 80px;
    }
}
</style>