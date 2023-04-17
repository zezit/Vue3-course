<script setup lang="ts">
import { defineProps } from 'vue';
import {GENDER, type Invitee} from "../types/types"

const { invitee } = defineProps<{
    invitee:Invitee
}>()

const color: string = invitee.gender === GENDER.WOMAN ? '#784383' : invitee.gender === GENDER.MAN ? '#793321' : '#217972'

</script>

<template>
    <div class="container" :style="{ backgroundColor: color }">
        {{ invitee.name[0].toUpperCase() + invitee.name.substring(1) }}
    </div>
</template>

<style scoped>
.container {
    font-weight: 500;
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    padding: 3px;
    color: white;
}
</style>