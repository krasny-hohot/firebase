import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify';
import firebase from 'firebase/app'; // Import only the Firebase App module

import 'firebase/database'; // Import the Firebase Realtime Database module (or other Firebase modules if needed)

Vue.config.productionTip = false;

Vue.use(Vuetify);

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    // Additional theme configurations go here
  },
});

new Vue({
  render: (h) => h(App),
  vuetify,
}).$mount('#app');
