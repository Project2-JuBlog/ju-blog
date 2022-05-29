import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBnBaHK8T68A0HUD1tYaJBJFU_8tPjuTBk",
  authDomain: "jublog-e753d.firebaseapp.com",
  projectId: "jublog-e753d",
  storageBucket: "jublog-e753d.appspot.com",
  messagingSenderId: "296264467137",
  appId: "1:296264467137:web:1f0b30439cff5b7e3a8a40",
  measurementId: "G-GKDSTYZBQL"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
