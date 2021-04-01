// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDIwqk32tNzV_YhJxXnzvkzrJ5ho2h5fWY",
  authDomain: "clone-9ad75.firebaseapp.com",
  projectId: "clone-9ad75",
  storageBucket: "clone-9ad75.appspot.com",
  messagingSenderId: "778711945540",
  appId: "1:778711945540:web:761a7c7ea5e39cc4824711",
  measurementId: "G-7NC3BTRJ4J",
});

const db = firebase.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };
