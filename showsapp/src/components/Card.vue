<script setup>
import { defineProps } from 'vue';

const { name, image, location } = defineProps(['name', 'image', 'location'])
</script>

<template>
    <NCard :title="name" class="n-card">
        <template #cover>
            <img :src="image">
        </template>
        <h3>{{ location }}</h3>
    </NCard>
</template>

<style scoped>
.n-card {
    cursor: pointer;
    width: 200px;
    margin: 10px 20px;
}

.n-card img {
    height: 250px
}

p {
    font-size: 10px;
}

.jobs {
    display: flex;
    flex-wrap: wrap;
}
</style>