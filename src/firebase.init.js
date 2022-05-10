// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBATl8LV4TtDK58qqu6QnBpoEjU13UsRvo",
  authDomain: "doctors-portal-a3f2f.firebaseapp.com",
  projectId: "doctors-portal-a3f2f",
  storageBucket: "doctors-portal-a3f2f.appspot.com",
  messagingSenderId: "83937072884",
  appId: "1:83937072884:web:cd70cb5f57a4c7d75cf0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);