import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz-sr01i3sJWScT4FYRxbgVCytFDAPesY",
  authDomain: "react-cero-experto-1f6b4.firebaseapp.com",
  databaseURL: "https://react-cero-experto.firebaseio.com",
  projectId: "react-cero-experto-1f6b4",
  storageBucket: "react-cero-experto-1f6b4.appspot.com",
  messagingSenderId: "97073275185",
  appId: "1:97073275185:web:b3e3041b30a7bba6e35010",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleAuthProvider };
