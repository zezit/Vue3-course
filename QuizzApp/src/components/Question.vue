<script setup>
import { defineProps, defineEmits } from 'vue';
import gsap from "gsap"

import Option from '../components/Option.vue'

const { question, next } = defineProps(['question', 'next']);
const emit = defineEmits(['selectedOption']);

const emitSelectedOption = (isCorrect) => {
    emit('selectedOption', isCorrect);
}

const enterAnimation = (element) => {
    console.log(element)
    gsap.fromTo(element,
        { opacity: 0, x: "-100px" },
        { opacity: 1, x: 0, duration: 0.3, delay: element.dataset.index * 0.2 })
}
</script>

<template>
    <div>
        <div class="question-container">
            <h1 class="question">{{ question.text }}</h1>
        </div>
        <div class="options-container">
            <TransitionGroup @before-enter="enterAnimation">
                <Option v-for="(option, index) in question.options" :data-index="index" :key="option.id" :option="option"
                    @click="emitSelectedOption(option.isCorrect)" />
            </TransitionGroup>
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
</style>