<template>
  <div class="listaZadan">
    <h2>Zrealizowane zadania</h2>
    <section id="zadania">
      <p v-if="brakZrealizowanych">
        Obecnie nie ma zrealizowanych zadań. Przejdź do&nbsp;
        <router-link to="aktywne">aktywnych zadań</router-link>&nbsp;i jakieś
        zrealizuj...
      </p>
      <ul>
        <li v-for="zad in zrealizowaneZadania" :key="zad.id">
          <span
            ><button @click="przywrocZadanie(zad.id)">
              Przywróć zadanie
            </button></span
          >
          {{ zad.tresc }}
          <span
            ><button @click="usunZadanie(zad.id)">Usuń zadanie</button></span
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    usunZadanie(zadId) {
      this.$store.commit("usunZadanie", zadId);
    },
    przywrocZadanie(zadId) {
      this.$store.commit("przywrocZadanie", zadId);
    },
  },
  computed: {
    zrealizowaneZadania() {
      return this.$store.getters.zrealizowaneZadania;
    },
    brakZrealizowanych() {
      return this.$store.getters.brakZrealizowanych;
    },
  },
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
