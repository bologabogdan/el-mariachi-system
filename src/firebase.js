import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "el-mariachi-system.firebaseapp.com",
  databaseURL: "https://el-mariachi-system.firebaseio.com",
  projectId: "el-mariachi-system",
  storageBucket: "el-mariachi-system.appspot.com",
  messagingSenderId: "953345208300",
  appId: "1:953345208300:web:0c0d18b9c01390bfa11ac9",
  measurementId: "G-B17W8P4W5B"
};

const firebaseApp = firebase.initializeApp(config);

const firestore = firebaseApp.firestore();
firestore.settings({});

export default firestore;
