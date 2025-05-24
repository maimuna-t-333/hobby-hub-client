// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWZcDQbZPJKBnTHUxhyVtDJaWEoZqNaOk",
  authDomain: "hobby-hub-4cfce.firebaseapp.com",
  projectId: "hobby-hub-4cfce",
  storageBucket: "hobby-hub-4cfce.firebasestorage.app",
  messagingSenderId: "397633385720",
  appId: "1:397633385720:web:a12ab41ace8c1cdd93f70d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);