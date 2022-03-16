import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDoIdQBohJhctAQtxBTOY6ies_38v9lUT0",
    authDomain: "divination-341004.firebaseapp.com",
    projectId: "divination-341004",
    storageBucket: "divination-341004.appspot.com",
    messagingSenderId: "770293248359",
    appId: "1:770293248359:web:ad7409c6b817697060bfc2",
    measurementId: "G-6K9XQGT2EN"
  };

  const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app //Initialize app, check that app doesn't already exist if it does, use existing

  const db = getFirestore();

  export { db }