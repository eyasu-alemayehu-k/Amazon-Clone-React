import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCyU-2g3MqO58tqMOWl7KEz1jvMKRqmW0",
  authDomain: "clone-e61f2.firebaseapp.com",
  projectId: "clone-e61f2",
  storageBucket: "clone-e61f2.appspot.com",
  messagingSenderId: "931595103214",
  appId: "1:931595103214:web:f5280b91121862fb7f3cff",
  measurementId: "G-4GEPRNJ8BB",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

export { auth, db };
