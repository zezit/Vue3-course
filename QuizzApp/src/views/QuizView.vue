<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import quizzes from '../data/quizzes.json';

import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import Result from '../components/Result.vue';

const route = useRoute();

const quizId = parseInt(route.params.id);
const questions = quizzes.find(quiz => quiz.id === quizId).questions;
const currentQuestion = ref(0);
const totalCorrect = ref(0);
const finished = ref(false);
const progress = computed(() => `${(currentQuestion.value / questions.length) * 100}%`);

const nextQuestion = (isCorrect) => {
    totalCorrect.value = isCorrect ? totalCorrect.value + 1 : totalCorrect.value;

    if (currentQuestion.value < questions.length - 1) {
        currentQuestion.value++;
    }
    else {
        finished.value = true;
    }
};
</script>

<template>
    <div v-if="!finished">
        <QuizHeader :progress="progress" :currentQuestion="currentQuestion" :total="questions.length" />

        <div>
            <Question :question="questions[currentQuestion]" @selectedOption="nextQuestion" />
        </div>
    </div>

    <Result v-else :totalCorrect="totalCorrect" :totalQuestions="questions.length" />
</template>