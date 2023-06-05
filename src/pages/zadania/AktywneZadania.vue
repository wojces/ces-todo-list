<template>
  <div class="listaZadan">
    <section id="wprowadzanie">
      <h2>Aktywne zadania</h2>
      <form @submit.prevent="submitForm">
        <input
          type="text"
          placeholder="Wprowadź zadanie..."
          v-model="wprowadzoneZadanie"
        />
        <button @click="dodajZadanie">Dodaj zadanie</button>
      </form>
    </section>
    <section id="zadania">
      <p v-if="brakAktywnych">Obecnie nie ma aktywnych zadań, dodaj coś do twojej listy...</p>
      <ul>
          <li
            v-for="zad in wszystkieZadania"
            :key="zad.id"
            @click="zrealizujZadanie(zad.id)"
          >
            {{ zad.tresc }}
          </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    dodajZadanie() {
      this.$store.commit('dodajZadanie')
    },
    submitForm() {
      this.$store.commit('submitForm')
    },
    zrealizujZadanie(zadId) {
      this.$store.commit('zrealizujZadanie', zadId)
    }
  },
  computed: {
    wszystkieZadania() {
      return this.$store.getters.wszystkieZadania
    },
    wprowadzoneZadanie: {
      get () {
        return this.$store.state.wprowadzoneZadanie
      },
      set (value) {
        this.$store.commit('wprowadzoneZadanie', value)
      }
    },
    brakAktywnych() {
      return this.$store.getters.brakAktywnych
    }
    
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;700&display=swap");
.listaZadan {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  border: 1px solid black;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px 10px;
}

#wprowadzanie h2 {
  display: flex;
  justify-content: center;
  margin: 0 0 10px 0;
}

#wprowadzanie input {
  font-family: "Jost", sans-serif;
  font-weight: 700;
  height: 40px;
  width: 400px;
  padding: 10px 5px;
  margin: 15px 10px;
}

#wprowadzanie button {
  font-family: "Jost", sans-serif;
  font-weight: 700;
  height: 40px;
  padding: 5px 10px 5px 10px;
  margin: 15px 10px;
}

#zadania {
  width: 90%;
  margin: 0 35px 0 0;
}

#zadania p {
  display: flex;
  justify-content: center;
  font-weight: 700;
}

#zadania ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
}

#zadania li {
  margin: 8px 0;
  padding: 4px 0;
  font-weight: 700;
  border: 1px solid black transparent;
  background-color: rgb(184, 184, 184);
  border-radius: 10px;
}
</style>
