// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb9NQcuGKGcRQKOeSY9gN31FnPT8haCbA",
  authDomain: "portfolio-1f0b4.firebaseapp.com",
  projectId: "portfolio-1f0b4",
  storageBucket: "portfolio-1f0b4.appspot.com",
  messagingSenderId: "103694362974",
  appId: "1:103694362974:web:b14c5a5cc67638a1a0c7cf",
  measurementId: "G-ZWFTCBDHDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
