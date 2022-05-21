// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnBaHK8T68A0HUD1tYaJBJFU_8tPjuTBk",
  authDomain: "jublog-e753d.firebaseapp.com",
  projectId: "jublog-e753d",
  storageBucket: "jublog-e753d.appspot.com",
  messagingSenderId: "296264467137",
  appId: "1:296264467137:web:1f0b30439cff5b7e3a8a40",
  measurementId: "G-GKDSTYZBQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);