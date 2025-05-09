// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5StPGgve1jWbL9uQDfwgYn6DKNTD3Fpc",
  authDomain: "vite-contact-ca1d9.firebaseapp.com",
  projectId: "vite-contact-ca1d9",
  storageBucket: "vite-contact-ca1d9.firebasestorage.app",
  messagingSenderId: "929654748465",
  appId: "1:929654748465:web:a61bfe8b0ca26ef9f46c10",
  measurementId: "G-MJJM7SF6DE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
