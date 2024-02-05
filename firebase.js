// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUGxXRrRG9muzTKU4fqyrz5wAcUcMKkkc",
  authDomain: "be-my-valentine-by-melih.firebaseapp.com",
  projectId: "be-my-valentine-by-melih",
  storageBucket: "be-my-valentine-by-melih.appspot.com",
  messagingSenderId: "722211487184",
  appId: "1:722211487184:web:88c61c62ec194064820dd5",
  measurementId: "G-HXFST09KDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);