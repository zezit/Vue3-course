<script setup lang="ts">
import { ref, computed } from "vue"
import Cards from "./components/Cards.vue"
import {GENDER, type Invitee} from "./types/types"

const name = ref<string>("")
const gender = ref<GENDER>(GENDER.WOMAN)
const invitees = ref<Invitee[]>([])

const addInvitee = (): void => {
  if (name.value.length > 0) {
    invitees.value.push({
      id: Math.floor(Math.random() * 85795213),
      name: name.value,
      gender: gender.value
    })

    name.value = ""
    gender.value = GENDER.WOMAN
  }
}

const count = computed<{ wom: number, men: number }>(() => {
  return invitees.value.reduce((counterObj, invitee) => {
    if (invitee.gender === GENDER.MAN) {
      return {
        ...counterObj,
        men: counterObj.men + 1
      }
    }
    else if (invitee.gender === GENDER.WOMAN) {
      return {
        ...counterObj,
        wom: counterObj.wom + 1
      }
    }
    // Retornar o objeto counterObj sem modificação caso o gênero não seja definido
    return counterObj;
  }, { wom: 0, men: 0 })
})

</script>

<template>
  <main>
    <div>
      <h1>People Invited to My Party</h1>
      <div class="input-container">
        <input @keypress.enter="addInvitee" v-model.trim="name" type="text" placeholder="Name..." />
        <select v-model="gender">
          <option :value="GENDER.WOMAN">Woman</option>
          <option :value="GENDER.MAN">Man</option>
          <option :value="GENDER.OTHER">Other</option>
        </select>
      </div>

      <div class="invitees">
        <Cards v-for="invitee in invitees" :key="invitee.id" :invitee="invitee" />
      </div>

      <div class="counter">
        <p>Invitees: {{ !invitees.length ? "You need to invite people!" : invitees.length }}</p>
        <p v-if="count.wom">Women: {{ count.wom }}</p>
        <p v-if="count.men">Men: {{ count.men }}</p>
        <p v-if="invitees.length !== count.wom + count.men">Other: {{ invitees.length - count.wom - count.men }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
}

h1 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.input-container {
  display: flex;
  flex-direction: column;
}

select {
  cursor: pointer;
}

input,
select {
  outline: none;
  border: 0.2px solid #ccc;
  border-radius: 5px;
  widows: 100%;
  padding: 5px;
  margin-bottom: 12px;
}

.counter p {
  font-weight: 400;
}
</style>
