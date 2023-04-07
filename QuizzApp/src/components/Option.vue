<script setup>
import { defineProps } from 'vue';

const { option } = defineProps(['option']);
</script>

<template>
    <div class="option">
        <p class="option-label">{{ option.label }}</p>
        <div class="option-value">
            <p>{{ option.text }}</p>
        </div>
    </div>
</template>

<style scoped>
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

@media (prefers-color-scheme: dark) {
    .option {
        color: #595959;
    }
}
</style>