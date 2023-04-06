<script setup>
import { ref, onMounted } from 'vue'
import faker from 'faker';

const showModal = ref(false)
const newNote = ref("")
const allNotes = ref([])
const errorMessage = ref("")

function generateNotes(count) {
  const notes = [];
  for (let i = 0; i < count; i++) {
    const note = {
      id: faker.random.uuid(),
      text: faker.lorem.sentence(),
      backgroundColor: faker.internet.color(),
      date: faker.date.recent()
    };
    notes.push(note);
  }

  return notes;
}

onMounted(() => {
  allNotes.value = generateNotes(10);
});

const createNote = () => {
  if (newNote.value.length < 10) {
    errorMessage.value = "Please enter a note with more than 9 characters"
    return
  }

  function getRandomPastelColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  allNotes.value.unshift({
    id: Math.random() * 1000000,
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomPastelColor()
  })

  showModal.value = false
  newNote.value = ""
}

const getFormaterDate = (note) => {
  let day = note.date.getDate()
  let mm = note.date.getMonth() + 1
  let yy = note.date.getFullYear()

  day = day < 10 ? `0${day}` : day
  mm = mm < 10 ? `0${mm}` : mm

  return `${day}/${mm}/${yy}`
}
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" name="notes" id="notes" cols="30" rows="10"></textarea>
        <p class="error" v-show="errorMessage">{{ errorMessage }}</p>
        <button @click="createNote()">Add Note</button>
        <button @click="showModal = false" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>

      <div class="cards-container">
        <div v-for="note in allNotes" :key="note.id" class="card" :style="{ backgroundColor: note.backgroundColor }">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ getFormaterDate(note) }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  background-color: #f5f5f5;
  border: none;
  border-radius: 100%;
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  width: 50px;
  height: 50px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  color: #f5f5f5;
}

.main-text {
  font-size: 1.1rem;
}

.date {
  /* color: #f5f5f5; */
  font-weight: bold;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal textarea {
  border-radius: 15px;
  padding: 20px;
  font-size: 1.2rem;
}

.modal button {
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  cursor: pointer;
  color: white;
  margin-top: 15px;
}

.close {
  background-color: rgb(161, 12, 12) !important;
}

.error {
  color: red;
  transition: all 0.3s ease-in-out;
  animation: error 0.3s ease-in-out;
}
</style>