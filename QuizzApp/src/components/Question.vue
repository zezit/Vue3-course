<script setup>
import { defineProps, defineEmits } from 'vue';

import Option from '../components/Option.vue'

const { question, next } = defineProps(['question', 'next']);
const emit = defineEmits(['selectedOption']);

const emitSelectedOption = (isCorrect) => {
    emit('selectedOption', isCorrect);
}
</script>

<template>
    <div class="question-container">
        <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
        <Option v-for="option in question.options" :key="option.id" :option="option" @click="emitSelectedOption(option.isCorrect)" />
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
</style>