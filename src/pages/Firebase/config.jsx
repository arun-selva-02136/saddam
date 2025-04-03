// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDMU1B1tGYTYdK2IRpXksHrkmceIWJV4TE",
  authDomain: "saddam-7a0ae.firebaseapp.com",
  projectId: "saddam-7a0ae",
  storageBucket: "saddam-7a0ae.firebasestorage.app",
  messagingSenderId: "989992176716",
  appId: "1:989992176716:web:72695de2b5b4c499c978e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db,auth };
