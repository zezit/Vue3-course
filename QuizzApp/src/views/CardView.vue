<script setup>
import { useRoute } from 'vue-router';
import Question from '../components/Question.vue';
import quizzes from '../data/quizzes.json';

const route = useRoute();

const questions = quizzes.find(quiz => quiz.id === parseInt(route.params.id)).questions;

</script>

<template>
    <div>
        <Header/>

        <div>
            <Question v-for="question in questions" :key="question.id" :question="question"/>
        </div>
    </div>
</template>

<style scoped>
header {
    margin-top: 20px;
}

header h4 {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 10px;
}

.bar {
    width: 200px;
    height: 50px;
    border: 3px solid bisque;
}

.completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
}
</style>