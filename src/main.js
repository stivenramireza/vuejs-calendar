import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBiuo7EwR2FWU8WDJoeNhumDd8q_l9_ISc",
  authDomain: "calendar-bded1.firebaseapp.com",
  databaseURL: "https://calendar-bded1.firebaseio.com",
  projectId: "calendar-bded1",
  storageBucket: "calendar-bded1.appspot.com",
  messagingSenderId: "599252354914",
  appId: "1:599252354914:web:87af747345a52ed476ce3b",
  measurementId: "G-00ZRRVJEQ7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
