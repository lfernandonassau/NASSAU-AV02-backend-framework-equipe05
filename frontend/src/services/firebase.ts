import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKw46kvU5nTmNakmaGozYChJoohklvRDY",
  authDomain: "kodan-project.firebaseapp.com",
  projectId: "kodan-project",
  storageBucket: "kodan-project.firebasestorage.app",
  messagingSenderId: "1035908221154",
  appId: "1:1035908221154:web:f3654de198757a1c92b6bb",
  measurementId: "G-Y7EDEZRP1Y"
};

const app = initializeApp(firebaseConfig);

// Serviços que você REALMENTE usa
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
