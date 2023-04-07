<script setup>
import { defineProps } from 'vue';

const { progress, currentQuestion, total } = defineProps(['progress', 'currentQuestion', 'total']);

</script>

<template>
    <header>
        <h4>Question {{ currentQuestion }}/{{ total }}</h4>
        <div class="bar">
            <div class="completion" :style="{ width: progress }"></div>
        </div>
    </header>
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
    width: 400px;
    height: 50px;
    border: 3px solid bisque;
    border-radius: 10px;
}

.completion {
    width: 0%;
    height: 100%;
    background-color: bisque;
    transition: all 0.2s ease-in-out;
}
</style>