<script setup>
import { defineProps } from 'vue';

const { question } = defineProps(['question']);

console.log(question);
</script>

<template>
    <div class="question-container">
        <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
        <div class="option">
            <p class="option-label">A</p>
            <div class="option-value">
                <p>NaCl</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 2.2em;
    font-weight: 400;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.option:hover {
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
}

.option-label {
    border-radius: 100%;
    background-color: bisque;
    width: 55px;
    height: 55px;
    font-size: 1.7em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    margin-right: 20px;
}

.option-value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    font-size: 1.7em;
    padding: 0 20px;
    border-radius: 15px;
}
</style>