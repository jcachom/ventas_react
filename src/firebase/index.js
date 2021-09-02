import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCuPspCvxZoANpA0QF1rVn8CJIA6jLrgwg",
  authDomain: "primerproyjc.firebaseapp.com",
  projectId: "primerproyjc",
  storageBucket: "primerproyjc.appspot.com",
  messagingSenderId: "777520060246",
  appId: "1:777520060246:web:0ede43717bf36c548e68f7",
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
