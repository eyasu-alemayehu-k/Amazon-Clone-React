import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7JoC8UnH_vaO2V8jj4zBVR_y-c5nB2Wk",

  authDomain: "fir-68958.firebaseapp.com",

  projectId: "fir-68958",

  storageBucket: "fir-68958.appspot.com",

  messagingSenderId: "43056059429",

  appId: "1:43056059429:web:e0f90c8e585c7a8b095bcc",

  measurementId: "G-W0TF84XELQ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

export { auth, db };
