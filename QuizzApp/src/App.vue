<script setup>
import data from "./data/quizzes.json"
import { ref, watch, computed } from "vue"

const quizzes = ref(data)
const search = ref("")

watch(search, (value) => {
  quizzes.value = data.filter(
    quiz => quiz.name.
      toLowerCase().
      includes(search.value.toLowerCase()))
})

</script>

<template>
  <main>
    <div class="container">
      <header>
        <h1>Quizzes</h1>
        <input v-model.trim="search" type="text" placeholder="Search...">
      </header>

      <div class="options-container">
        <div v-for="quiz in quizzes" :key="quiz.id" class="card">
          <img :src="quiz.img">
          <dv class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
          </dv>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  text-align: center;
  font-weight: bold;
  margin-right: 30px;
}

header input {
  font-size: 1.1rem;
  font-weight: 1.1rem;
  border: none;
  background-color: rgba(128, 128, 128, 0.3);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  width: 100%;
  /* justify-content: space-evenly; */
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

.card {
  margin-right: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5px;
  width: fit-content;
  cursor: pointer;
}

.card:hover {
  background-color: rgba(128, 128, 128, 0.2);
}

.card h2 {
  font-weight: bold;
}

.card p {
  color: #777;
  font-size: 0.9rem;
}

.card img {
  max-width: 200px;
  border-radius: 5px;
}
</style>