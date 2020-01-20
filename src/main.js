import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import firebase from "firebase";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let app = "";

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "el-mariachi-system.firebaseapp.com",
  databaseURL: "https://el-mariachi-system.firebaseio.com",
  projectId: "el-mariachi-system",
  storageBucket: "el-mariachi-system.appspot.com",
  messagingSenderId: "953345208300",
  appId: "1:953345208300:web:0c0d18b9c01390bfa11ac9",
  measurementId: "G-B17W8P4W5B"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
