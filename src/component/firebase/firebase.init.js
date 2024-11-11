// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2i9Cl07bPvEAntFuJq6YXKMBkw531q-Y",
  authDomain: "simple-firebase-3748e.firebaseapp.com",
  projectId: "simple-firebase-3748e",
  storageBucket: "simple-firebase-3748e.firebasestorage.app",
  messagingSenderId: "554970053395",
  appId: "1:554970053395:web:0d192722ad16ee8a2938e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;