<script setup>
import RandMCards from './RandMCards.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <RandMCards />
        </template>
        <template #fallback>
            <div class="spinner">
                <n-spin size="large" />
            </div>
        </template>
    </Suspense>
</template>

<style scoped>
.spinner {
    height: 700px;
    background-color: rgb(27, 26, 26);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>