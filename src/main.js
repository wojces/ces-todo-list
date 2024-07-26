// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

// createApp(App).use(store).use(router).mount('#app')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
