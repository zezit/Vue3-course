<template>
  <main>
    <!-- <div class="overlay">
      <div class="modal">
        <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
        <button>Add Note</button>
        <button class="close">Close</button>
      </div>
    </div> -->
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button>+</button>
      </header>

      <div class="cards-container">
        <div class="card">
          <p class="main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam adipisci veniam provident hic
            molestias accusamus!</p>
          <p class="date">20/04/2003</p>
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
}

.main-text {
  color: #f5f5f5;
  font-size: 1.1rem;
}

.date {
  color: #f5f5f5;
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

.modal textarea{
  border-radius: 15px;
  padding: 20px;
  font-size: 1.2rem;
}

.modal button{
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

.close{
  background-color: rgb(161, 12, 12) !important;
}
</style>