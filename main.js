import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify';
import firebase from 'firebase/app'; 
import 'firebase/database';
Vue.config.productionTip = false;
Vue.use(Vuetify);
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
});
new Vue({
  render: (h) => h(App),
  vuetify,
}).$mount('#app');
