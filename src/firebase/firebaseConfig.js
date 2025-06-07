import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCJa-AXHDIOYEB1vRYp3OGUA5q78h7W8gk",
  authDomain: "textcraft-789a3.firebaseapp.com",
  projectId: "textcraft-789a3",
  storageBucket: "textcraft-789a3.firebasestorage.app",
  messagingSenderId: "1003933865628",
  appId: "1:1003933865628:web:403e3e370c507298ba7f59",
  measurementId: "G-HHY2913YSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)