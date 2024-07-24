import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      zadania: [

      ],
      wprowadzoneZadanie: "",
      zrealizowane: [

      ],
      brakAktywnych: false,
      brakZrealizowanych: false
    };
  },

  mutations: {
    dodajZadanie(state) {
      const noweZadanie = {
        id: new Date().toISOString(),
        tresc: state.wprowadzoneZadanie
      };
      state.zadania.push(noweZadanie);
    },
    submitForm(state) {
      state.wprowadzoneZadanie = "";
      state.brakAktywnych = false
    },
    zrealizujZadanie(state, zadId) {
      const zrealizowaneZadanie = state.zadania.find((zadanie) => zadanie.id === zadId)
      state.zadania = state.zadania.filter((zadanie) => zadanie.id !== zadId);
      state.zrealizowane.push(zrealizowaneZadanie)
      if (state.zadania.length === 0) {
        state.brakAktywnych = true
      }
      state.brakZrealizowanych = false
    },
    wprowadzoneZadanie(state, value) {
      state.wprowadzoneZadanie = value
    },
    usunZadanie(state, zadId) {
      state.zrealizowane = state.zrealizowane.filter((zrealizowane) => zrealizowane.id !== zadId)
      if (state.zrealizowane.length <= 0) {
        state.brakZrealizowanych = true
      }
    },
    przywrocZadanie(state, zadId) {
      const przywroconeZadanie = state.zrealizowane.find((zrealizowane) => zrealizowane.id === zadId)
      state.zrealizowane = state.zrealizowane.filter((zrealizowane) => zrealizowane.id !== zadId)
      state.zadania.push(przywroconeZadanie)
      if (state.zrealizowane.length <= 0) {
        state.brakZrealizowanych = true
      }
      state.brakAktywnych = false
    }
  },
  getters: {
    wszystkieZadania(state) {
      return state.zadania;
    },
    zrealizowaneZadania(state) {
      return state.zrealizowane
    },
    brakAktywnych(state) {
      return state.brakAktywnych
    },
    brakZrealizowanych(state) {
      return state.brakZrealizowanych
    }
  },
  actions: {},
});
