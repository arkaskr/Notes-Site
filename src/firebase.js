// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTcnRXo6aLzhmxouL8kYJBIRoNPAT9yq4",
  authDomain: "notes-app-658ee.firebaseapp.com",
  projectId: "notes-app-658ee",
  storageBucket: "notes-app-658ee.firebasestorage.app",
  messagingSenderId: "752029649272",
  appId: "1:752029649272:web:16eb2de6d0621cef9ce08d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);