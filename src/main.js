import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"
import './registerServiceWorker'

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyCmsbyvTLTaglw1PFO-gH5wIB87kPKQjCY",
  authDomain: "picsearch-19.firebaseapp.com",
  databaseURL: "https://picsearch-19.firebaseio.com",
  projectId: "picsearch-19",
  storageBucket: "picsearch-19.appspot.com",
  messagingSenderId: "563150183283",
  appId: "1:563150183283:web:370bce9b643713ee"
};
firebase.initializeApp(firebaseConfig)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
