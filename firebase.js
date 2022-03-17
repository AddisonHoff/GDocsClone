import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoIdQBohJhctAQtxBTOY6ies_38v9lUT0",
  authDomain: "divination-341004.firebaseapp.com",
  projectId: "divination-341004",
  storageBucket: "divination-341004.appspot.com",
  messagingSenderId: "770293248359",
  appId: "1:770293248359:web:ad7409c6b817697060bfc2",
  measurementId: "G-6K9XQGT2EN"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { db }