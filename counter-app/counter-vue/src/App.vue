<script setup>
import { ref } from 'vue'
const count = ref(0);

function add() {
  count.value++;
}

function sub() {
  if (count.value > 0)
    count.value--;
  else
    alert("Valor mínimo atingido");
}

</script>

<template>
  <main>
    <h4>The counter is currently...</h4>
    <h1>{{ count }}</h1>
    <div class="buttons">
      <button id="menos" @click="sub()">-</button>
      <button id="maix" @click="add()">+</button>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
